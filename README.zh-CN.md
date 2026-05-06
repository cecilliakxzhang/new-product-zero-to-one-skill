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
