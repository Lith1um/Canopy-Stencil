const expandElem = document.getElementById('expand-collapse');
const expandButton = document.getElementById('expand-button');
expandButton.innerHTML = expandElem.expanded
  ? 'Collapse'
  : 'Expand'
expandButton.onclick = () => {
  expandElem.expanded = !expandElem.expanded;
  expandButton.innerHTML = expandElem.expanded
    ? 'Collapse'
    : 'Expand';
};

const expandElem2 = document.getElementById('expand-collapse-2');
const expandButton2 = document.getElementById('expand-button-2');
expandButton2.innerHTML = expandElem2.expanded
  ? 'Collapse'
  : 'Expand'
expandButton2.onclick = () => {
  expandElem2.expanded = !expandElem2.expanded;
  expandButton2.innerHTML = expandElem2.expanded
    ? 'Collapse'
    : 'Expand';
};

document.getElementById('expand-html-example').code = `<cpy-expand-collapse expanded>
  <div style="padding: 2rem; border: 1px solid var(--cpy-bg-basic-border);">
    I'm in an expandable container!
  </div>
</cpy-expand-collapse>

<script>
  const expandElem = document.querySelector('cpy-expand-collapse');
  // call an api method
  expandElem.toggle();
  // or set the value directly
  expandElem.expanded = !expandElem.expanded;
</script>`;

document.getElementById('expand-props').tableData = [
  { name: 'expanded', description: 'Whether the container is expanded or not', type: "boolean", default: "", required: false },
  { name: 'duration', description: 'Animation duration (ms) for expand/collapse', type: "number", default: "300", required: false },
];

document.getElementById('expand-events').tableData = [
  { name: 'toggleExpanded', description: 'Triggered when the state of the container changes, emitting if it is expanded or not', emitsType: "boolean" },
];

document.getElementById('expand-methods').tableData = [
  { name: 'expand()', description: 'Opens the container', returnType: "" },
  { name: 'collapse()', description: 'Closes the container', returnType: "" },
  { name: 'toggle()', description: 'Toggles the container', returnType: "" }
];

document.getElementById('expand-slots').tableData = [
  { slotName: "-- (default)", purpose: 'Contents of the expandable container' }
];