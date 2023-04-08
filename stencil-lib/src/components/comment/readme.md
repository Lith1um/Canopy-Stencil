# cpy-comment



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type                                  | Default     |
| -------------- | ---------------- | ----------- | ------------------------------------- | ----------- |
| `comment`      | --               |             | `CommentItem`                         | `undefined` |
| `hideAvatar`   | `hide-avatar`    |             | `boolean`                             | `false`     |
| `maxLines`     | `max-lines`      |             | `number`                              | `null`      |
| `rightAligned` | `right-aligned`  |             | `boolean`                             | `false`     |
| `showLessText` | `show-less-text` |             | `string`                              | `undefined` |
| `showMoreText` | `show-more-text` |             | `string`                              | `undefined` |
| `size`         | `size`           |             | `"default" \| "large" \| "small"`     | `'default'` |
| `type`         | `type`           |             | `"basic" \| "primary" \| "secondary"` | `'primary'` |


## Dependencies

### Used by

 - [cpy-comment-list](../comment-list)

### Depends on

- [cpy-avatar](../avatar)
- [cpy-show-more](../show-more)

### Graph
```mermaid
graph TD;
  cpy-comment --> cpy-avatar
  cpy-comment --> cpy-show-more
  cpy-show-more --> cpy-link
  cpy-comment-list --> cpy-comment
  style cpy-comment fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
