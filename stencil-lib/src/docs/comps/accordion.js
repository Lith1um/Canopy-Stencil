document.getElementById('accordion-default').addEventListener('accordionOpened', () => console.log('opened'));

document.getElementById('accordion-html-example').code = `<cpy-accordion size="large" header-title="I'm a large Accordion">
  <!-- slotted content for accordion -->
  I'm the content of an Accordion
</cpy-accordion>

<script>
  const accordionElem = document.querySelector('cpy-accordion');
  accordionElem.addEventListener('accordionOpened', () => console.log('opened'));
  accordionElem.toggle();
</script>`;

document.getElementById('accordion-props').tableData = [
  { name: 'opened', description: 'Whether the accordion is open or not', type: "boolean", default: "", required: false },
  { name: 'size', description: 'Accordion size', type: "'small' | 'default' | 'large'", default: "'default'", required: false },
  { name: 'header-title', description: 'Title to display on the accordion', type: "string", default: "", required: true }
];

document.getElementById('accordion-events').tableData = [
  { name: 'accordionOpened', description: 'Triggered when the accordion is opened', emitsType: "" },
];

document.getElementById('accordion-methods').tableData = [
  { name: 'open()', description: 'Opens the accordion', returnType: "" },
  { name: 'close()', description: 'Closes the accordion', returnType: "" },
  { name: 'toggle()', description: 'Toggles the accordion', returnType: "" }
];

document.getElementById('accordion-slots').tableData = [
  { slotName: "-- (default)", purpose: 'Contents of the accordion' }
];