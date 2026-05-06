# New Product Zero To One Skill

`new-product-zero-to-one` 是一个 Codex skill，用来把新产品、新 App、新网站、小程序或大型功能从 0 到 1 的过程固定下来。

`new-product-zero-to-one` is a Codex skill for turning a new product, app, website, miniapp, or major feature initiative into a repeatable 0-to-1 workflow.

它的核心目标是防止常见的 0 到 1 翻车路径：只有一个大概想法就开始写代码，开发中才发现产品细节没想清楚、UI 方向不稳定、架构边界模糊、测试薄弱、文档过期。

Its core purpose is to prevent the common 0-to-1 failure pattern: starting from a rough idea, then discovering during development that product details, UI direction, architecture, tests, or documentation were not clear enough.

## 它解决什么问题 / What It Does

这个 skill 会把新产品开发拆成一组必须通过的 gate。每个阶段都有明确产物，产物没有完成，就不进入下一阶段。

The skill breaks new product development into required gates. Each stage must produce the right artifact before the project moves forward.

整体流程如下：

The overall flow is:

1. 产品定义  
   Product definition
2. 用户流和状态模型  
   User flow and state model
3. 设计系统和资产规划  
   Design system and asset planning
4. 架构和开发结构设计  
   Architecture and development structure
5. 工程规范  
   Engineering rules
6. 实施计划  
   Implementation plan
7. TDD 开发  
   TDD implementation
8. 验证和 Review  
   Verification and review
9. 文档同步  
   Documentation sync

## 包含哪些内容 / Included Resources

这个仓库包含 skill 本体、触发元数据、阶段参考文档、项目文档模板，以及初始化项目文档的脚本。

This repository includes the skill itself, interface metadata, stage references, starter documentation templates, and a script for initializing project docs.

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

## 什么时候使用 / When To Use

适合在这些场景使用：

Use this skill when:

- 从一个想法开始做新产品。  
  Starting a new product from an idea.
- 创建新的 App、小程序、网站或内部工具。  
  Creating a new app, miniapp, website, or internal tool.
- 开始一个大型功能模块。  
  Beginning a major feature initiative.
- 把原型转成可长期维护的工程项目。  
  Turning a prototype into maintainable production code.
- 给项目建立产品、设计、架构、工程、测试、发布和文档规范。  
  Setting up product, design, architecture, engineering, testing, release, and documentation gates.
- 希望 Codex 不要跳过从 0 到 1 的关键流程。  
  Preventing Codex from skipping essential 0-to-1 product stages.

不适合用于很小的单行修改或窄范围 bugfix。那类任务直接用 TDD、debugging、verification 流程即可。

Do not use it for tiny one-line fixes or narrow bug fixes. Those should use the normal TDD, debugging, and verification workflow directly.

## 安装方式 / Installation

把 skill 文件夹复制到本地 Codex skills 目录：

Copy the skill folder into your local Codex skills directory:

```bash
mkdir -p ~/.agents/skills
cp -R skills/new-product-zero-to-one ~/.agents/skills/new-product-zero-to-one
```

有些 Codex 安装使用 `~/.codex/skills`：

Some Codex installations use `~/.codex/skills` instead:

```bash
mkdir -p ~/.codex/skills
cp -R skills/new-product-zero-to-one ~/.codex/skills/new-product-zero-to-one
```

安装后重启 Codex，让新的 skill 被重新发现。

Restart Codex after installing so the skill list is refreshed.

## 使用方式 / Usage

在 Codex 对话中可以直接说：

In a Codex session, ask:

```text
使用 new-product-zero-to-one 开始一个新产品
```

或者说：

Or ask:

```text
我要从 0 到 1 做一个新产品，请按 new-product-zero-to-one 流程推进。
```

也可以使用英文：

You can also use English:

```text
Use new-product-zero-to-one to initialize and guide this 0-to-1 product.
```

这个 skill 会引导项目依次通过各个 gate，并在合适阶段调用相关 skill。

The skill will guide the project through the gates and call the appropriate supporting skills.

常用配套 skill：

Common supporting skills:

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

## 初始化项目文档 / Initialize Project Docs

这个 skill 内置了一套项目文档模板。要把缺失的文档复制到某个项目中：

The skill includes a starter documentation pack. To copy missing docs into a project:

