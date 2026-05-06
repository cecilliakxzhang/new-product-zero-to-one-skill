# Assets

## Asset Principles

- Define the UI slot before generating images.
- Keep source image ratio aligned with display container.
- Use safe padding for subjects.
- Avoid generated text inside images.
- Version asset filenames.

## Illustration Slots

| Name | Usage | Source size | Display mode | Safe area |
|---|---|---|---|---|
|  |  |  |  |  |

## Manifest

Path:

```text
<asset manifest path>
```

Example:

```ts
export const illustrations = {
  example: {
    src: example,
    width: 1024,
    height: 768,
    mode: 'aspectFit'
  }
};
```

## Generation Prompts

### <asset-name>

```text
<prompt>
```
