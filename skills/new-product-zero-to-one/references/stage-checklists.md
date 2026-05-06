# Stage Checklists

## Product Gate

- [ ] Target users are concrete.
- [ ] Main scenario is written as a real moment, not a category.
- [ ] Core value is one sentence.
- [ ] First version scope is explicit.
- [ ] Non-goals are explicit.
- [ ] Success criteria are observable.
- [ ] Risks and unknowns are listed.
- [ ] PRD or `PRODUCT.md` has been reviewed by the user.

## Flow Gate

- [ ] Primary user flow is complete from entry to finish.
- [ ] Roles are listed.
- [ ] Permissions are listed.
- [ ] State machine exists for core objects.
- [ ] Empty states are specified.
- [ ] Failure states are specified.
- [ ] Guest/anonymous/unauthorized behavior is specified when relevant.
- [ ] Beta vs production behavior is specified when relevant.

## Design Gate

- [ ] Product register is clear: brand or product.
- [ ] Visual strategy is explicit.
- [ ] Colors, typography, spacing, radius, elevation are defined.
- [ ] Anti-references are listed.
- [ ] Key screens have accepted structure.
- [ ] Component patterns are defined.
- [ ] Asset slots are defined with ratio, size, safe area, and fit mode.
- [ ] No open-ended "make it nicer" instruction remains.

## Architecture Gate

- [ ] Domains are named.
- [ ] Page responsibilities are clear.
- [ ] Shared vs page-private components are clear.
- [ ] Services expose the business API.
- [ ] Repositories/adapters isolate external systems.
- [ ] Data model is written.
- [ ] State flow is written.
- [ ] Error and permission boundaries are written.
- [ ] No page is planned to call external SDKs directly.

## Engineering Gate

- [ ] File placement rules exist.
- [ ] TDD expectations exist.
- [ ] Debugging process exists.
- [ ] Verification commands exist.
- [ ] Environment matrix exists.
- [ ] Security red lines exist.
- [ ] Release checklist exists.
- [ ] AI collaboration rules exist.

## Plan Gate

- [ ] Plan maps to approved PRD/design/architecture.
- [ ] Every task has exact files.
- [ ] Every behavior change has a failing test step.
- [ ] Every task has verification commands.
- [ ] No placeholders remain.
- [ ] Plan has been reviewed before implementation.

## Build Gate

- [ ] Failing test was observed first.
- [ ] Minimal implementation passed the test.
- [ ] Related tests pass.
- [ ] Typecheck/lint/build run as appropriate.
- [ ] No unrelated refactors were introduced.

## Verification Gate

- [ ] Full relevant test command was run fresh.
- [ ] Typecheck was run when TypeScript changed.
- [ ] Lint was run when code changed.
- [ ] Build was run when build/runtime config changed.
- [ ] Manual or browser verification was done for UI when needed.
- [ ] Failures are reported honestly, not hidden.

## Sync Gate

- [ ] README still matches setup.
- [ ] Product docs match current scope.
- [ ] Design docs match current UI rules.
- [ ] Engineering docs match current workflow.
- [ ] Architecture/API/data/runbook docs match code.
- [ ] ADR exists for important decisions.
- [ ] Release notes/checklist updated when relevant.
