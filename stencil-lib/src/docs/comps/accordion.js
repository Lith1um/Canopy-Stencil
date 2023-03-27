(function () {
  document.getElementById('overview-code').code = `<cpy-accordion size="large" header-title="I'm a large Accordion">
  <!-- slotted content for accordion -->
  I'm the content of an Accordion
</cpy-accordion>

<script>
  const accordionElem = document.querySelector('cpy-accordion');
  accordionElem.addEventListener('accordionOpened', () => console.log('opened'));
  accordionElem.toggle();
</script>`;

  document.getElementById('example-code').code = `<cpy-accordion header-title="Accordion">
  I'm the contents of an Accordion!
</cpy-accordion>`;
  document.getElementById('example-code-small').code = `<cpy-accordion header-title="Small Accordion" size="small">
  I'm the contents of an Accordion!
</cpy-accordion>`;
  document.getElementById('example-code-large').code = `<cpy-accordion header-title="Large Accordion" size="large">
  I'm the contents of an Accordion!
</cpy-accordion>`;
  document.getElementById('example-code-custom').code = `<cpy-accordion
  header-title="Custom Accordion"
  style="
    --cpy-accordion-header-bg: var(--cpy-bg-error);
    --cpy-accordion-header-hover-bg: var(--cpy-bg-error-hover);
    --cpy-accordion-header-text-colour: white;
  ">
  I'm the contents of an Accordion!
</cpy-accordion>`;
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-accordion-header-bg', description: 'Background colour of header', defaultValue: 'transparent' },
    { cssVariable: '--cpy-accordion-header-hover-bg', description: 'Background colour of header when hovered', defaultValue: '--cpy-bg-hover' },
    { cssVariable: '--cpy-accordion-header-text-colour', description: 'Text colour in the header', defaultValue: 'inherit' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'opened', description: 'Whether the accordion is open or not', type: "boolean", default: "", required: false },
    { name: 'size', description: 'Accordion size', type: "'small' | 'default' | 'large'", default: "'default'", required: false },
    { name: 'header-title', description: 'Title to display on the accordion', type: "string", default: "", required: true }
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'accordionOpened', description: 'Triggered when the accordion is opened', emitsType: "" },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'open()', description: 'Opens the accordion', returnType: "" },
    { name: 'close()', description: 'Closes the accordion', returnType: "" },
    { name: 'toggle()', description: 'Toggles the accordion', returnType: "" }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the accordion' }
  ];
})();