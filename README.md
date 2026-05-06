# New Product Zero To One Skill

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

---

# New Product Zero To One Skill 中文说明

`new-product-zero-to-one` 是一个 Codex skill，用来把新产品、新 App、新网站、小程序或大型功能从 0 到 1 的过程固定下来。

它的核心目标是防止常见的 0 到 1 翻车路径：只有一个大概想法就开始写代码，开发中才发现产品细节没想清楚、UI 方向不稳定、架构边界模糊、测试薄弱、文档过期。

## 它解决什么问题

这个 skill 会把新产品开发拆成一组必须通过的 gate。每个阶段都有明确产物，产物没有完成，就不进入下一阶段。

```text
产品定义
→ 用户流和状态模型
→ 设计系统和资产规划
→ 架构和开发结构设计
→ 工程规范
→ 实施计划
→ TDD 开发
→ 验证和 Review
→ 文档同步
```

## 包含哪些内容

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

## 什么时候使用

适合在这些场景使用：

- 从一个想法开始做新产品；
- 创建新的 App、小程序、网站或内部工具；
- 开始一个大型功能模块；
- 把原型转成可长期维护的工程项目；
- 给项目建立产品、设计、架构、工程、测试、发布和文档规范；
- 希望 Codex 不要跳过从 0 到 1 的关键流程。

不适合用于很小的单行修改或窄范围 bugfix。那类任务直接用 TDD、debugging、verification 流程即可。

## 安装方式

把 skill 文件夹复制到本地 Codex skills 目录：

```bash
mkdir -p ~/.agents/skills
cp -R skills/new-product-zero-to-one ~/.agents/skills/new-product-zero-to-one
```

有些 Codex 安装使用 `~/.codex/skills`：

```bash
mkdir -p ~/.codex/skills
cp -R skills/new-product-zero-to-one ~/.codex/skills/new-product-zero-to-one
```

安装后重启 Codex，让新的 skill 被重新发现。

## 使用方式

在 Codex 对话中可以直接说：

```text
使用 new-product-zero-to-one 开始一个新产品
```

或者：

```text
我要从 0 到 1 做一个新产品，请按 new-product-zero-to-one 流程推进。
```

这个 skill 会引导项目依次通过各个 gate，并在合适阶段调用相关 skill，例如：

- `brainstorming`
- `prd-writer`
- `impeccable`
- `ckm:design-system`
- `writing-plans`
- `test-driven-development`
- `systematic-debugging`
- `verification-before-completion`
- `requesting-code-review`
- `neat-freak`

## 初始化项目文档

这个 skill 内置了一套项目文档模板。要把缺失的文档复制到某个项目中：

```bash
node ~/.agents/skills/new-product-zero-to-one/scripts/init-product-docs.mjs /path/to/project
```

默认不会覆盖已有文件。若明确需要覆盖模板文件：

```bash
node ~/.agents/skills/new-product-zero-to-one/scripts/init-product-docs.mjs /path/to/project --force
```

如果只是想预览会创建哪些文件：

```bash
node ~/.agents/skills/new-product-zero-to-one/scripts/init-product-docs.mjs /path/to/project --dry-run
```

## 核心文档

模板会创建：

- `README.md`：项目入口、安装、运行命令、文档链接。
- `PRODUCT.md`：用户、产品定位、范围、非目标、成功标准。
- `DESIGN.md`：视觉系统、组件、布局、资产规则。
- `ENGINEERING.md`：架构规则、开发流程、测试、安全、发布规范。
- `docs/USER_FLOW.md`：页面流程、角色、权限、状态、边界情况。
- `docs/ARCHITECTURE.md`：领域、分层、数据流、环境模型。
- `docs/DATA_MODEL.md`：实体、字段、关系、权限。
- `docs/API_CONTRACTS.md`：API 或云函数契约、错误码。
- `docs/RUNBOOK.md`：环境变量、部署、冒烟测试、故障排查。
- `docs/RELEASE_CHECKLIST.md`：发布前、QA、发布、发布后检查。
- `docs/ASSETS.md`：插画、字体、manifest、生成提示词。
- `docs/ADR/0001-template.md`：重要决策记录模板。

## 推荐团队流程

1. 安装这个 skill。
2. 新项目开始时调用 `new-product-zero-to-one`。
3. 用内置模板初始化项目文档。
4. 逐个补齐 Product、Flow、Design、Architecture、Engineering、Plan gate。
5. gate 没完成前不进入正式实现。
6. 实现阶段使用 TDD。
7. 完成前运行验证命令。
8. 每个阶段结束后同步文档。

## 注意事项

- 这个 skill 是 gate-driven 的：它会刻意阻止过早写代码。
- 详细 checklist 在 `references/stage-checklists.md`。
- 常见坑位在 `references/common-pitfalls.md`。
- 文档模板是轻量起点，不应该长期保留泛泛占位内容。每个项目都需要填入真实决策。
