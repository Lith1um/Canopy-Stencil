document.getElementById('tabs-example').addEventListener('tabChanged', (e) => console.log('Tab changed, index is:', e.detail));

document.getElementById('tabs-html-example').code = `<cpy-tabs id="tabs-example" style="width: 100%; margin-top: 1rem; margin-bottom: 2rem;">
  <cpy-tab-header slot="header" tab-title="Tab 1"></cpy-tab-header>
  <cpy-tab-header slot="header" tab-title="Tab 2"></cpy-tab-header>
  <cpy-tab-header slot="header" tab-title="Tab 3"></cpy-tab-header>

  <cpy-tab-content slot="content">
    Content 1
  </cpy-tab-content>
  <cpy-tab-content slot="content">
    Content 2
  </cpy-tab-content>
  <cpy-tab-content slot="content">
    Content 3
  </cpy-tab-content>
</cpy-tabs>`;

document.getElementById('tabs-props').tableData = [
  { name: 'active-index', description: 'Current active tab', type: "number", default: "0", required: false }
];

document.getElementById('tab-header-props').tableData = [
  { name: 'tab-title', description: 'Tab title', type: "string", default: "", required: true }
];

document.getElementById('tabs-events').tableData = [
  { name: 'tabChanged', description: 'Triggered when the active tab changes', emitsType: "number" }
];

document.getElementById('tabs-slots').tableData = [
  { slotName: "'header'", purpose: 'Tab headers' },
  { slotName: "'content'", purpose: 'Tab contents' },
];
document.getElementById('tab-content-slots').tableData = [
  { slotName: "-- (default)", purpose: 'Contents of the tab' },
];