# Mobile Architecture

Public API -> session orchestration -> backend transport/contracts. Native and
hosted presenters share sessions. Device adapters own capture, file pickers,
permissions and app lifecycle. No global mutable active-session singleton.

Backend field/options, evidence roles and action flags drive the UI. Do not
duplicate pricing, validation, liveness prerequisites or outcome decisions.

The existing browser launch/token contract is origin-bound. Native mobile
authentication must be explicitly designed; do not spoof Origin, weaken browser
guards or embed merchant secrets. No HTTP integration is implemented yet.

Use memory-only credentials by default. Isolate temporary evidence and clean it
up. Serialize revision-aware mutations, distinguish expiry/cancellation/errors,
and do not blindly retry a consumed ticket. App-return links need registration,
validation and session correlation. SDK callbacks are not proof of final approval.

Provider-supported native liveness must be validated before selecting capture
libraries. Prefer maintained New Architecture-compatible modules. No silent
fallback from liveness to a still photo or native UI to hosted web.

Only the configuration/error foundation exists. Real React Native host apps,
device builds, capture and backend integration remain future work.
