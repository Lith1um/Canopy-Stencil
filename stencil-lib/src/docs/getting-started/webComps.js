(function () {
  document.getElementById('web-comp-install-npm-html').code = `<script
  type="module"
  src="node_modules/canopy-stencil-web/dist/canopy-stencil-web/canopy-stencil-web.esm.js">
</script>
<link
  rel="stylesheet"
  href="node_modules/canopy-stencil-web/dist/canopy-stencil-web/canopy-stencil-web.css"/>`;

  document.getElementById('web-comp-install-unpkg-html').code = `<script
  type="module"
  src="https://unpkg.com/canopy-stencil-web@latest/dist/canopy-stencil-web/canopy-stencil-web.esm.js">
</script>
<link
  rel="stylesheet"
  href="https://unpkg.com/canopy-stencil-web@latest/dist/canopy-stencil-web/canopy-stencil-web.css"/>`;
})();