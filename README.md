# New Product Zero To One Skill

[中文说明](./README.zh-CN.md)

`new-product-zero-to-one` is a Codex skill for starting new products, apps, websites, miniapps, and substantial feature initiatives with a repeatable, gated workflow.

It helps prevent the common 0-to-1 failure pattern: jumping from a rough idea or prototype straight into code, then discovering missing product details, unstable UI direction, unclear architecture, weak tests, or stale documentation later.

## What It Does

The skill acts as a workflow coordinator. It requires each stage to produce the right artifact before moving forward:

```text
Product definition
→ User flow and state model
→ Design system and asset planning
→ Architecture and development structure
→ Engineering rules
→ Implementation plan
→ TDD implementation
→ Verification and review
→ Documentation sync
```

## Included Resources

```text
skills/new-product-zero-to-one/
  SKILL.md
  agents/openai.yaml
  references/
    zero-to-one-flow.md
    stage-checklists.md
    document-map.md
    common-pitfalls.md
  assets/
    product-starter/
      README.md
      PRODUCT.md
      DESIGN.md
      ENGINEERING.md
      docs/
        USER_FLOW.md
        ARCHITECTURE.md
        DATA_MODEL.md
        API_CONTRACTS.md
        RUNBOOK.md
        RELEASE_CHECKLIST.md
        ASSETS.md
        ADR/0001-template.md
  scripts/
    init-product-docs.mjs
```

## When To Use

Use this skill when:

- starting a new product from an idea,
- creating a new app, miniapp, website, or internal tool,
- beginning a major feature initiative,
- turning a prototype into production code,
- setting up project docs and development gates,
- preventing product, design, architecture, testing, release, and documentation steps from being skipped.

Do not use it for tiny one-line fixes or narrow bug fixes. Those should use the normal TDD and debugging workflow directly.

## Installation

Copy the skill folder into your local Codex skills directory:

```bash
mkdir -p ~/.agents/skills
cp -R skills/new-product-zero-to-one ~/.agents/skills/new-product-zero-to-one
```

Some Codex installations use `~/.codex/skills` instead:

```bash
mkdir -p ~/.codex/skills
cp -R skills/new-product-zero-to-one ~/.codex/skills/new-product-zero-to-one
```

Restart Codex after installing so the skill list is refreshed.

## Usage

In a Codex session, ask:

```text
使用 new-product-zero-to-one 开始一个新产品
```

or:

```text
Use new-product-zero-to-one to initialize and guide this 0-to-1 product.
```

The skill will guide the project through the gates and call the appropriate supporting skills, such as `brainstorming`, `prd-writer`, `impeccable`, `writing-plans`, `test-driven-development`, `verification-before-completion`, and `neat-freak`.

## Initialize Project Docs

The skill includes a starter documentation pack. To copy missing docs into a project:

```bash
node ~/.agents/skills/new-product-zero-to-one/scripts/init-product-docs.mjs /path/to/project
```

By default, existing files are skipped. To intentionally overwrite template files:

```bash
node ~/.agents/skills/new-product-zero-to-one/scripts/init-product-docs.mjs /path/to/project --force
```

To preview what would be created:

```bash
node ~/.agents/skills/new-product-zero-to-one/scripts/init-product-docs.mjs /path/to/project --dry-run
```

## Core Documents

The starter pack creates:

- `README.md`: project entry, setup, commands, document links.
- `PRODUCT.md`: users, product purpose, scope, non-goals, success criteria.
- `DESIGN.md`: visual system, components, layout rules, asset rules.
- `ENGINEERING.md`: architecture rules, development workflow, tests, security, release rules.
- `docs/USER_FLOW.md`: page flows, roles, permissions, states, edge cases.
- `docs/ARCHITECTURE.md`: domains, layers, data flow, environment model.
- `docs/DATA_MODEL.md`: entities, schemas, relationships, permissions.
- `docs/API_CONTRACTS.md`: API/cloud function contracts and errors.
- `docs/RUNBOOK.md`: environment variables, deployment, smoke tests, troubleshooting.
- `docs/RELEASE_CHECKLIST.md`: pre-release, QA, release, and post-release checks.
- `docs/ASSETS.md`: illustrations, fonts, manifests, and generation prompts.
- `docs/ADR/0001-template.md`: decision record template.

## Recommended Team Workflow

1. Install the skill locally.
2. Start a new project by invoking `new-product-zero-to-one`.
3. Initialize docs from the starter pack.
4. Fill each gate with project-specific information.
5. Do not begin implementation until the Product, Flow, Design, Architecture, Engineering, and Plan gates are complete.
6. Use TDD for implementation.
7. Run verification before claiming completion.
8. Use docs sync at the end of each milestone.

## Notes

- The skill is intentionally gate-driven. It should slow down premature coding and speed up the whole project by reducing rework.
- Detailed checklists live in `references/stage-checklists.md`.
- Common failure patterns live in `references/common-pitfalls.md`.
- The starter templates are intentionally lightweight; fill them with project-specific decisions rather than leaving generic placeholders forever.
