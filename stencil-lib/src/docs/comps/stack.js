(function () {
  const basicCode = `<cpy-stack>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg"></cpy-avatar>
</cpy-stack>`;

  document.getElementById('overview-code').code = basicCode;

  document.getElementById('comp-styles').tableData = [
    { cssVariable: '', description: '', defaultValue: '' },
  ];

  document.getElementById('comp-interfaces').code = `type StackDirection = 'left' | 'right';`;

  document.getElementById('comp-props').tableData = [
    { name: 'direction', description: 'The side that the stack begins from (the starting side will have the highest z-index element)', type: "StackDirection", default: "'left'", required: false },
    { name: 'overlap', description: 'The amount of overlap for each element in the stack as a ratio of the element\'s width ', type: "number", default: "0.5", required: false },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the stack' }
  ];

  document.getElementById('example-code').code = basicCode;
  document.getElementById('example-code-2').code = `<cpy-stack direction="right">
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg"></cpy-avatar>
</cpy-stack>`;
  document.getElementById('example-code-3').code = `<cpy-stack overlap="0.75">
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg"></cpy-avatar>
</cpy-stack>`;
})();
