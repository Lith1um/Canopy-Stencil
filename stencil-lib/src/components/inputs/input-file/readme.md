# cpy-input-file



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                | Default            |
| ------------- | ------------- | ----------- | --------------------------------------------------- | ------------------ |
| `accept`      | `accept`      |             | `string`                                            | `undefined`        |
| `disabled`    | `disabled`    |             | `boolean`                                           | `undefined`        |
| `label`       | `label`       |             | `string`                                            | `undefined`        |
| `multiple`    | `multiple`    |             | `boolean`                                           | `false`            |
| `placeholder` | `placeholder` |             | `string`                                            | `'Choose file...'` |
| `required`    | `required`    |             | `boolean`                                           | `undefined`        |
| `size`        | `size`        |             | `"default" \| "large" \| "small"`                   | `'default'`        |
| `validators`  | --            |             | `(string \| ValidatorEntry \| Validator<File[]>)[]` | `undefined`        |
| `value`       | --            |             | `File[]`                                            | `undefined`        |


## Events

| Event         | Description | Type                  |
| ------------- | ----------- | --------------------- |
| `valueChange` |             | `CustomEvent<File[]>` |


## Methods

### `isValid() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `markAsTouched() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `markAsUntouched() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [cpy-input-base](..)
- [cpy-button](../../button)

### Graph
```mermaid
graph TD;
  cpy-input-file --> cpy-input-base
  cpy-input-file --> cpy-button
  cpy-input-base --> cpy-popup
  cpy-button --> cpy-splash
  style cpy-input-file fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
