(function () {
  document.getElementById('overview-code').code = `<cpy-popup active-on="hover">
  <cpy-button>
    Hover me!<cpy-icon>expand_more</cpy-icon>
  </cpy-button>

  <cpy-context-menu slot="content" id="overview-popup-menu"></cpy-context-menu>
</cpy-popup>

<script>
  document.querySelector('cpy-context-menu').items = [
    { title: 'Option 1', icon: 'chat_bubble' },
    { title: 'Option 2', icon: 'menu' },
    { title: 'Option 3', icon: 'refresh' }
  ];
</script>`;

  document.getElementById('overview-popup-menu').items = [
    { title: 'Option 1', icon: 'chat_bubble' },
    { title: 'Option 2', icon: 'menu' },
    { title: 'Option 3', icon: 'refresh' }
  ];

  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-bg-white', description: 'Background color of the popup', defaultValue: '--cpy-bg-white' },
  ];

  document.getElementById('comp-interfaces').code = `type PopupPosition = 'bottom-start' | 'top-start' | 'left-start' | 'right-start';

type PopupActiveOn = 'hover' | 'click';`;

  document.getElementById('comp-props').tableData = [
    { name: 'active-on', description: 'What triggers the popup to show', type: "PopupActiveOn", default: "'click'", required: false },
    { name: 'position', description: 'The position of the popup relative to the element it is linked with', type: "PopupPosition", default: "'bottom-start'", required: false },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Content the popup attaches to' },
    { slotName: "'content'", purpose: 'Contents of the popup' },
  ];
})();

(function () {
  document.getElementById('popup-test').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        { title: 'Option 2', icon: 'menu' },
        { title: 'Option 3', icon: 'refresh' },
        { title: 'Option 4', icon: 'smart_button' },
        { title: 'Option 5', icon: 'warning' },
      ]
    }
  ];

  document.getElementById('popup-html-example').code = `<cpy-popup>
  <!-- slotted content for popup to attach to -->
  <cpy-button icon>
    <cpy-icon>info</cpy-icon>
  </cpy-button>
  <!-- slot for popup content to point at -->
  <div slot="content">
    <img src="logo.png" alt="Logo" width="60" style="margin: 0 auto; padding: 8px 0;">
    <div style="padding: 8px; background-color: var(--cpy-bg-primary); color: white; border-radius: 0 0 4px 4px;">
      This is a customised popup
    </div>
  </div>
</cpy-popup>`;

  document.getElementById('popup-props').tableData = [
    { name: 'active-on', description: 'What triggers the popup to show', type: "'click' | 'hover'", default: "'click'", required: false },
    { name: 'position', description: 'The position of the popup relative to the element it is linked with', type: "'bottom-start' | 'left-start' | 'right-start' | 'top-start'", default: "'bottom-start'", required: false },
  ];

  document.getElementById('popup-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Content the popup attaches to' },
    { slotName: "'content'", purpose: 'Contents of the popup' },
  ];
})();