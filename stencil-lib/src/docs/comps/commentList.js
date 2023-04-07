(function () {
  const basicComment = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor mi, dignissim eget tristique interdum, mattis ut dolor. Morbi lacinia quis dui a dapibus. Vestibulum efficitur ac dolor sed auctor. Donec lobortis egestas ultrices. Nam libero odio, consectetur in dui at, elementum auctor purus. Aenean in leo eu neque bibendum tempus iaculis condimentum augue. Integer orci lorem, sollicitudin in egestas ut, euismod vitae massa. Nam sit amet venenatis urna, nec fermentum turpis. Donec efficitur sollicitudin iaculis.'
  };

  const fullCommentAlex = {
    ...basicComment,
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    author: 'Alex Rayner',
    date: '2023-04-01T08:25:00.000Z'
  };

  const fullCommentTJ = {
    ...basicComment,
    imageUrl: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
    author: 'Tejas Patel',
    date: '2023-04-01T08:37:00.000Z'
  };

  const fullCommentAlex2 = {
    ...basicComment,
    imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
    author: 'Alex Rayner',
    date: '2023-04-01T09:42:00.000Z'
  };

  const fullCommentTJ2 = {
    ...basicComment,
    imageUrl: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
    author: 'Tejas Patel',
    date: '2023-04-01T10:07:00.000Z'
  };

  const commentList = [
    fullCommentAlex,
    fullCommentTJ,
    fullCommentAlex2,
    fullCommentTJ2
  ];

  const commentListNoImage = commentList.map(({ author, text, imageUrl, date }) => ({ author, text, date }));

  document.getElementById('overview-code').code = `<cpy-comment-list></cpy-comment-list>

<script>
  document.querySelector('cpy-comment-list').comments = [
    {
      author: 'Alex Rayner',
      date: '2023-04-01T08:25:00.000Z'
      imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
      text: '...'
    },
    {
      author: 'Tejas Patel',
      date: '2023-04-01T08:37:00.000Z'
      imageUrl: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      text: '...'
    },
    {
      author: 'Alex Rayner',
      date: '2023-04-01T09:42:00.000Z'
      imageUrl: 'https://react.semantic-Ui.com/images/avatar/large/matthew.png',
      text: '...'
    },
    {
      author: 'Tejas Patel',
      date: '2023-04-01T10:07:00.000Z'
      imageUrl: 'https://react.semantic-ui.com/images/avatar/large/patrick.png',
      text: '...'
    },
  ];
</script>`;
  document.getElementById('overview-comment-list').comments = commentList;
  
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
    { name: 'comments', description: 'The list of comments to show', type: "CommentItem[]", default: "", required: true },
    { name: 'right-aligned', description: 'Setting this will right align the comments', type: "boolean", default: "false", required: false },
    { name: 'max-lines', description: 'The max lines to truncate comment messages to (not setting this will cause the comment not to truncate)', type: "number", default: "null", required: false },
    { name: 'hide-avatar', description: 'Hides the avatars', type: "boolean", default: "false", required: false },
    { name: 'size', description: 'Comment size', type: "CommentSize", default: "'default'", required: false },
    { name: 'type', description: 'Color scheme of the comment list', type: "CommentType", default: "'primary'", required: false },
    { name: 'show-more-text', description: 'Text to display for the "show more" button if max lines is true', type: "string", default: "'show more'", required: false },
    { name: 'show-less-text', description: 'Text to display for the "show less" button if max lines is true', type: "string", default: "'show less'", required: false },
  ];

  document.getElementById('example-code').code = `<cpy-comment-list></cpy-comment-list>

<script>
  document.querySelector('cpy-comment-list').comments = [
    ...
  ];
</script>`;
  document.getElementById('example-list').comments = commentList;

  document.getElementById('example-code-2').code = `<cpy-comment-list max-lines="2"></cpy-comment-list>

<script>
  document.querySelector('cpy-comment-list').comments = [
    ...
  ];
</script>`;
  document.getElementById('example-list-2').comments = commentList;
  
  document.getElementById('example-code-3').code = `<cpy-comment-list></cpy-comment-list>
  
<script>
  document.querySelector('cpy-comment-list').comments = [
    ...
  ];
</script>`;
  document.getElementById('example-list-3').comments = commentListNoImage;
  
  document.getElementById('example-code-4').code = `<cpy-comment-list hide-avatar></cpy-comment-list>
  
<script>
  document.querySelector('cpy-comment-list').comments = [
    ...
  ];
</script>`;
  document.getElementById('example-list-4').comments = commentListNoImage;

  document.getElementById('example-code-5').code = `<cpy-comment-list size="small"></cpy-comment-list>

<script>
  document.querySelector('cpy-comment-list').comments = [
    ...
  ];
</script>`;
  document.getElementById('example-list-5').comments = commentList;

  document.getElementById('example-code-6').code = `<cpy-comment-list size="large"></cpy-comment-list>

<script>
  document.querySelector('cpy-comment-list').comments = [
    ...
  ];
</script>`;
  document.getElementById('example-list-6').comments = commentList;

  document.getElementById('example-code-7').code = `<cpy-comment-list right-aligned></cpy-comment-list>

<script>
  document.querySelector('cpy-comment-list').comments = [
    ...
  ];
</script>`;
  document.getElementById('example-list-7').comments = commentList;

  document.getElementById('example-code-8').code = `<cpy-comment-list style="--cpy-comment-color: var(--cpy-text-warn);" max-lines="2" show-more-text="More" show-less-text="Less"></cpy-comment-list>

<script>
  document.querySelector('cpy-comment-list').comments = [
    ...
  ];
</script>`;
  document.getElementById('example-list-8').comments = commentList;
})();
