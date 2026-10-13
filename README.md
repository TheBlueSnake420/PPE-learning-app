# PPE Study

A Duolingo-style study app for PPE at Utrecht University. Android first, built with Expo (React Native + TypeScript).

- **Levels:** Year → Basics / Advanced → course → units → short lessons
- **Exercises:** multiple choice, true/false, fill in the blank, matching pairs, put in order, select all that apply, and open "think it through" questions (write an answer, compare it with a model answer, tick the key points you covered)
- **Study material:** per-course topic summaries, key points, key terms, readings and flashcards
- **Motivation:** XP, daily goal, daily streak, and a mistake-review mode with spaced repetition
- **Progress** is saved on the phone (no account needed). Uninstalling the app deletes it.

## Project layout

```
src/app/            Screens (Expo Router: every file is a route)
src/components/     UI pieces, the lesson engine and the exercise types
src/content/        All course content + the content model (types.ts)
src/store/          Saved progress (XP, streak, lessons, review queue)
source-material/    Your slides and readings - git-ignored, never committed
```

## Adding or changing content

Each course is a folder in `src/content/courses/<course-id>/`:

- `index.ts` - title, year, colour, and the list of weeks
- `w2.ts`, `w3.ts`, ... - one file per lecture week, each with a study topic (summary, key points, key terms, readings), a Basics unit and an Advanced unit

To add a week, create its file and add it to the course's `index.ts`. New courses must also be listed in `src/content/index.ts`.

**Never change or reuse an ID** (course, lesson, exercise) once the app is in use: saved progress and the review queue refer to them. Add new IDs instead.

Check your changes with:

```bash
npm run check
```

That runs the TypeScript compiler and a content validator (unique IDs, answers that exist, etc.).

## Running and building

```bash
npm run web
```

Opens a browser preview at http://localhost:8081, which is the quickest way to check changes.

Build an installable APK in the cloud (needs `npx eas-cli login` once):

```bash
npx eas-cli@latest build -p android --profile preview
```

When it finishes, open the download link on your phone and install the APK. New builds install over the old one and keep your progress.

Push new content to the installed app without building a new APK:

```bash
npx eas-cli@latest update --channel preview --environment preview --message "Add week 3 lessons"
```

The app downloads the update in the background; close and reopen it (sometimes twice) to see the new content. A new APK is only needed when native packages or `app.json` change.
