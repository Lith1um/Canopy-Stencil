document.getElementById('carousel-html-example').code = `<cpy-carousel carousel-title="This is a carousel!">
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
  <div style="width: 200px; height: 200px;"></div>
</cpy-carousel>`;

document.getElementById('carousel-props').tableData = [
  { name: 'carousel-title', description: 'Title to display with the carousel', type: "string", default: "", required: false }
];

document.getElementById('carousel-slots').tableData = [
  { slotName: "-- (default)", purpose: 'Main content of carousel' },
];