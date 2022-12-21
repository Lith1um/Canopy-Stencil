<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lith1um/Canopy-Stencil">
    <img src="../logo.png" alt="Logo" width="140">
  </a>

  <h3 align="center">Canopy - Angular</h3>

  <p align="center">
    An angular implementation of <a href="https://github.com/lith1um/Canopy-Stencil">Canopy</a> - a set of UI Web Components built with stencil.
    <br />
    <br />
    <!-- <a href="https://github.com/lith1um/Canopy-Stencil">View Demo</a> -->
    <a href="https://github.com/lith1um/Canopy-Stencil/issues">Report Bug</a>
    ·
    <a href="https://github.com/lith1um/Canopy-Stencil/issues">Request Feature</a>
  </p>
</div>

### Installation

To get Canopy up and running in Angular, you'll need to install the relevant packages and configure your app to use web components.

1. Install NPM packages
   ```sh
   npm install canopy-stencil-web canopy-stencil-angular
   ```
2. Configure your app module to import the angular module and custom elements loader for canopy, calling the loader 
    ```ts
    import { CanopyStencilModule } from 'canopy-stencil-angular';
    import { defineCustomElements } from 'canopy-stencil-web/loader';

    defineCustomElements();
    ```

    Follow up by adding the Canopy module to your imports
    ```ts
    @NgModule({
    imports: [
      CanopyStencilModule,
      ...
    ],
    ...
    ```
3. Modify you angular json to load assets and css from Canopy, adding the following into the build options for your project
   ```json
   "assets": [
      {
        "glob": "**/*",
        "input": "node_modules/canopy-stencil-web/dist/canopy-stencil-web/webfonts",
        "output": "/webfonts/"
      },
      ...
    ],
    "styles": [
      "node_modules/canopy-stencil-web/dist/canopy-stencil-web/styles/material-icons.css",
      ...
    ],
    ...
   ```

And that's it! You should now be able to use Canopy within your angular application.
