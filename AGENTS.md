# SDK Working Rules

- Backend contracts/options/roles/revisions are authoritative.
- Do not spoof Origin or put merchant secrets in a mobile application.
- Never log personal data, images, session tokens or launch tickets.
- Callback/navigation is not merchant-authoritative verification approval.
- Keep session orchestration independent of React components and device adapters.
- Maintain behavior parity with the Flutter SDK. Do not change sibling projects
  or the backend incidentally. No guessed endpoints or pretend verification.
- Run typecheck, build and tests after changes. Native builds are a separate gate.
