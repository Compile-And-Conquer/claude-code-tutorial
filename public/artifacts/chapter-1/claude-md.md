# Ab Bekhoor — CLAUDE.md

Ab Bekhoor ("Drink water!" in Persian) is a Flutter mobile app for tracking daily water intake.
Local-only, no backend, no user accounts.

## Stack

- Flutter 3.x (iOS + Android)
- State management: Riverpod 2.x (AsyncNotifier pattern)
- Local storage: Drift 2.x (SQLite wrapper)
- Notifications: flutter_local_notifications 17.x
- Charts: fl_chart 0.x
- No Firebase, no Supabase, no backend of any kind

## Features (in scope)

1. Log water intake — 250ml, 500ml, or custom amount
2. Daily goal — calculated from user weight + activity level (editable)
3. Daily progress — progress bar + ml count on home screen
4. Streak tracking — consecutive days hitting goal
5. Reminders — local notifications at user-set intervals
6. Weekly history — bar chart of last 7 days
7. Onboarding — weight + goal setup on first launch

## Non-goals (do not build these)

- Backend sync or cloud storage
- Social features (sharing, challenges, leaderboards)
- Web or desktop version
- HealthKit / Google Fit integration (stretch goal mentioned in Chapter 7 only)
- Fancy animations or gamification beyond streak count
- Multiple user profiles

## Architecture

- Feature-first folder structure: `lib/features/home/`, `lib/features/history/`, `lib/features/settings/`
- Each feature: `data/`, `domain/`, `presentation/` subdirectories
- Riverpod providers in `lib/providers/`
- Drift database in `lib/database/`
- No global state beyond what Riverpod manages

## Code conventions

- All async operations via AsyncNotifier, not FutureProvider
- No setState() in any file that uses Riverpod
- Drift tables defined in `lib/database/tables.dart`, generated code in `lib/database/database.g.dart`
- Run `dart run build_runner build` after any schema change
- Do not modify `.g.dart` files directly

## ICP (from Chapter 0 research)

Active adults, 25–45, who want to hit a daily hydration goal without an app that gamifies, nags, or requires accounts. Currently using Notes or a reminder alarm. Would switch for: one-tap logging, no friction, no sign-up.
