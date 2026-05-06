# Document Map

## Core Documents

| File | Purpose | Update when |
|---|---|---|
| `README.md` | Project intro, setup, commands, doc links | setup, scripts, project status, or entry points change |
| `PRODUCT.md` | Stable product identity and principles | target users, positioning, core value, tone, anti-goals change |
| `DESIGN.md` | Visual system and UI rules | colors, typography, components, layout, assets, or anti-patterns change |
| `ENGINEERING.md` | Development rules and quality gates | architecture rules, test policy, release policy, or AI workflow changes |

## Recommended Docs

| File | Purpose |
|---|---|
| `docs/PRD_<version-or-feature>.md` | Version or feature requirements |
| `docs/USER_FLOW.md` | User paths, role paths, state transitions |
| `docs/ARCHITECTURE.md` | System structure, domains, dependencies, data flow |
| `docs/DATA_MODEL.md` | Collections/tables, fields, indexes, permissions |
| `docs/API_CONTRACTS.md` | API/cloud function actions, request/response, errors |
| `docs/RUNBOOK.md` | Env vars, deploy, smoke tests, troubleshooting |
| `docs/RELEASE_CHECKLIST.md` | Pre-release checks and manual QA |
| `docs/ASSETS.md` | Illustrations, fonts, manifests, generation specs |
| `docs/ADR/NNNN-title.md` | Important decisions and consequences |

## What Goes Where

- Product scope goes in PRD, not ENGINEERING.
- Long-lived product identity goes in PRODUCT, not PRD.
- Visual rules go in DESIGN, not README.
- Code contribution rules go in ENGINEERING, not ARCHITECTURE.
- Module relationships go in ARCHITECTURE, not ENGINEERING.
- Operational commands go in RUNBOOK.
- "Why did we choose this?" goes in ADR.

## ADR Triggers

Write an ADR when a decision:
- changes backend provider,
- changes auth or permission model,
- creates beta vs production divergence,
- introduces a major dependency,
- changes data model materially,
- chooses static assets vs runtime generation,
- adds or removes a release blocker,
- would be costly to rediscover later.
