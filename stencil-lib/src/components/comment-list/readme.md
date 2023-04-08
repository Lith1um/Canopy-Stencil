# cpy-comment-list



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type                                  | Default     |
| -------------- | ---------------- | ----------- | ------------------------------------- | ----------- |
| `comments`     | --               |             | `CommentItem[]`                       | `undefined` |
| `hideAvatar`   | `hide-avatar`    |             | `boolean`                             | `false`     |
| `maxLines`     | `max-lines`      |             | `number`                              | `null`      |
| `rightAligned` | `right-aligned`  |             | `boolean`                             | `false`     |
| `showLessText` | `show-less-text` |             | `string`                              | `undefined` |
| `showMoreText` | `show-more-text` |             | `string`                              | `undefined` |
| `size`         | `size`           |             | `"default" \| "large" \| "small"`     | `'default'` |
| `type`         | `type`           |             | `"basic" \| "primary" \| "secondary"` | `'primary'` |


## Dependencies

### Depends on

- [cpy-comment](../comment)

### Graph
```mermaid
graph TD;
  cpy-comment-list --> cpy-comment
  cpy-comment --> cpy-avatar
  cpy-comment --> cpy-show-more
  cpy-show-more --> cpy-link
  style cpy-comment-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
