@AGENTS.md

# Project notes

Personal Duolingo-style study app for a first-year PPE student at Utrecht University. See README.md for layout and commands.

## Content layout

Each course is `src/content/courses/<course-id>/` with one file per lecture week (`w2.ts`, `w3.ts`, ...). A week file exports a `WeekContent`: one study topic plus one Basics unit and one Advanced unit. `index.ts` lists the weeks in order via `courseFromWeeks`. To add a new week: extract the slides (`source-material/.text/` holds text extracts), write `wN.ts`, add it to the course's `index.ts`, run `npm run check`.

ID scheme: lessons `wN-b1`, `wN-a1`; exercises `wNb1-01`, `wNa1-01`; topics `wN-<slug>`.

## Content rules

- Course source files (slides, readings) live in `source-material/`, which is git-ignored because the repo is public. Never commit them, and never copy long verbatim passages from them into `src/content/`: write summaries and questions in your own words.
- Lessons are short: 5-10 exercises, mixing types. Basics = concepts, definitions, who argued what. Advanced = arguments, evaluating evidence, applying theory.
- Every exercise needs a stable `id`, unique within its course. Never rename or reuse IDs; saved progress depends on them.
- Prefer an `explanation` on exercises where the reason for the answer isn't obvious.
- Only state what the source material supports. Mark anything not from the course material clearly, or leave it out.
- Multiple-choice distractors must be plausible and of similar length to the correct answer; put extra detail in `explanation`. `npm run check` warns when the correct option is guessable by length.
- Run `npm run check` after editing content.

## Delivery

The app ships as an APK via EAS Build (`preview` profile). Content-only changes can go out with `eas update --channel preview --environment preview`; changes to native packages or app.json need a new build.
