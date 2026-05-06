---
name: new-product-zero-to-one
description: Use when starting a new product, app, website, miniapp, major feature initiative, or 0-to-1 build where product, design, architecture, engineering, testing, release, and docs must not be skipped. Also use for Chinese requests like "从0到1", "新产品启动", "开始一个新项目", or "按完整流程推进".
---

# New Product Zero To One

## Overview

Use this as the operating system for starting a new product or substantial feature. It keeps the work gated: product clarity first, design system before UI churn, architecture before code, tests before implementation, and docs sync before handoff.

中文说明：当用户要从 0 到 1 开始一个新产品、新 App、新网站、小程序或大型功能时，使用这个 skill。它负责把产品、用户流、设计、架构、工程规范、实施计划、测试、验证和文档同步串成一个不能随意跳过的流程。

## Hard Gates

Do not implement code until the current gate has explicit outputs and user approval.

| Gate | Required output | Required skills |
|---|---|---|
| Product | `PRODUCT.md` or PRD, non-goals, success criteria | `brainstorming`, `prd-writer` |
| Flow | `docs/USER_FLOW.md`, roles, states, edge cases | `brainstorming` |
| Design | `DESIGN.md`, key screen direction, asset slots | `impeccable`, `ckm:design-system`, `imagegen` if raster assets are needed |
| Architecture | `docs/ARCHITECTURE.md`, domains, data flow, service boundaries | `writing-plans`, `karpathy-guidelines` |
| Engineering | `ENGINEERING.md`, test strategy, safety rules, release rules | `writing-plans`, `karpathy-guidelines` |
| Plan | Implementation plan with files, tests, commands | `writing-plans` |
| Build | Red-green implementation | `test-driven-development`; `systematic-debugging` for issues |
| Verify | Fresh test/build evidence | `verification-before-completion`, `requesting-code-review` |
| Sync | Docs and decisions reconciled | `neat-freak` |

## Workflow

1. **Orient:** inspect the repo if one exists. Read `README.md`, `PRODUCT.md`, `DESIGN.md`, docs, and recent commits when available.
2. **Initialize docs:** if the project lacks the core docs, run `scripts/init-product-docs.mjs <project-root>` or create equivalent files from `assets/product-starter/`.
3. **Product gate:** clarify users, problem, first version, non-goals, success criteria, and risks.
4. **Flow gate:** define user flows, roles, state machines, permissions, empty states, and failure paths.
5. **Design gate:** define the design system, key screens, component patterns, illustration slots, asset rules, and anti-patterns.
6. **Architecture gate:** translate the product and prototype into domains, pages, components, services, repositories/adapters, data models, and dependencies.
7. **Engineering gate:** define coding rules, testing strategy, environment rules, security rules, release commands, and AI collaboration rules.
8. **Plan gate:** use `writing-plans` to create a task-by-task implementation plan. No placeholders.
9. **Build gate:** implement with TDD. Pages should stay thin; services should own business behavior; adapters should isolate external SDKs.
10. **Verify gate:** run fresh verification. Do not claim completion without command output.
11. **Sync gate:** use `neat-freak` to update docs, ADRs, and handoff notes.

## Resources

Read these references only when needed:

- `references/zero-to-one-flow.md`: detailed phase flow.
- `references/stage-checklists.md`: gate-by-gate checklists.
- `references/document-map.md`: what belongs in each project document.
- `references/common-pitfalls.md`: common mistakes and prevention.

Use these assets for new projects:

- `assets/product-starter/`: starter documentation templates.

Use this script when initializing docs:

```bash
node /Users/bytedance/.agents/skills/new-product-zero-to-one/scripts/init-product-docs.mjs <project-root>
```

By default it skips existing files. Add `--force` only when the user explicitly wants to overwrite templates.

## Decision Rules

- If the user only has an idea, stay in Product and Flow gates.
- If the user has screens but no architecture, do Architecture gate before code.
- If the user wants UI work, load product/design context first and define slots/components before image or page generation.
- If the task spans multiple independent modules, create separate specs/plans or use `subagent-driven-development` after a plan exists.
- If a new decision will affect future work, write an ADR or sync it into the right doc before closing the stage.

## Completion Standard

A 0-to-1 stage is not complete until:

- required docs exist or are intentionally marked not needed,
- every gate has either passed or has a documented blocker,
- implementation has fresh verification evidence,
- important decisions are reflected in docs or ADRs,
- next steps are concrete and dated.
