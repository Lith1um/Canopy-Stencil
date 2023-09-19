(function () {
  document.getElementById('form-touched-button').addEventListener('buttonClicked', () => {
    document.getElementById('overview-form-group').markAsTouched();
  });
  document.getElementById('form-untouched-button').addEventListener('buttonClicked', () => {
    document.getElementById('overview-form-group').markAsUntouched();
  });

  document.getElementById('form-valid-button').addEventListener('buttonClicked', async () => {
    const isValid = await document.getElementById('overview-form-group').isValid();
    window.alert(`Form valid: ${isValid}`);
  });
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '', description: '', defaultValue: '' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'disabled', description: 'Sets the disabled state of all Canopy inputs within the form group', type: "boolean", default: "", required: false },
    { name: 'size', description: 'Sets the size of all Canopy inputs within the form group', type: "InputSize", default: "", required: false },
  ];

  document.getElementById('comp-methods').tableData = [
    { name: 'isValid()', description: 'Returns validation result for all canopy inputs within the form', returnType: "Promise<boolean>" },
    { name: 'markAsTouched()', description: 'Marks the form as interacted with, running validation on all canopy inputs in the form and updating the UI if invalid', returnType: "" },
    { name: 'markAsUntouched()', description: 'Resets the interaction state of the form, removing any errors on all canopy inputs from the UI', returnType: "" },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the form (intended use is with canopy inputs)' },
  ];
})();