```bash
node ~/.agents/skills/new-product-zero-to-one/scripts/init-product-docs.mjs /path/to/project
```

默认不会覆盖已有文件。

By default, existing files are skipped.

若明确需要覆盖模板文件：

To intentionally overwrite template files:

```bash
node ~/.agents/skills/new-product-zero-to-one/scripts/init-product-docs.mjs /path/to/project --force
```

如果只是想预览会创建哪些文件：

To preview what would be created:

```bash
node ~/.agents/skills/new-product-zero-to-one/scripts/init-product-docs.mjs /path/to/project --dry-run
```

## 核心文档 / Core Documents

模板会创建这些核心文档：

The starter pack creates these core documents:

- `README.md`：项目入口、安装、运行命令、文档链接。  
  `README.md`: project entry, setup, commands, and document links.
- `PRODUCT.md`：用户、产品定位、范围、非目标、成功标准。  
  `PRODUCT.md`: users, product purpose, scope, non-goals, and success criteria.
- `DESIGN.md`：视觉系统、组件、布局、资产规则。  
  `DESIGN.md`: visual system, components, layout rules, and asset rules.
- `ENGINEERING.md`：架构规则、开发流程、测试、安全、发布规范。  
  `ENGINEERING.md`: architecture rules, development workflow, tests, security, and release rules.
- `docs/USER_FLOW.md`：页面流程、角色、权限、状态、边界情况。  
  `docs/USER_FLOW.md`: page flows, roles, permissions, states, and edge cases.
- `docs/ARCHITECTURE.md`：领域、分层、数据流、环境模型。  
  `docs/ARCHITECTURE.md`: domains, layers, data flow, and environment model.
- `docs/DATA_MODEL.md`：实体、字段、关系、权限。  
  `docs/DATA_MODEL.md`: entities, schemas, relationships, and permissions.
- `docs/API_CONTRACTS.md`：API 或云函数契约、错误码。  
  `docs/API_CONTRACTS.md`: API or cloud function contracts and errors.
- `docs/RUNBOOK.md`：环境变量、部署、冒烟测试、故障排查。  
  `docs/RUNBOOK.md`: environment variables, deployment, smoke tests, and troubleshooting.
- `docs/RELEASE_CHECKLIST.md`：发布前、QA、发布、发布后检查。  
  `docs/RELEASE_CHECKLIST.md`: pre-release, QA, release, and post-release checks.
- `docs/ASSETS.md`：插画、字体、manifest、生成提示词。  
  `docs/ASSETS.md`: illustrations, fonts, manifests, and generation prompts.
- `docs/ADR/0001-template.md`：重要决策记录模板。  
  `docs/ADR/0001-template.md`: decision record template.

## 推荐团队流程 / Recommended Team Workflow

1. 安装这个 skill。  
   Install the skill locally.
2. 新项目开始时调用 `new-product-zero-to-one`。  
   Start a new project by invoking `new-product-zero-to-one`.
3. 用内置模板初始化项目文档。  
   Initialize docs from the starter pack.
4. 逐个补齐 Product、Flow、Design、Architecture、Engineering、Plan gate。  
   Fill each Product, Flow, Design, Architecture, Engineering, and Plan gate with project-specific decisions.
5. gate 没完成前不进入正式实现。  
   Do not begin implementation until the required gates are complete.
6. 实现阶段使用 TDD。  
   Use TDD for implementation.
7. 完成前运行验证命令。  
   Run verification before claiming completion.
8. 每个阶段结束后同步文档。  
   Sync documentation at the end of each milestone.

## 注意事项 / Notes

- 这个 skill 是 gate-driven 的：它会刻意阻止过早写代码。  
  The skill is intentionally gate-driven: it slows down premature coding.
- 它的目标不是增加流程负担，而是减少后期返工。  
  Its goal is not to add process overhead, but to reduce late-stage rework.
- 详细 checklist 在 `references/stage-checklists.md`。  
  Detailed checklists live in `references/stage-checklists.md`.
- 常见坑位在 `references/common-pitfalls.md`。  
  Common failure patterns live in `references/common-pitfalls.md`.
- 文档模板是轻量起点，不应该长期保留泛泛占位内容。每个项目都需要填入真实决策。  
  The starter templates are intentionally lightweight. Fill them with project-specific decisions instead of leaving generic placeholders forever.
