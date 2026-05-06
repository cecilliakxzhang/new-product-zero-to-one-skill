# Engineering Guide

## Architecture Rule

```text
pages
→ components
→ services
→ repositories/adapters
→ external systems
```

Pages should not directly call external SDKs, storage APIs, or backend clients.

## File Placement

| Area | Responsibility |
|---|---|
| `pages/` | UI orchestration, route-level state, navigation |
| `components/` | Reusable UI and local interaction |
| `services/` | Business use cases and domain behavior |
| `repositories/` or adapters | External systems, backend, storage, SDKs |
| `types/` | Shared domain types |
| `utils/` | Pure helpers |
| `tests/` | Behavior, wiring, guards, regressions |

## Development Workflow

1. Confirm product/design/architecture gate.
2. Write or update implementation plan.
3. Write failing test first for behavior changes.
4. Implement minimal code.
5. Run targeted verification.
6. Run broader verification before completion.
7. Request review for major work.
8. Sync docs at milestone end.

## Testing Strategy

- Pure functions:
- Services:
- Permissions:
- Environment guards:
- UI wiring:
- Manual/browser checks:

## Security Rules

- Secrets must not enter frontend bundles.
- Permissions must be enforced server-side when data is protected.
- Beta fallback must not be active in production.
- Logs must not expose tokens, secrets, or private content.

## Verification Commands

```bash
<test command>
<typecheck command>
<lint command>
<build command>
```

## Release Rules

- 

## AI Collaboration Rules

- Use `brainstorming` before creative or product changes.
- Use `writing-plans` before multi-step implementation.
- Use `test-driven-development` for behavior changes.
- Use `systematic-debugging` for bugs.
- Use `verification-before-completion` before claiming done.
- Use `neat-freak` after milestones.
