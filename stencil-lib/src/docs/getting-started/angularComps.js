(function () {
  document.getElementById('angular-comp-install-module').code = `import { CanopyAngularModule } from '@canopy-web/angular';
import { defineCustomElements } from '@canopy-web/core/loader';

defineCustomElements();

@NgModule({
  imports: [
    CanopyAngularModule,
    ...
  ],
  ...
});`;

  document.getElementById('angular-comp-install-assets').code = `"assets": [
  {
    "glob": "**/*",
    "input": "node_modules/@canopy-web/core/dist/core/webfonts",
    "output": "/webfonts/"
  },
  ...
],
"styles": [
  "node_modules/@canopy-web/core/dist/core/core.css",
  ...
],
...`;
})();