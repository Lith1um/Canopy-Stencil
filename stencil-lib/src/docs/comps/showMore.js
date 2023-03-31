(function () {
  document.getElementById('show-more-html-example').code = `<cpy-show-more lines="3" text="Nunc sit amet porta augue..."></cpy-show-more>`;

  document.getElementById('show-more-props').tableData = [
    { name: 'lines', description: 'Number of lines to truncate to', type: "number", default: "3", required: false },
    { name: 'text', description: 'Text to display', type: "string", default: "", required: true },
    { name: 'showMoreText', description: 'Text to display in button when text is truncated', type: "string", default: "'show more'", required: false },
    { name: 'showLessText', description: 'Text to display in button when text is expanded', type: "string", default: "'show less'", required: false },
    { name: 'type', description: 'Color scheme of the show more button', type: "'primary' | 'secondary' | 'basic'", default: "'primary'", required: false },
  ];
})();