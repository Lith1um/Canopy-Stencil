(function () {
  document.getElementById('web-comp-install-npm-html').code = `<script
  type="module"
  src="node_modules/@canopy-web/core/dist/core/core.esm.js">
</script>
<link
  rel="stylesheet"
  href="node_modules/@canopy-web/core/dist/@canopy-web/core/@canopy-web/core.css"/>`;

  document.getElementById('web-comp-install-unpkg-html').code = `<script
  type="module"
  src="https://unpkg.com/@canopy-web/core">
</script>
<link
  rel="stylesheet"
  href="https://unpkg.com/@canopy-web/core@latest/dist/core/core.css"/>`;
})();