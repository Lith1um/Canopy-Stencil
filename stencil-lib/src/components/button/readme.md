# cpy-button



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type                                                                    | Default     |
| ------------ | ------------ | ----------- | ----------------------------------------------------------------------- | ----------- |
| `appearance` | `appearance` |             | `"borderless" \| "fill" \| "outline"`                                   | `'fill'`    |
| `disabled`   | `disabled`   |             | `boolean`                                                               | `false`     |
| `icon`       | `icon`       |             | `boolean`                                                               | `false`     |
| `size`       | `size`       |             | `"default" \| "large" \| "small"`                                       | `'default'` |
| `type`       | `type`       |             | `"basic" \| "error" \| "primary" \| "secondary" \| "success" \| "warn"` | `'primary'` |


## Events

| Event           | Description | Type                |
| --------------- | ----------- | ------------------- |
| `buttonClicked` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [cpy-alert](../alert)
 - [cpy-carousel](../carousel)
 - [cpy-code-example](../code-example)
 - [cpy-dialog](../dialog)
 - [cpy-input-file](../inputs/input-file)
 - [cpy-tabs](../tabs)

### Depends on

- [cpy-splash](../splash)

### Graph
```mermaid
graph TD;
  cpy-button --> cpy-splash
  cpy-alert --> cpy-button
  cpy-carousel --> cpy-button
  cpy-code-example --> cpy-button
  cpy-dialog --> cpy-button
  cpy-input-file --> cpy-button
  cpy-tabs --> cpy-button
  style cpy-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
