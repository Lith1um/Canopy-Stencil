# cpy-recursive-menu-item



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type              | Default     |
| -------- | --------- | ----------- | ----------------- | ----------- |
| `item`   | --        |             | `ContextMenuItem` | `undefined` |


## Methods

### `recalculatePosition() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [cpy-context-menu](..)

### Depends on

- [cpy-popup](../../popup)
- [cpy-icon](../../icon)
- [cpy-context-menu](..)

### Graph
```mermaid
graph TD;
  cpy-context-menu-item --> cpy-popup
  cpy-context-menu-item --> cpy-icon
  cpy-context-menu-item --> cpy-context-menu
  cpy-context-menu --> cpy-context-menu-item
  style cpy-context-menu-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
