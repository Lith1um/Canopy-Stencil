import { Config } from '@stencil/core';
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
