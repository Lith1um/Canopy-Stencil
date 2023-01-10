# cpy-alert



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                    | Default     |
| ------------- | ------------- | ----------- | ----------------------------------------------------------------------- | ----------- |
| `appearance`  | `appearance`  |             | `"border" \| "soft"`                                                    | `'soft'`    |
| `container`   | `container`   |             | `boolean`                                                               | `true`      |
| `dismissible` | `dismissible` |             | `boolean`                                                               | `undefined` |
| `icon`        | `icon`        |             | `string`                                                                | `undefined` |
| `type`        | `type`        |             | `"basic" \| "error" \| "primary" \| "secondary" \| "success" \| "warn"` | `'error'`   |


## Events

| Event    | Description | Type                |
| -------- | ----------- | ------------------- |
| `closed` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [cpy-toast](../toast)

### Depends on

- [cpy-icon](../icon)
- [cpy-button](../button)

### Graph
```mermaid
graph TD;
  cpy-alert --> cpy-icon
  cpy-alert --> cpy-button
  cpy-toast --> cpy-alert
  style cpy-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
