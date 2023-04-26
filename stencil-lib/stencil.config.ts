import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';
import angularValueAccessorBindings from './angular-value-accessor-bindings';

export const config: Config = {
  namespace: 'core',
  sourceMap: false,
  globalStyle: 'src/styles/global.css',
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/global.css']
    }),
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@canopy-web/core',
      directivesProxyFile: '../angular/projects/canopy-web-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/canopy-web-angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'assets/material/fonts/*', dest: 'webfonts' },
        { src: 'assets/inter/fonts/*', dest: 'webfonts' },
        { src: 'styles/shared/*', dest: '' }
      ]
    },
    // {
    //   type: 'dist-custom-elements',
    // },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'docs' },
        { src: 'assets/material/fonts/*', dest: 'build/webfonts' },
        { src: 'assets/inter/fonts/*', dest: 'build/webfonts' },
        { src: 'styles/shared/*', dest: 'build' }
      ]
    },
  ],
};
