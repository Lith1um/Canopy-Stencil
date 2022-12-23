import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import tailwind, { TailwindConfig, tailwindHMR } from 'stencil-tailwind-plugin';
import { sass } from '@stencil/sass';
import tailwindConf from './tailwind.config';

const twConfigurationFn = (filename: string, config: TailwindConfig): TailwindConfig => {
  return {
    ...config,
    ...tailwindConf
  };
};

export const config: Config = {
  namespace: 'canopy-stencil-web',
  globalStyle: 'src/styles/global.css',
  plugins: [
    sass(),
    tailwind({
      tailwindConf: twConfigurationFn,
      tailwindCssPath: 'src/styles/tailwind.css'
    }),
    tailwindHMR({
      tailwindConf: twConfigurationFn,
      tailwindCssPath: 'src/styles/tailwind.css'
    }),
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'canopy-stencil-web',
      directivesProxyFile: '../angular/projects/canopy-stencil-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/canopy-stencil-angular/src/lib/stencil-generated/index.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'assets/material/*', dest: 'styles' },
        { src: 'assets/material/fonts/*', dest: 'webfonts' }
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
        { src: 'assets/material/fonts/*', dest: 'webfonts' }
      ]
    },
  ],
};
