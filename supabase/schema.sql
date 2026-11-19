-- PPE Study: online accounts and leaderboards.
--
-- Run this once in the Supabase dashboard: SQL Editor > New query > paste everything > Run.
-- It is safe to run again after changes: tables are only created when missing and the
-- policies and functions are replaced.
--
-- To make your own account an admin (after joining in the app), run:
--   update public.profiles set is_admin = true where display_name = 'YourName';

-- Players: one row per account, created by the app when someone joins.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null
    check (char_length(display_name) between 2 and 24 and display_name = btrim(display_name)),
  is_admin boolean not null default false,
  banned boolean not null default false,
  created_at timestamptz not null default now()
);
create unique index if not exists profiles_display_name_key on public.profiles (lower(display_name));

-- XP per player, per device, per local calendar day. Each device uploads its own daily
-- totals, so uploads can be retried safely, and a player's XP is the sum over devices.
-- The cap blocks absurd values; admins can ban anyone who cheats below it.
create table if not exists public.xp_days (
  user_id uuid not null references public.profiles (id) on delete cascade,
  device_id uuid not null,
  day date not null,
  xp integer not null check (xp between 0 and 20000),
  updated_at timestamptz not null default now(),
  primary key (user_id, device_id, day)
);
create index if not exists xp_days_day_idx on public.xp_days (day);

alter table public.profiles enable row level security;
alter table public.xp_days enable row level security;

-- Helpers ------------------------------------------------------------------------------

-- Leaderboard weeks start on Monday, Dutch time.
create or replace function public.week_start() returns date
language sql stable set search_path = '' as $$
  select date_trunc('week', now() at time zone 'Europe/Amsterdam')::date
$$;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select coalesce((select p.is_admin from public.profiles p where p.id = auth.uid()), false)
$$;

create or replace function public.is_banned() returns boolean
language sql stable security definer set search_path = '' as $$
  select coalesce((select p.banned from public.profiles p where p.id = auth.uid()), false)
$$;

-- Access rules -------------------------------------------------------------------------

-- Profiles: players read and create only their own row and may only change their name.
-- Everyone else's data reaches the app through the leaderboard function below.
drop policy if exists "Players read own profile" on public.profiles;
create policy "Players read own profile" on public.profiles
  for select to authenticated using (id = (select auth.uid()));

drop policy if exists "Players create own profile" on public.profiles;
create policy "Players create own profile" on public.profiles
  for insert to authenticated with check (id = (select auth.uid()));

drop policy if exists "Players rename themselves" on public.profiles;
create policy "Players rename themselves" on public.profiles
  for update to authenticated
  using (id = (select auth.uid())) with check (id = (select auth.uid()));

revoke all on public.profiles from anon, authenticated;
grant select on public.profiles to authenticated;
grant insert (id, display_name) on public.profiles to authenticated;
grant update (display_name) on public.profiles to authenticated;

-- XP: players manage only their own rows; banned players can no longer add XP.
drop policy if exists "Players read own XP" on public.xp_days;
create policy "Players read own XP" on public.xp_days
  for select to authenticated using (user_id = (select auth.uid()));

drop policy if exists "Players add own XP" on public.xp_days;
create policy "Players add own XP" on public.xp_days
  for insert to authenticated
  with check (user_id = (select auth.uid()) and day <= current_date + 1 and not public.is_banned());

drop policy if exists "Players update own XP" on public.xp_days;
create policy "Players update own XP" on public.xp_days
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()) and day <= current_date + 1 and not public.is_banned());

drop policy if exists "Players delete own XP" on public.xp_days;
create policy "Players delete own XP" on public.xp_days
  for delete to authenticated using (user_id = (select auth.uid()));

revoke all on public.xp_days from anon, authenticated;
grant select, insert, update, delete on public.xp_days to authenticated;

-- Leaderboards ---------------------------------------------------------------------------

