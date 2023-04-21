import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import tailwind, { TailwindConfig, tailwindHMR } from 'stencil-tailwind-plugin';
import { sass } from '@stencil/sass';
import tailwindConf from './tailwind.config';
import angularValueAccessorBindings from './angular-value-accessor-bindings';

// const twConfigurationFn = (filename: string, config: TailwindConfig): TailwindConfig => {
//   return {
//     ...config,
//     ...tailwindConf
//   };
// };

export const config: Config = {
  namespace: 'core',
  sourceMap: false,
  globalStyle: 'src/styles/global.css',
  plugins: [
    sass(),
    // tailwind({
    //   tailwindConf: twConfigurationFn,
    //   tailwindCssPath: 'src/styles/tailwind.css'
    // }),
    // tailwindHMR({
    //   tailwindConf: twConfigurationFn,
    //   tailwindCssPath: 'src/styles/tailwind.css'
    // }),
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
        { src: 'assets/inter/fonts/*', dest: 'webfonts' }
      ]
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'docs' },
        { src: 'assets/material/fonts/*', dest: 'build/webfonts' },
        { src: 'assets/inter/fonts/*', dest: 'build/webfonts' }
      ]
    },
  ],
};
