document.getElementById('card-html-example').code = `<cpy-card style="margin-top: 1rem; margin-bottom: 2rem;">
  <div style="display: flex; gap: 1rem; align-items: center;">
    <cpy-avatar size="x-large" src="https://react.semantic-Ui.com/images/avatar/large/matthew.png"></cpy-avatar>
    <div style="flex: 1;">
      <p style="font-weight: 500; font-size: 1.125rem;">Alex Rayner</p>
      <p style="font-size: 0.75rem;">Front End Developer</p>
    </div>
  </div>
  <div slot="footer">
    This is a footer!
  </div>
</cpy-card>`;

document.getElementById('card-slots').tableData = [
  { slotName: "-- (default)", purpose: 'Contents of the card' },
  { slotName: "footer", purpose: 'Footer contents for the card' }
];