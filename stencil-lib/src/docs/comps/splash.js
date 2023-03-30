(function () {
  document.getElementById('overview-code').code = `<div style="height: 10rem; width: 10rem; background-color: var(--cpy-bg-white);">
  <cpy-splash>
  </cpy-splash>
</div>`;

  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-bg-splash', description: 'Color of splash', defaultValue: 'rgba(0, 0, 0, 0.3)' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'disabled', description: 'Whether or not the splash is disabled', type: 'boolean', default: 'false', required: false }
  ];

  const splashElem = document.getElementById('disabled-splash');
  document.getElementById('splash-toggle').addEventListener('valueChange', (e) => splashElem.disabled = e.detail);

  document.getElementById('example-code').code = `<cpy-input-toggle label="Splash disabled" value></cpy-input-toggle>
<div style="height: 10rem; width: 10rem; background-color: var(--cpy-bg-white);">
  <cpy-splash disabled>
  </cpy-splash>
</div>

<script>
  const splashElem = document.querySelector('cpy-splash');
  document.querySelector('cpy-input-toggle').addEventListener('valueChange', (e) => splashElem.disabled = e.detail);
</script>`;
})();
