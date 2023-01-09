<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lith1um/Canopy-Stencil">
    <img src="https://raw.githubusercontent.com/Lith1um/Canopy-Stencil/main/logo.png" alt="Logo" width="140">
  </a>

  <h3 align="center">Canopy</h3>

  <p align="center">
    A UI library built on <a href="https://stenciljs.com/">Stencil</a>.
  </p>
  <p align="center">
    Originally built to facilitate building UIs with as minimal effort as possible across multiple frontend technologies.
    <br />
    <br />
    <!-- <a href="https://github.com/lith1um/Canopy-Stencil">View Demo</a> -->
    <a href="https://github.com/lith1um/Canopy-Stencil/issues">Report Bug</a>
    ·
    <a href="https://github.com/lith1um/Canopy-Stencil/issues">Request Feature</a>
  </p>
</div>

### Installation

To get Canopy up and running in your application, you have 2 options:

1. Install via NPM
   ```sh
   npm install canopy-stencil-web
   ```
    - Add the script and link tags in the head of your index.html to load the package
      ```html
        <script
          type="module"
          src="node_modules/canopy-stencil-web/dist/canopy-stencil-web/canopy-stencil-web.esm.js">
        </script>
        <link
          rel="stylesheet"
          href="node_modules/canopy-stencil-web/dist/canopy-stencil-web/canopy-stencil-web.css"/>
      ```
    - You can now use the components anywhere in your template, JSX, html etc
  2. Use via CDN with unpkg
      - Add a script tag in the head of your index.html to load the package
        ```html
          <script
            type="module"
            src="https://unpkg.com/canopy-stencil-web@latest/dist/canopy-stencil-web/canopy-stencil-web.esm.js">
          </script>
          <link
            rel="stylesheet"
            href="https://unpkg.com/canopy-stencil-web@latest/dist/canopy-stencil-web/canopy-stencil-web.css"/>
        ```
      - You can now use the components anywhere in your template, JSX, html etc
