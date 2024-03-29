# cpy-input-checkbox



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute  | Description | Type                                                 | Default     |
| ------------ | ---------- | ----------- | ---------------------------------------------------- | ----------- |
| `disabled`   | `disabled` |             | `boolean`                                            | `false`     |
| `label`      | `label`    |             | `string`                                             | `undefined` |
| `required`   | `required` |             | `boolean`                                            | `false`     |
| `size`       | `size`     |             | `"default" \| "large" \| "small"`                    | `'default'` |
| `validators` | --         |             | `(string \| ValidatorEntry \| Validator<boolean>)[]` | `undefined` |
| `value`      | `value`    |             | `boolean`                                            | `false`     |


## Events

| Event         | Description | Type                   |
| ------------- | ----------- | ---------------------- |
| `valueChange` |             | `CustomEvent<boolean>` |


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
- [cpy-splash](../../splash)

### Graph
```mermaid
graph TD;
  cpy-input-checkbox --> cpy-input-base
  cpy-input-checkbox --> cpy-splash
  cpy-input-base --> cpy-popup
  style cpy-input-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
