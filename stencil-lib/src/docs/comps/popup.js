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
    { name: 'stretch', description: 'Whether the popup stretches to the bounds of the attached node', type: "boolean", default: "false", required: false },
    { name: 'disabled', description: 'Whether the popup is disabled', type: "boolean", default: "false", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'opened', description: 'Triggers when the popup is closed', emitsType: '' },
    { name: 'closed', description: 'Triggers when the popup is opened', emitsType: '' },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'show()', description: 'Shows the popup', returnType: '' },
    { name: 'hide()', description: 'Hides the popup', returnType: '' },
    { name: 'recalculatePosition()', description: 'Recalculates the position of the popup to ensure it is visible on the page if the parent moves (used internally)', returnType: '' },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Content the popup attaches to' },
    { slotName: "'content'", purpose: 'Contents of the popup' },
  ];
})();
