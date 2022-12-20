import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'canopy-stencil',
  plugins: [
    sass(),
    tailwind(),
    tailwindHMR(),
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
