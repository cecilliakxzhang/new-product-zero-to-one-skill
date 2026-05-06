# Zero To One Flow

Use this flow for new products, apps, miniapps, websites, and substantial feature initiatives.

## 1. Product Definition

Goal: turn a vague idea into a bounded product direction.

Outputs:
- `PRODUCT.md` for stable product identity.
- PRD in `docs/` for version or feature requirements.
- Non-goals and success criteria.

Key questions:
- Who is this for?
- What problem appears in real life?
- What is the first version, and what is explicitly later?
- What would make the first version successful?
- What would make the product feel wrong?

## 2. User Flow And State

Goal: find product detail before code finds it painfully.

Outputs:
- `docs/USER_FLOW.md`.
- Role and permission table.
- State machine.
- Failure and empty states.

Required coverage:
- happy path,
- first-time path,
- returning path,
- unauthorized path,
- empty path,
- network/error path,
- beta/production path when relevant.

## 3. Design System And Prototype

Goal: avoid UI iteration by guesswork.

Outputs:
- `DESIGN.md`.
- Key screen structure.
- Component patterns.
- Asset slots and illustration specs.

Rules:
- Define layout before generating images.
- Define asset slot, ratio, safe area, background, and display mode before image generation.
- Freeze a small set of key screens before applying the style everywhere.

## 4. Development Structure Design

Goal: translate prototype into code boundaries.

Outputs:
- `docs/ARCHITECTURE.md` or a feature technical design.
- Domain list.
- Page/component/service/repository map.
- Data model and state flow.
- Test strategy.

Architecture pattern:

```text
pages
→ components
→ services
→ repositories/adapters
→ external SDKs / storage / backend
```

Pages should orchestrate UI. Services should own business behavior. Adapters should isolate external systems.

## 5. Engineering Rules

Goal: make development repeatable.

Outputs:
- `ENGINEERING.md`.
- Test strategy.
- Security red lines.
- Environment matrix.
- Release checks.

Include:
- how to add a page,
- how to add a service,
- where domain types live,
- when TDD is mandatory,
- what commands prove completion,
- how beta/prod differ,
- what secrets must never enter frontend code.

## 6. Implementation Plan

Goal: convert structure into executable tasks.

Outputs:
- `docs/superpowers/plans/YYYY-MM-DD-<topic>.md`.

Each task must include:
- exact files,
- test first,
- expected failing output,
- implementation details,
- verification command,
- commit scope when applicable.

## 7. Build, Verify, Review

Goal: make correctness evidence-based.

Use:
- `test-driven-development` for behavior changes,
- `systematic-debugging` for bugs,
- `verification-before-completion` before claiming done,
- `requesting-code-review` for major work.

## 8. Sync And Handoff

Goal: prevent stale context.

Use `neat-freak` after milestones. Update:
- README if run/setup changed,
- PRODUCT/PRD if scope changed,
- DESIGN if UI rules changed,
- ENGINEERING if workflow changed,
- ARCHITECTURE/DATA/API/RUNBOOK if systems changed,
- ADR for important decisions.
