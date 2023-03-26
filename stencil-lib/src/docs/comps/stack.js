document.getElementById('stack-html-example').code = `<cpy-stack direction="right" overlap="0.5">
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg"></cpy-avatar>
  <cpy-avatar src="https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg"></cpy-avatar>
</cpy-stack>`;

document.getElementById('stack-props').tableData = [
  { name: 'direction', description: 'The side that the stack begins from (the starting side will have the highest z-index element)', type: "'left' | 'right'", default: "'left'", required: false },
  { name: 'overlap', description: 'The amount of overlap for each element in the stack as a ratio of the element\'s width ', type: "number", default: "0.5", required: false },
];

document.getElementById('stack-slots').tableData = [
  { slotName: "-- (default)", purpose: 'Contents of the stack' }
];