-- Weekly ('week') or all-time ('all') ranking of players who are not banned, with their
-- all-time XP for the rank badge. Returns the top p_limit places plus the caller's own row.
drop function if exists public.leaderboard(text, integer);
create function public.leaderboard(p_period text default 'week', p_limit integer default 50)
returns table (user_id uuid, display_name text, xp bigint, total_xp bigint, place bigint, is_me boolean)
language sql stable security definer set search_path = '' as $$
  with totals as (
    select x.user_id,
           sum(x.xp) as total_xp,
           coalesce(sum(x.xp) filter (where x.day >= public.week_start()), 0) as week_xp
    from public.xp_days x
    group by x.user_id
  ), board as (
    select p.id as user_id, p.display_name,
           case when p_period = 'week' then t.week_xp else t.total_xp end as xp,
           t.total_xp
    from totals t
    join public.profiles p on p.id = t.user_id
    where not p.banned
  ), ranked as (
    select b.*, rank() over (order by b.xp desc) as place
    from board b
    where b.xp > 0
  )
  select r.user_id, r.display_name, r.xp, r.total_xp, r.place,
         coalesce(r.user_id = auth.uid(), false) as is_me
  from ranked r
  where r.place <= p_limit or r.user_id = auth.uid()
  order by r.place, r.display_name
$$;

-- The caller's own XP: in total, this week, and from devices other than p_device.
drop function if exists public.my_xp(uuid);
create function public.my_xp(p_device uuid)
returns table (total_xp bigint, week_xp bigint, other_devices_xp bigint)
language sql stable set search_path = '' as $$
  select coalesce(sum(x.xp), 0),
         coalesce(sum(x.xp) filter (where x.day >= public.week_start()), 0),
         coalesce(sum(x.xp) filter (where x.device_id <> p_device), 0)
  from public.xp_days x
  where x.user_id = auth.uid()
$$;

-- Account deletion --------------------------------------------------------------------------

-- Deletes the caller's profile and XP, then their login.
create or replace function public.delete_my_account() returns void
language plpgsql security definer set search_path = '' as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'Not signed in';
  end if;
  delete from public.profiles where id = uid;
  begin
    delete from auth.users where id = uid;
  exception when insufficient_privilege then
    null; -- the player's data is gone; only an empty login record stays behind
  end;
end;
$$;

-- Admin tools ---------------------------------------------------------------------------------

drop function if exists public.admin_players();
create function public.admin_players()
returns table (user_id uuid, display_name text, total_xp bigint, week_xp bigint,
               banned boolean, is_admin boolean, created_at timestamptz)
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_admin() then
    raise exception 'Admins only';
  end if;
  return query
    select p.id, p.display_name,
           coalesce(sum(x.xp), 0)::bigint,
           coalesce(sum(x.xp) filter (where x.day >= public.week_start()), 0)::bigint,
           p.banned, p.is_admin, p.created_at
    from public.profiles p
    left join public.xp_days x on x.user_id = p.id
    group by p.id
    order by coalesce(sum(x.xp), 0) desc, p.display_name;
end;
$$;

create or replace function public.admin_set_banned(p_user uuid, p_banned boolean) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_admin() then
    raise exception 'Admins only';
  end if;
  update public.profiles set banned = p_banned where id = p_user and not is_admin;
end;
$$;

create or replace function public.admin_rename(p_user uuid, p_name text) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_admin() then
    raise exception 'Admins only';
  end if;
  update public.profiles set display_name = btrim(p_name) where id = p_user;
end;
$$;

-- Who may call what: the leaderboard is public; everything else needs a signed-in player
-- (the admin functions also check is_admin themselves).
revoke execute on all functions in schema public from public, anon;
grant execute on function public.week_start() to anon, authenticated;
grant execute on function public.leaderboard(text, integer) to anon, authenticated;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.is_banned() to authenticated;
grant execute on function public.my_xp(uuid) to authenticated;
grant execute on function public.delete_my_account() to authenticated;
grant execute on function public.admin_players() to authenticated;
grant execute on function public.admin_set_banned(uuid, boolean) to authenticated;
grant execute on function public.admin_rename(uuid, text) to authenticated;
