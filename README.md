# LuliVerify React Native SDK

Private TypeScript library scaffold. Flutter is being developed first. This is
not yet a working React Native verification SDK or a TurboModule.

```text
src/index.ts                   Public exports
src/core/config/               Non-secret configuration
src/core/errors/               SDK-local errors
src/core/contracts/            Backend parsers and sanitized fixtures
src/core/network/              HTTP/multipart boundary
src/features/session/          Session revisions and lifecycle
src/features/evidence/         Upload roles, reuse and recovery
src/presentation/native/       Planned React Native components
src/presentation/hosted/       Planned browser/app-return flow
src/platform/                  Device-adapter boundary
test/                          Node unit tests
example/                       Configuration smoke example (not an RN app)
docs/                          Architecture and roadmap
```

```sh
npm ci
npm run typecheck
npm test
npm run example
```

Only configuration/error types exist. There are no React/React Native imports,
native modules, UI screens, camera adapters or verified native builds yet. Add
framework peer dependencies and a real example host when implementation begins,
after choosing supported React Native/Expo/New Architecture versions. Do not
advertise a compatibility matrix based on TypeScript checks alone.

Use maintained platform libraries first. Add Codegen/TurboModules only if actual
provider integration requires Swift/Kotlin; do not start with legacy bridges.
Package publication is disabled. Names and distribution terms remain provisional.
See [architecture](docs/ARCHITECTURE.md) and [roadmap](docs/ROADMAP.md).
