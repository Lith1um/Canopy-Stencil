# cpy-drawer-container



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default |
| -------- | --------- | ----------- | --------- | ------- |
| `opened` | `opened`  |             | `boolean` | `false` |


## Events

| Event          | Description | Type                   |
| -------------- | ----------- | ---------------------- |
| `toggleDrawer` |             | `CustomEvent<boolean>` |


## Methods

### `toggle() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [cpy-drawer](drawer)
- [cpy-overlay](../overlay)

### Graph
```mermaid
graph TD;
  cpy-drawer-container --> cpy-drawer
  cpy-drawer-container --> cpy-overlay
  cpy-drawer --> cpy-button
  cpy-drawer --> cpy-icon
  cpy-button --> cpy-splash
  style cpy-drawer-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
