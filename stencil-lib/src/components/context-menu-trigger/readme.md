# cpy-context-menu-trigger



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                | Default |
| -------- | --------- | ----------- | ------------------- | ------- |
| `items`  | --        |             | `ContextMenuItem[]` | `[]`    |


## Dependencies

### Depends on

- [cpy-context-menu](../context-menu)

### Graph
```mermaid
graph TD;
  cpy-context-menu-trigger --> cpy-context-menu
  cpy-context-menu --> cpy-context-menu-item
  cpy-context-menu-item --> cpy-popup
  cpy-context-menu-item --> cpy-icon
  cpy-context-menu-item --> cpy-context-menu
  style cpy-context-menu-trigger fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
