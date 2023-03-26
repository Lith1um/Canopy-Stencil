document.getElementById('angular-comp-install-module').code = `import { CanopyStencilModule } from 'canopy-stencil-angular';
import { defineCustomElements } from 'canopy-stencil-web/loader';

defineCustomElements();

@NgModule({
  imports: [
    CanopyStencilModule,
    ...
  ],
  ...
});`;

document.getElementById('angular-comp-install-assets').code = `"assets": [
  {
    "glob": "**/*",
    "input": "node_modules/canopy-stencil-web/dist/canopy-stencil-web/webfonts",
    "output": "/webfonts/"
  },
  ...
],
"styles": [
  "node_modules/canopy-stencil-web/dist/canopy-stencil-web/canopy-stencil-web.css",
  ...
],
...`;