@AGENTS.md

# Project notes

Personal Duolingo-style study app for a first-year PPE student at Utrecht University. See README.md for layout and commands.

## Content layout

Each course is `src/content/courses/<course-id>/` with one file per lecture week (`w2.ts`, `w3.ts`, ...). A week file exports a `WeekContent`: one study topic plus one Basics unit and one Advanced unit. `index.ts` lists the weeks in order via `courseFromWeeks`. To add a new week: extract the slides (`source-material/.text/` holds text extracts), write `wN.ts`, add it to the course's `index.ts`, run `npm run check`.

ID scheme: lessons `wN-b1`, `wN-a1`; exercises `wNb1-01`, `wNa1-01`; topics `wN-<slug>`.

Exercise types: `choice`, `truefalse`, `fill`, `match`, `order`, `multi` (select all that apply) and `open` (explain, reveal a model answer, tick covered key points; passes at 60%). Each advanced unit ends with a "Think it through" lesson mixing `open`, `multi` and calculation questions.

Readings: assigned articles live in `source-material/<course>/Articles/`, student notes in `source-material/<course>/Notes/`. The student only needs an article's key concepts and theories. Each article gets "Reading: ..." study sections, key terms, a citation in `readings` and a Basics "Reading: ..." lesson; a week with readings also gets an Advanced "Reading: ..." lesson placed before "Think it through". Scanned PDFs have no text layer: render the pages to images to read them.

Student notes: `source-material/` also holds revision notes by last year's students. Content based on them is flagged: `fromNotes: true` on a `WeekContent` (whole week, e.g. a lecture not given yet) or on a single lesson, and section headings say "(from student notes)". When this year's slides for such a week arrive, rewrite the week from the slides and drop the flag.

## Content rules

- Course source files (slides, readings) live in `source-material/`, which is git-ignored because the repo is public. Never commit them, and never copy long verbatim passages from them into `src/content/`: write summaries and questions in your own words.
- Lessons are short: 5-10 exercises, mixing types. Basics = concepts and definitions. Advanced = arguments, evaluating evidence, applying theory.
- Test concepts and theories, not who said what. Never ask the student to match a person to a theory (the student asked for this explicitly for Comparative Democratic Institutions); name the theory instead (e.g. "the freezing hypothesis", not "Lipset and Rokkan"). Authors may appear in study material and reading citations.
- Every exercise needs a stable `id`, unique within its course. Never rename or reuse IDs; saved progress depends on them.
- Prefer an `explanation` on exercises where the reason for the answer isn't obvious.
- Only state what the source material supports. Mark anything not from the course material clearly, or leave it out. Student notes contain errors: cross-check them against the slides and Allen, and correct or drop doubtful claims.
- Multiple-choice distractors must be plausible and of similar length to the correct answer; put extra detail in `explanation`. `npm run check` warns when the correct option is guessable by length.
- Run `npm run check` after editing content.

## Delivery

The app ships as an APK via EAS Build (`preview` profile). Content-only changes can go out with `eas update --channel preview --environment preview`; changes to native packages or app.json need a new build. The runtime version follows `version` in app.json (policy `appVersion`): bump it for every native change, so OTA updates never reach an APK without the matching native code.

Streak reminders are local notifications (expo-notifications): `src/lib/reminders.ts` plans them (pure, no native calls), `src/lib/notifications.ts` schedules them and re-syncs on app start, on foreground and when the streak changes.

## Progress and rewards

Progress is saved by zustand `persist` in `src/store/progress.ts` (storage version 1, no migrate function). Add new fields with defaults in `initialData` and `partialize`; never bump the version without writing a migration, or saved progress is lost.

The XP levelling system is called "rank" in code and UI, because "level" already means a year and tier (Year 1 · Basics). The rank table is `RANKS` in `src/lib/ranks.ts`; XP boosts (duration and steps up to 10x) are in `src/lib/boost.ts`. Both are pure and can be changed freely.

## Online (leaderboards)

Backend: Supabase (free plan). `supabase/schema.sql` holds all tables, row level security and functions; the owner pastes it into the dashboard SQL Editor (re-runnable). The client is `src/lib/supabase.ts` (public URL and publishable key; never add a secret key or the DB password) and `src/store/online.ts`. Studying stays offline; each device uploads its XP per day (idempotent upserts keyed by user, device and day), and leaderboards are computed server-side. Session storage uses AsyncStorage, not expo-sqlite, so online changes ship as OTA updates. Email sign-in uses 6-digit codes, which need `{{ .Token }}` in the Supabase email templates and custom SMTP for addresses outside the project team.
