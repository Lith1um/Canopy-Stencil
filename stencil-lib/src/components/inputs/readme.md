# cpy-input-text



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                              | Default     |
| ------------- | -------------- | ----------- | --------------------------------- | ----------- |
| `disabled`    | `disabled`     |             | `boolean`                         | `undefined` |
| `error`       | `error`        |             | `string`                          | `undefined` |
| `interacted`  | `interacted`   |             | `boolean`                         | `false`     |
| `label`       | `label`        |             | `string`                          | `undefined` |
| `noContainer` | `no-container` |             | `boolean`                         | `false`     |
| `popup`       | `popup`        |             | `boolean`                         | `false`     |
| `required`    | `required`     |             | `boolean`                         | `undefined` |
| `size`        | `size`         |             | `"default" \| "large" \| "small"` | `'default'` |


## Events

| Event          | Description | Type                |
| -------------- | ----------- | ------------------- |
| `labelClicked` |             | `CustomEvent<void>` |
| `popupClosed`  |             | `CustomEvent<void>` |


## Methods

### `closePopup() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [cpy-input](input)
 - [cpy-input-checkbox](input-checkbox)
 - [cpy-input-color](input-color)
 - [cpy-input-file](input-file)
 - [cpy-input-select](input-select)
 - [cpy-input-textarea](input-textarea)
 - [cpy-input-toggle](input-toggle)

### Depends on

- [cpy-popup](../popup)

### Graph
```mermaid
graph TD;
  cpy-input-base --> cpy-popup
  cpy-input --> cpy-input-base
  cpy-input-checkbox --> cpy-input-base
  cpy-input-color --> cpy-input-base
  cpy-input-file --> cpy-input-base
  cpy-input-select --> cpy-input-base
  cpy-input-textarea --> cpy-input-base
  cpy-input-toggle --> cpy-input-base
  style cpy-input-base fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
