# Common Pitfalls

## Product Pitfalls

- Starting implementation with only a vibe.
  - Prevention: require PRD, non-goals, success criteria, and user flow.
- Discovering roles and permissions during coding.
  - Prevention: require role/permission table before architecture.
- Treating beta, preview, and production as the same product state.
  - Prevention: require an environment matrix.

## UI Pitfalls

- Asking for "make it nicer" repeatedly.
  - Prevention: define `DESIGN.md`, anti-references, key screen samples, and component rules.
- Generating illustrations before knowing where they go.
  - Prevention: define asset slots, ratio, safe area, and display mode first.
- Letting every page invent its own spacing or cards.
  - Prevention: component specs and design tokens.

## Architecture Pitfalls

- Pages directly calling external SDKs.
  - Prevention: pages call services; services call repositories/adapters.
- Mock code becoming production behavior.
  - Prevention: explicit beta/prod guards and tests.
- One large file owning UI, data, auth, and side effects.
  - Prevention: domain and file responsibility map before implementation.

## Testing Pitfalls

- Writing tests only after code.
  - Prevention: TDD red-green-refactor for behavior changes.
- Testing implementation details instead of product behavior.
  - Prevention: name tests as business rules.
- Skipping failed or stale tests because the feature changed.
  - Prevention: update the test boundary deliberately, not silently.

## Security Pitfalls

- Putting API keys in frontend code.
  - Prevention: local scripts or server/cloud functions only.
- Hiding buttons and calling it permission.
  - Prevention: enforce permissions server-side.
- Logging secrets, tokens, or private content.
  - Prevention: redact logs and avoid full payload logging.

## Documentation Pitfalls

- Letting decisions live only in chat.
  - Prevention: ADR or docs sync at milestone end.
- README saying one backend while code uses another.
  - Prevention: neat-freak after architecture/backend changes.
- Duplicating facts in many docs and updating only one.
  - Prevention: use document map and keep one source of truth per fact type.
