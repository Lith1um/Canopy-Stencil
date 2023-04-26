(function () {
  document.getElementById('overview-code').code = `<cpy-slide-in reset>
  <cpy-card>
    <div style="display: flex; gap: 1rem; align-items: center; padding: 12px;">
      <cpy-avatar size="x-large" src="https://react.semantic-Ui.com/images/avatar/large/matthew.png"></cpy-avatar>
      <div style="flex: 1;">
        <p style="margin: 0; font-weight: 500; font-size: 1.125rem;">Alex Rayner</p>
        <p style="margin: 0; font-size: 0.75rem;">Front End Developer</p>
      </div>
    </div>
  </cpy-card>
</cpy-slide-in>`;
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '', description: '', defaultValue: '' },
  ];

  document.getElementById('comp-interfaces').code = `type SlideInPosition =
  | 'left'
  | 'right';`;

  document.getElementById('comp-props').tableData = [
    { name: 'position', description: 'Position for the element to enter from', type: 'SlideInPosition', default: "'left'", required: false },
    { name: 'delay', description: 'Animation delay before showing', type: 'number', default: '100', required: false },
    { name: 'reset', description: 'Whether or not to reset the animation when scrolled out of view', type: 'boolean', default: 'false', required: false }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the Slide in' }
  ];

  document.getElementById('example-code-basic').code = `<cpy-slide-in position="right" style="display: block;">
  <img src="https://raw.githubusercontent.com/Lith1um/Canopy-Stencil/main/logo.png" alt="Logo" width="250" style="margin: 2rem auto;">
</cpy-slide-in>
<cpy-slide-in>
  <p>...</p>
</cpy-slide-in>
<cpy-slide-in position="right">
  <p>...</p>
</cpy-slide-in>`;

document.getElementById('example-code-reset').code = `<cpy-slide-in reset>
  <p>...</p>
</cpy-slide-in>
<cpy-slide-in reset position="right">
  <p>...</p>
</cpy-slide-in>
<cpy-slide-in reset>
  <p>...</p>
</cpy-slide-in>`;

document.getElementById('example-code-flex').code = `<div style="display: flex; gap: 2rem; width: 100%;">
  <cpy-slide-in reset style="flex: 1;">
    <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style="height: 25rem; object-fit:cover; border-radius: 0.5rem;"/>
  </cpy-slide-in>
  <cpy-slide-in reset position="right" style="flex: 1;">
    <p>...</p>
    <p>...</p>
  </cpy-slide-in>
</div>`;
})();
