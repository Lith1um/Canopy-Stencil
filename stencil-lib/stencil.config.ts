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
  namespace: 'canopy-stencil',
  plugins: [
    sass(),
    tailwind({
      tailwindConf: twConfigurationFn
    }),
    tailwindHMR({
      tailwindConf: twConfigurationFn
    }),
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'canopy-stencil',
      directivesProxyFile: '../angular/projects/canopy-stencil-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/canopy-stencil-angular/src/lib/stencil-generated/index.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
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
