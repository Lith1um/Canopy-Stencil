# cpy-recursive-menu-item



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                | Default     |
| -------- | --------- | ----------- | ------------------- | ----------- |
| `items`  | --        |             | `ContextMenuItem[]` | `undefined` |


## Methods

### `recalculatePosition() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [cpy-context-menu-item](context-menu-item)
 - [cpy-context-menu-trigger](../context-menu-trigger)

### Depends on

- [cpy-context-menu-item](context-menu-item)

### Graph
```mermaid
graph TD;
  cpy-context-menu --> cpy-context-menu-item
  cpy-context-menu-item --> cpy-context-menu
  cpy-context-menu-trigger --> cpy-context-menu
  style cpy-context-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
