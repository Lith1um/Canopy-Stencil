(function () {
  document.getElementById('colours-override-simple').code = `html {
  --cpy-bg-primary-rgb: 8, 145, 178; /* cyan-600 */
  --cpy-bg-primary-light-rgb: 236, 254, 255;  /* cyan-50 */
  --cpy-bg-primary-hover-rgb: 6, 182, 212; /* cyan-500 */
  
  --cpy-text-primary: rgb(14, 116, 144); /* cyan-700 */
}
html.dark {
  --cpy-bg-primary-light-rgb: 8, 145, 178;  /* cyan-600 */
      
  --cpy-text-primary: rgb(6, 182, 212); /* cyan-500 */
}`;
  document.getElementById('colours-palette-css').code = `:root {
  /* overrides the text colour in dark mode for edge cases
      like white text on coloured background for alerts */
  --cpy-dm-text-override: currentColor;

  --cpy-bg-hover: rgba(0, 0, 0, 0.05);

  /* based on tailwind colours */
  --cpy-bg-light-rgb: 250, 250, 250; /* zinc-50 */
  --cpy-bg-medium-rgb: 229, 231, 235; /* grey-200 */
  --cpy-bg-white-rgb: 255, 255, 255;
  --cpy-bg-basic-rgb: 75, 85, 99; /* gray-600 */
  --cpy-bg-basic-light-rgb: 249, 250, 251; /* grey-50 */
  --cpy-bg-basic-hover-rgb: 107, 114, 128; /* grey-500 */
  --cpy-bg-basic-border-rgb: 229, 231, 235; /* grey-200 */
  --cpy-bg-primary-rgb: 124, 58, 237; /* violet-600 */
  --cpy-bg-primary-light-rgb: 238, 242, 255;  /* violet-50 */
  --cpy-bg-primary-hover-rgb: 139, 92, 246; /* violet-500 */
  --cpy-bg-secondary-rgb: 234, 88, 12; /* orange-600 */
  --cpy-bg-secondary-light-rgb: 255, 247, 237; /* orange-50 */
  --cpy-bg-secondary-hover-rgb: 249, 115, 22; /* orange-500 */
  --cpy-bg-success-rgb: 22, 163, 74; /* green-600 */
  --cpy-bg-success-light-rgb: 240, 253, 244; /* green-50 */
  --cpy-bg-success-hover-rgb: 34, 197, 94; /* green-500 */
  --cpy-bg-error-rgb: 220, 38, 38; /* red-600 */
  --cpy-bg-error-light-rgb: 254, 242, 242; /* red-50 */
  --cpy-bg-error-hover-rgb: 239, 68, 68; /* red-500 */
  --cpy-bg-warn-rgb: 217, 119, 6; /* amber-600 */
  --cpy-bg-warn-light-rgb: 255, 251, 235; /* amber-50 */
  --cpy-bg-warn-hover-rgb: 245, 158, 11; /* amber-500 */
  --cpy-bg-disabled-rgb: 229, 231, 235; /* gray-200 */

  --cpy-text-disabled: rgb(156, 163, 175); /* gray-400 */
  --cpy-text-base: rgb(31, 41, 55); /* gray-800 */
  --cpy-text-light: rgb(107, 114, 128); /* gray-500 */
  --cpy-text-primary: rgb(109, 40, 217); /* violet-700 */
  --cpy-text-secondary: rgb(194, 65, 12); /* orange-700 */
  --cpy-text-basic: rgb(55, 65, 81); /* gray-700 */
  --cpy-text-success: rgb(21, 128, 61); /* green-700 */
  --cpy-text-warn: rgb(180, 83, 9); /* amber-700 */
  --cpy-text-error: rgb(185, 28, 28); /* red-700 */
  
  --cpy-tooltip-bg: var(--cpy-bg-dark);
  --cpy-tooltip-text: var(--cpy-bg-white);
  --cpy-progress-bar-bg: var(--cpy-bg-primary);
  --cpy-comment-author-text: var(--cpy-text-primary);
}`;

  document.getElementById('colours-pallette-dark-css').code = `html.dark {
  /* overrides the text colour in dark mode for edge cases
      like white text on coloured background for alerts */
  --cpy-dm-text-override: rgb(255, 255, 255);

  --cpy-bg-hover: rgba(0, 0, 0, 0.05);

  /* based on tailwind colours */
  --cpy-bg-light-rgb: 15, 23, 42; /* slate-900 */
  --cpy-bg-white-rgb: 30, 41, 59; /* slate-800 */
  ...
}`;

  document.getElementById('colours-pallette-dark-alt').code = `@media (prefers-color-scheme: dark) {
  ...
}`;
})();