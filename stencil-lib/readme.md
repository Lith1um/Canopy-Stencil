<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lith1um/Canopy-Stencil">
    <img src="../logo.png" alt="Logo" width="140">
  </a>

  <h3 align="center">Canopy</h3>

  <p align="center">
    A UI library built on <a href="https://stenciljs.com/">Stencil</a>.
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
    - Add a script tag in the head of your index.html to load the package
      ```html
        <script type="module" src="node_modules/canopy-stencil-web/dist/canopy-stencil-web/canopy-stencil-web.esm.js"></script>
        <link rel="stylesheet" href="node_modules/canopy-stencil-web/dist/canopy-stencil-web/styles/material-icons.css">
      ```
    - You can now use the components anywhere in your template, JSX, html etc
<br/>
  2. Use via CDN with unpkg
      - Add a script tag in the head of your index.html to load the package
        ```html
          <script type="module" src="https://unpkg.com/canopy-stencil-web@latest/dist/canopy-stencil-web/canopy-stencil-web.esm.js"></script>
          <style type="text/css">
            @font-face {
              font-family: "Material Icons";
              src: url(https://unpkg.com/canopy-stencil-web@latest/dist/canopy-stencil-web/webfonts/MaterialIconsRound-Regular.otf) format("opentype");
            }
          </style>
        ```
      - You can now use the components anywhere in your template, JSX, html etc
