# cpy-tabs



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                           | Default   |
| ------------- | -------------- | ----------- | ------------------------------ | --------- |
| `activeIndex` | `active-index` |             | `number`                       | `0`       |
| `position`    | `position`     |             | `"center" \| "end" \| "start"` | `'start'` |


## Events

| Event        | Description | Type                  |
| ------------ | ----------- | --------------------- |
| `tabChanged` |             | `CustomEvent<number>` |


## Dependencies

### Depends on

- [cpy-button](../button)
- [cpy-icon](../icon)

### Graph
```mermaid
graph TD;
  cpy-tabs --> cpy-button
  cpy-tabs --> cpy-icon
  cpy-button --> cpy-splash
  style cpy-tabs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
