# cpy-drawer



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default |
| -------- | --------- | ----------- | --------- | ------- |
| `opened` | `opened`  |             | `boolean` | `false` |


## Events

| Event          | Description | Type                |
| -------------- | ----------- | ------------------- |
| `toggleOpened` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [cpy-drawer-container](../drawer-container)

### Depends on

- [cpy-button](../button)
- [cpy-icon](../icon)

### Graph
```mermaid
graph TD;
  cpy-drawer --> cpy-button
  cpy-drawer --> cpy-icon
  cpy-drawer-container --> cpy-drawer
  style cpy-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
