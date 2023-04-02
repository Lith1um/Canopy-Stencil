(function () {
  document.getElementById('overview-code').code = `<cpy-button id="overview-button">Expand</cpy-button>

<cpy-expand-collapse id="overview-expand" expanded>
  <div style="padding: 2rem; border: 1px solid var(--cpy-bg-basic-border);">
    I'm in an expandable container!

    <div style="display: flex; align-items: flex-start; flex-direction: column; width: 100%; gap: 0.5rem;">
      <cpy-button id="overview-button-2">Expand</cpy-button>

      <cpy-expand-collapse id="overview-expand-2">
        <div style="padding: 2rem; border: 1px solid var(--cpy-bg-basic-border);">
          I'm in a nested expandable container!
        </div>
      </cpy-expand-collapse>
    </div>
  </div>
</cpy-expand-collapse>

<script>
  const expandElem = document.getElementById('overview-expand');
  const expandButton = document.getElementById('overview-button');
  expandButton.innerHTML = expandElem.expanded
    ? 'Collapse'
    : 'Expand'
  expandButton.onclick = () => {
    expandElem.expanded = !expandElem.expanded;
    expandButton.innerHTML = expandElem.expanded
      ? 'Collapse'
      : 'Expand';
  };

  const expandElem2 = document.getElementById('overview-expand-2');
  const expandButton2 = document.getElementById('overview-button-2');
  expandButton2.innerHTML = expandElem2.expanded
    ? 'Collapse'
    : 'Expand'
  expandButton2.onclick = () => {
    expandElem2.expanded = !expandElem2.expanded;
    expandButton2.innerHTML = expandElem2.expanded
      ? 'Collapse'
      : 'Expand';
  };
</script>`;

  const expandElem = document.getElementById('overview-expand');
  const expandButton = document.getElementById('overview-button');
  expandButton.innerHTML = expandElem.expanded
    ? 'Collapse'
    : 'Expand';
  expandButton.onclick = () => {
    expandElem.expanded = !expandElem.expanded;
    expandButton.innerHTML = expandElem.expanded
      ? 'Collapse'
      : 'Expand';
  };

  const expandElem2 = document.getElementById('overview-expand-2');
  const expandButton2 = document.getElementById('overview-button-2');
  expandButton2.innerHTML = expandElem2.expanded
    ? 'Collapse'
    : 'Expand';
  expandButton2.onclick = () => {
    expandElem2.expanded = !expandElem2.expanded;
    expandButton2.innerHTML = expandElem2.expanded
      ? 'Collapse'
      : 'Expand';
  };
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '', description: '', defaultValue: '' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'expanded', description: 'Whether the container is expanded or not', type: "boolean", default: "", required: false },
    { name: 'duration', description: 'Animation duration (ms) for expand/collapse', type: "number", default: "300", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'toggleExpanded', description: 'Triggered when the state of the container changes, emitting if it is expanded or not', emitsType: "boolean" },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'expand()', description: 'Opens the container', returnType: "" },
    { name: 'collapse()', description: 'Closes the container', returnType: "" },
    { name: 'toggle()', description: 'Toggles the container', returnType: "" }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the expandable container' }
  ];

  document.getElementById('example-code').code = `<cpy-button>Expand</cpy-button>

<cpy-expand-collapse>
  <div style="padding: 2rem; border: 1px solid var(--cpy-bg-basic-border);">
    I'm in an expandable container!
  </div>
</cpy-expand-collapse>

<script>
  const expandElem = document.querySelector('cpy-expand-collapse');
  const expandButton = document.querySelector('cpy-button');
  expandButton.innerHTML = expandElem.expanded
    ? 'Collapse'
    : 'Expand'
  expandButton.onclick = () => {
  expandElem.expanded = !expandElem.expanded;
  expandButton.innerHTML = expandElem.expanded
    ? 'Collapse'
    : 'Expand';
  };
</script>`;

  const exampleExpand = document.getElementById('example-expand');
  const exampleButton = document.getElementById('example-button');
  exampleButton.innerHTML = exampleExpand.expanded
    ? 'Collapse'
    : 'Expand';
  exampleButton.onclick = () => {
    exampleExpand.expanded = !exampleExpand.expanded;
    exampleButton.innerHTML = exampleExpand.expanded
      ? 'Collapse'
      : 'Expand';
  };

  document.getElementById('example-code-2').code = `<cpy-button>Expand</cpy-button>

<cpy-expand-collapse expanded>
  <div style="padding: 2rem; border: 1px solid var(--cpy-bg-basic-border);">
    I'm in an expandable container!
  </div>
</cpy-expand-collapse>

<script>
  const expandElem = document.querySelector('cpy-expand-collapse');
  const expandButton = document.querySelector('cpy-button');
  expandButton.innerHTML = expandElem.expanded
    ? 'Collapse'
    : 'Expand'
  expandButton.onclick = () => {
  expandElem.expanded = !expandElem.expanded;
  expandButton.innerHTML = expandElem.expanded
    ? 'Collapse'
    : 'Expand';
  };
</script>`;

  const exampleExpand2 = document.getElementById('example-expand-2');
  const exampleButton2 = document.getElementById('example-button-2');
  exampleButton2.innerHTML = exampleExpand2.expanded
    ? 'Collapse'
    : 'Expand';
  exampleButton2.onclick = () => {
    exampleExpand2.expanded = !exampleExpand2.expanded;
    exampleButton2.innerHTML = exampleExpand2.expanded
      ? 'Collapse'
      : 'Expand';
  };

  document.getElementById('example-code-3').code = `<cpy-button>Expand</cpy-button>

<cpy-expand-collapse duration="1000">
  <div style="padding: 2rem; border: 1px solid var(--cpy-bg-basic-border);">
    I'm in an expandable container!
  </div>
</cpy-expand-collapse>

<script>
  const expandElem = document.querySelector('cpy-expand-collapse');
  const expandButton = document.querySelector('cpy-button');
  expandButton.innerHTML = expandElem.expanded
    ? 'Collapse'
    : 'Expand'
  expandButton.onclick = () => {
  expandElem.expanded = !expandElem.expanded;
  expandButton.innerHTML = expandElem.expanded
    ? 'Collapse'
    : 'Expand';
  };
</script>`;

  const exampleExpand3 = document.getElementById('example-expand-3');
  const exampleButton3 = document.getElementById('example-button-3');
  exampleButton3.innerHTML = exampleExpand3.expanded
    ? 'Collapse'
    : 'Expand';
    exampleButton3.onclick = () => {
    exampleExpand3.expanded = !exampleExpand3.expanded;
    exampleButton3.innerHTML = exampleExpand3.expanded
      ? 'Collapse'
      : 'Expand';
  };
})();
