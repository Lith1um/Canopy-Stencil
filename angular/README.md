<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lith1um/Canopy-Stencil">
    <img src="https://raw.githubusercontent.com/Lith1um/Canopy-Stencil/main/logo-alt.png" alt="Logo" width="140">
  </a>

  <h3 align="center">Canopy - Angular</h3>

  <p align="center">
    A UI library built on <a href="https://stenciljs.com/">Stencil</a>.
  </p>
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
   npm install @canopy-web/core @canopy-web/angular
   ```
2. Configure your app module to import the angular module and custom elements loader for canopy, calling the loader 
    ```ts
    import { CanopyAngularModule } from '@canopy-web/angular';
    import { defineCustomElements } from '@canopy-web/core/loader';

    defineCustomElements();
    ```

    Follow up by adding the Canopy module to your imports
    ```ts
    @NgModule({
    imports: [
      CanopyAngularModule,
      ...
    ],
    ...
    ```
3. Modify you angular json to load assets and css from Canopy, adding the following into the build options for your project
   ```json
   "assets": [
      {
        "glob": "**/*",
        "input": "node_modules/@canopy-web/core/dist/@canopy-web/core/webfonts",
        "output": "/webfonts/"
      },
      ...
    ],
    "styles": [
      "node_modules/@canopy-web/core/dist/@canopy-web/core/@canopy-web/core.css",
      ...
    ],
    ...
   ```

And that's it! You should now be able to use Canopy within your angular application.
