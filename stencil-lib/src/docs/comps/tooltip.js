(function () {
  document.getElementById('code-block-html-example').code = `<cpy-tooltip position="top" text="I'm a tooltip!">
  <!-- slotted content for tooltip to point at -->
  <cpy-icon>info</cpy-icon>
</cpy-tooltip>`;

  document.getElementById('code-block-html-example-two').code = `<!-- tooltip with customised content -->
<cpy-tooltip position="left">
  <!-- slotted content for tooltip to point at -->
  <cpy-icon>info</cpy-icon>
  <!-- slot for tooltip content to point at -->
  <div slot="content">
    <img src="logo.png" alt="Logo" width="60" style="margin: 0 auto; padding: 8px 0;">
    <div style="padding: 8px; background-color: var(--cpy-bg-primary); color: white; border-radius: 0 0 4px 4px;">
      This is a more customised tooltip
    </div>
  </div>
</cpy-tooltip>`;

  document.getElementById('tooltip-props').tableData = [
    { name: 'position', description: 'The tooltips position relative to the item it\'s wrapping', type: "'bottom' | 'left' | 'right' | 'top'", default: "'bottom'", required: false },
    { name: 'hideArrow', description: 'Whether to hide the arrow on the tooltip', type: "boolean", default: "false", required: false },
    { name: 'text', description: 'The text to display within the tooltip', type: 'string', default: "", required: false },
  ];

  document.getElementById('tooltip-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Content the tooltip attaches to' },
    { slotName: "'content'", purpose: 'Contents of the tooltip' },
  ];
})();