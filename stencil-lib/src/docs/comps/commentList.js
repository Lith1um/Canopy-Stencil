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

  document.getElementById('overview-comment-list').comments = [
    fullCommentAlex,
    fullCommentTJ,
    fullCommentAlex2,
    fullCommentTJ2
  ];
  
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
    { name: 'max-lines', description: 'The max lines to truncate comment message to (not setting this will cause the comment not to truncate)', type: "number", default: "null", required: false },
    { name: 'hide-avatar', description: 'Hides the avatar', type: "boolean", default: "false", required: false },
    { name: 'size', description: 'Comment size', type: "CommentSize", default: "'default'", required: false },
    { name: 'type', description: 'Color scheme of the comment', type: "CommentType", default: "'primary'", required: false },
    { name: 'show-more-text', description: 'Text to display for the "show more" button if max lines is true', type: "string", default: "'show more'", required: false },
    { name: 'show-less-text', description: 'Text to display for the "show less" button if max lines is true', type: "string", default: "'show less'", required: false },
  ];
})();
