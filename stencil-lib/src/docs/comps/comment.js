(function () {
  const defaultComment = {
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: `This is a comment.`
  };

  const longComment = {
    author: 'Gena',
    date: '1994-02-01T10:45:00.000Z',
    imageUrl: 'https://react.semantic-ui.com/images/avatar/large/molly.png',
    text: `Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra. Integer in rutrum odio. Maecenas ornare, ligula et consequat iaculis, lacus quam eleifend ante, non aliquam lectus diam nec diam. Aenean rhoncus sed nunc vitae lacinia. Aenean id risus sodales tortor sollicitudin dignissim sed a tellus. Vivamus suscipit tristique lacus vitae ultricies.`
  };

  document.getElementById('comment-comp-1').comment = defaultComment;
  document.getElementById('comment-comp-small').comment = defaultComment;
  document.getElementById('comment-comp-large').comment = defaultComment;
  document.getElementById('comment-comp-right').comment = defaultComment;
  document.getElementById('comment-comp-max').comment = longComment;
  document.getElementById('comment-comp-secondary').comment = defaultComment;
  document.getElementById('comment-comp-basic').comment = defaultComment;

  document.getElementById('comment-comp-2').comment = longComment;
  document.getElementById('comment-comp-3').comment = {
    author: 'Rhys',
    date: '1991-10-06T14:03:00.000Z',
    imageUrl: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
    text: `This is a comment.`
  };

  document.getElementById('comment-html-example').code = `<cpy-comment size="small" max-lines="2"></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'This is a comment.'
  };
</script>`;

  document.getElementById('comment-props').tableData = [
    { name: 'comment', description: 'The comment data to display', type: "CommentItem", default: "", required: true },
    { name: 'rightAligned', description: 'Setting this will right align the comments', type: "boolean", default: "false", required: false },
    { name: 'maxLines', description: 'The max lines to truncate comment message to (not setting this will cause the comment not to truncate)', type: "number", default: "null", required: false },
    { name: 'size', description: 'Comment size', type: "'small' | 'default' | 'large'", default: "'default'", required: false },
    { name: 'type', description: 'Colour scheme of the comment', type: "'primary' | 'secondary' | 'basic'", default: "'primary'", required: false },
    { name: 'showMoreText', description: 'Text to display for the "show more" button if max lines is true', type: "string", default: "'show more'", required: false },
    { name: 'showLessText', description: 'Text to display for the "show less" button if max lines is true', type: "string", default: "'show less'", required: false },
  ];

  document.getElementById('comment-interface').code = `interface CommentItem {
  author?: string;
  date?: string;
  imageUrl: string;
  text: string;
}`;
})();