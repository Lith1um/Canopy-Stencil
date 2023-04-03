(function () {
  const basicComment = {
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.'
  };

  const fullComment = {
    ...basicComment,
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z'
  };

  document.getElementById('overview-code').code = `<cpy-comment max-lines="2"></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.'
  };
</script>`;
  document.getElementById('overview-comment').comment = fullComment;

  document.getElementById('example-code').code = `<cpy-comment></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.'
  };
</script>`;
  document.getElementById('example-comment').comment = basicComment;

  document.getElementById('example-code-2').code = `<cpy-comment max-lines="2"></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.'
  };
</script>`;
  document.getElementById('example-comment-2').comment = basicComment;

  document.getElementById('example-code-3').code = `<cpy-comment></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.'
  };
</script>`;
  document.getElementById('example-comment-3').comment = fullComment;

  document.getElementById('example-code-4').code = `<cpy-comment size="small"></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.'
  };
</script>`;
  document.getElementById('example-comment-4').comment = fullComment;

  document.getElementById('example-code-5').code = `<cpy-comment size="large"></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.'
  };
</script>`;
  document.getElementById('example-comment-5').comment = fullComment;

  document.getElementById('example-code-6').code = `<cpy-comment right-aligned></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.'
  };
</script>`;
  document.getElementById('example-comment-6').comment = fullComment;

  document.getElementById('example-code-7').code = `<cpy-comment type="secondary"></cpy-comment>
<cpy-comment type="basic"></cpy-comment>

<script>
  document.querySelectorAll('cpy-comment').forEach((commentElem) => commentElem.comment = {
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.'
  });
</script>`;
  document.getElementById('example-comment-7').comment = fullComment;
  document.getElementById('example-comment-8').comment = fullComment;

  document.getElementById('example-code-8').code = `<cpy-comment
  style="--cpy-comment-color: #FFBA00;"
  max-lines="2"
  show-more-text="More"
  show-less-text="Less">
</cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: 'Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.'
  };
</script>`;
  document.getElementById('example-comment-9').comment = fullComment;
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-comment-color', description: 'Accent color for the comment', defaultValue: '--cpy-text-primary' },
  ];

  document.getElementById('comp-interfaces').code = `interface CommentItem {
  author?: string;
  date?: string;
  imageUrl: string;
  text: string;
}

type CommentSize = 'small' | 'default' | 'large';

type CommentType = 'primary' | 'secondary' | 'basic';`;

  document.getElementById('comp-props').tableData = [
    { name: 'comment', description: 'The comment data to display', type: "CommentItem", default: "", required: true },
    { name: 'right-aligned', description: 'Setting this will right align the comments', type: "boolean", default: "false", required: false },
    { name: 'max-lines', description: 'The max lines to truncate comment message to (not setting this will cause the comment not to truncate)', type: "number", default: "null", required: false },
    { name: 'size', description: 'Comment size', type: "CommentSize", default: "'default'", required: false },
    { name: 'type', description: 'Color scheme of the comment', type: "CommentType", default: "'primary'", required: false },
    { name: 'show-more-text', description: 'Text to display for the "show more" button if max lines is true', type: "string", default: "'show more'", required: false },
    { name: 'show-less-text', description: 'Text to display for the "show less" button if max lines is true', type: "string", default: "'show less'", required: false },
  ];
})();
