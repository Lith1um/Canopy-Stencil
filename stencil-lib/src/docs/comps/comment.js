(function () {
  const basicComment = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor mi, dignissim eget tristique interdum, mattis ut dolor. Morbi lacinia quis dui a dapibus. Vestibulum efficitur ac dolor sed auctor. Donec lobortis egestas ultrices. Nam libero odio, consectetur in dui at, elementum auctor purus. Aenean in leo eu neque bibendum tempus iaculis condimentum augue. Integer orci lorem, sollicitudin in egestas ut, euismod vitae massa. Nam sit amet venenatis urna, nec fermentum turpis. Donec efficitur sollicitudin iaculis.'
  };

  const fullComment = {
    ...basicComment,
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    author: 'Alex Rayner',
    date: '1994-06-12T08:37:00.000Z'
  };

  const { imageUrl, ...commentWithoutImage } = fullComment;

  document.getElementById('overview-code').code = `<cpy-comment max-lines="2"></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex Rayner',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: '...'
  };
</script>`;
  document.getElementById('overview-comment').comment = fullComment;

  document.getElementById('example-code').code = `<cpy-comment></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    text: '...'
  };
</script>`;
  document.getElementById('example-comment').comment = basicComment;

  document.getElementById('example-code-2').code = `<cpy-comment max-lines="2"></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    text: '...'
  };
</script>`;
  document.getElementById('example-comment-2').comment = basicComment;

  document.getElementById('example-code-10').code = `<cpy-comment></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex Rayner',
    date: '1994-06-12T08:37:00.000Z',
    text: '...'
  };
</script>`;
  document.getElementById('example-comment-10').comment = commentWithoutImage;

  document.getElementById('example-code-11').code = `<cpy-comment hide-avatar></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex Rayner',
    date: '1994-06-12T08:37:00.000Z',
    text: '...'
  };
</script>`;
  document.getElementById('example-comment-11').comment = commentWithoutImage;

  document.getElementById('example-code-3').code = `<cpy-comment></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex Rayner',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: '...'
  };
</script>`;
  document.getElementById('example-comment-3').comment = fullComment;

  document.getElementById('example-code-4').code = `<cpy-comment size="small"></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex Rayner',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: '...'
  };
</script>`;
  document.getElementById('example-comment-4').comment = fullComment;

  document.getElementById('example-code-5').code = `<cpy-comment size="large"></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex Rayner',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: '...'
  };
</script>`;
  document.getElementById('example-comment-5').comment = fullComment;

  document.getElementById('example-code-6').code = `<cpy-comment right-aligned></cpy-comment>

<script>
  document.querySelector('cpy-comment').comment = {
    author: 'Alex Rayner',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: '...'
  };
</script>`;
  document.getElementById('example-comment-6').comment = fullComment;

  document.getElementById('example-code-7').code = `<cpy-comment type="secondary"></cpy-comment>
<cpy-comment type="basic"></cpy-comment>

<script>
  document.querySelectorAll('cpy-comment').forEach((commentElem) => commentElem.comment = {
    author: 'Alex Rayner',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: '...'
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
    author: 'Alex Rayner',
    date: '1994-06-12T08:37:00.000Z',
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    text: '...'
  };
</script>`;
  document.getElementById('example-comment-9').comment = fullComment;
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-comment-color', description: 'Accent color for the comment', defaultValue: '--cpy-text-primary' },
  ];

  document.getElementById('comp-interfaces').code = `interface CommentItem {
  author?: string;
  date?: string;
  imageUrl?: string;
  text: string;
};

type CommentSize = 'small' | 'default' | 'large';

type CommentType = 'primary' | 'secondary' | 'basic';`;

  document.getElementById('comp-props').tableData = [
    { name: 'comment', description: 'The comment data to display', type: "CommentItem", default: "", required: true },
    { name: 'right-aligned', description: 'Setting this will right align the comments', type: "boolean", default: "false", required: false },
    { name: 'max-lines', description: 'The max lines to truncate comment message to (not setting this will cause the comment not to truncate)', type: "number", default: "null", required: false },
    { name: 'hide-avatar', description: 'Hides the avatar', type: "boolean", default: "false", required: false },
    { name: 'size', description: 'Comment size', type: "CommentSize", default: "'default'", required: false },
    { name: 'type', description: 'Color scheme of the comment', type: "CommentType", default: "'primary'", required: false },
    { name: 'show-more-text', description: 'Text to display for the "show more" button if max lines is true', type: "string", default: "'show more'", required: false },
    { name: 'show-less-text', description: 'Text to display for the "show less" button if max lines is true', type: "string", default: "'show less'", required: false },
  ];
})();
