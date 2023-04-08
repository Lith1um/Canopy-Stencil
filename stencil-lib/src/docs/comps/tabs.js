(function () {
  document.getElementById('overview-tabs').addEventListener('tabChanged', (e) => console.log('Tab changed, index is:', e.detail));

  document.getElementById('overview-code').code = `<cpy-tabs>
  <cpy-tab-header slot="header" tab-title="Tab 1"></cpy-tab-header>
  <cpy-tab-header slot="header" tab-title="Tab 2"></cpy-tab-header>
  <cpy-tab-header slot="header" tab-title="Tab 3"></cpy-tab-header>

  <cpy-tab-content slot="content">
    <p>...</p>
  </cpy-tab-content>
  <cpy-tab-content slot="content">
    <p>...</p>
    <p>...</p>
  </cpy-tab-content>
  <cpy-tab-content slot="content">
    <p>...</p>
  </cpy-tab-content>
</cpy-tabs>

<script>
  document.querySelector('cpy-tabs').addEventListener(
    'tabChanged',
    (e) => console.log('Tab changed, index is:', e.detail)
  );
</script>`;
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-tab-active-bg', description: 'Color to apply to active tab bar', defaultValue: '--cpy-bg-primary' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'active-index', description: 'Current active tab', type: "number", default: "0", required: false }
  ];
  document.getElementById('comp-props-header').tableData = [
    { name: 'tab-title', description: 'Tab title', type: "string", default: "", required: true }
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'tabChanged', description: 'Triggered when the active tab changes', emitsType: "number" }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "'header'", purpose: 'Tab headers' },
    { slotName: "'content'", purpose: 'Tab contents' },
  ];
  document.getElementById('comp-slots-content').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the tab' },
  ];
})();
