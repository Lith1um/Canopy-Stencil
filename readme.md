<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lith1um/Canopy-Stencil" target="_blank">
    <img src="https://github.com/Lith1um/Canopy-Stencil/raw/main/logo.png" alt="Logo" width="140">
  </a>

  <h3 align="center">Canopy</h3>

  <p align="center">
    A UI library built on <a href="https://stenciljs.com/" target="_blank">Stencil</a>.
  </p>
  <p align="center">
    Originally built to facilitate building UIs with as minimal effort as possible across multiple frontend technologies.
    <br />
    <br />
    <a href="https://lith1um.github.io/" target="_blank">Check out a working demo!</a>
    <br />
    Built in vanilla HTML and JS with Canopy web components.
    <br />
    <br />
    <!-- <a href="https://github.com/lith1um/Canopy-Stencil" target="_blank">View Demo</a> -->
    <a href="https://github.com/lith1um/Canopy-Stencil/issues" target="_blank">Report Bug</a>
    ·
    <a href="https://github.com/lith1um/Canopy-Stencil/issues" target="_blank">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#support">Support</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#colours">Colours</a></li>
        <li><a href="#dark-mode">Dark Mode</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The purpose of Canopy is to provide a strong set of UI tools built using web components, allowing it to be used anywhere on the web, by anyone. By using [Stencil](https://stenciljs.com/) as the backbone for components, Canopy can be built for individual frontend frameworks, allowing Developers to use Canopy as they would any native component library.

Here's why I think you should consider using this package:
* Your time should be focused on creating something amazing, not worrying about building common UI
* You shouldn't be doing the same tasks over and over like designing new components from scratch
* Learn one library, then use it again and again no matter the technology you build your app with!


### Support

Canopy can be used with any frontend technology, however it is built specifically to support the following implementations:

* [![Html][Html]][Html-url]
* [![Angular][Angular.io]][Angular-url]

There is future work planned to build Canopy for the following technologies:

* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]


## Getting started

Depending on your apps implementation, you can use the links below to get started with Canopy:

* [Native web components](https://github.com/Lith1um/Canopy-Stencil/tree/main/stencil-lib)
* [Angular components](https://github.com/Lith1um/Canopy-Stencil/tree/main/angular)

This covers the basic install, but extended configuration can be setup to override Canopy to your liking.

### Colours

Personally I think canopy is already using the best colour palette you could ever want but I understand it may not fit your needs. Through the use of the `:root` selector in css, you can override almost every colour in the library (current colours are based on [tailwind](https://tailwindcss.com/docs/customizing-colors)). Below is the simplest example of overriding colours (replacing primary colour on light and dark mode):

```css
  html {
    --cpy-bg-primary-rgb: 8, 145, 178; /* cyan-600 */
    --cpy-bg-primary-light-rgb: 236, 254, 255;  /* cyan-50 */
    --cpy-bg-primary-hover-rgb: 6, 182, 212; /* cyan-500 */
    
    --cpy-text-primary: rgb(14, 116, 144); /* cyan-700 */
  }
  html.dark {
    --cpy-bg-primary-light-rgb: 8, 145, 178;  /* cyan-600 */
        
    --cpy-text-primary: rgb(6, 182, 212); /* cyan-500 */
  }
```

Some colours (mainly background colours) are set as rgb values without the `rgb()` container, since they are often manipulated within components to modify their opacity.

A full list of the configurable colours is below (along with their defaulted values):

```css
:root {
  /* overrides the text colour in dark mode for edge cases
     like white text on coloured background for alerts */
  --cpy-dm-text-override: currentColor;

  --cpy-bg-hover: rgba(0, 0, 0, 0.05);

  /* based on tailwind colours */
  --cpy-bg-light-rgb: 250, 250, 250; /* zinc-50 */
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
}
```

### Dark Mode

By default, Canopy looks for a `dark` class on the HTML tag to determine if the colour palette should switch to dark mode, however this is easily configurable for your needs. Similarly to the main colour palette, you can override any dark mode colours:

```css
html.dark {
  /* overrides the text colour in dark mode for edge cases
     like white text on coloured background for alerts */
  --cpy-dm-text-override: rgb(255, 255, 255);

  --cpy-bg-hover: rgba(0, 0, 0, 0.05);

  /* based on tailwind colours */
  --cpy-bg-light-rgb: 15, 23, 42; /* slate-900 */
  --cpy-bg-white-rgb: 30, 41, 59; /* slate-800 */
  --cpy-bg-basic-rgb: 71, 85, 105; /* slate-600 */
  --cpy-bg-basic-light-rgb: 71, 85, 105; /* slate-600 */
  --cpy-bg-basic-hover-rgb: 100, 116, 139; /* slate-500 */
  --cpy-bg-basic-border-rgb: 71, 85, 105; /* slate-600 */
  --cpy-bg-primary-rgb: 124, 58, 237; /* violet-600 */
  --cpy-bg-primary-light-rgb: 124, 58, 237;  /* violet-600 */
  --cpy-bg-primary-hover-rgb: 139, 92, 246; /* violet-500 */
  --cpy-bg-secondary-rgb: 234, 88, 12; /* orange-600 */
  --cpy-bg-secondary-light-rgb: 234, 88, 12; /* orange-600 */
  --cpy-bg-secondary-hover-rgb: 249, 115, 22; /* orange-500 */
  --cpy-bg-success-rgb: 22, 163, 74; /* green-600 */
  --cpy-bg-success-light-rgb: 22, 163, 74; /* green-600 */
  --cpy-bg-success-hover-rgb: 34, 197, 94; /* green-500 */
  --cpy-bg-error-rgb: 220, 38, 38; /* red-600 */
  --cpy-bg-error-light-rgb: 220, 38, 38; /* red-600 */
  --cpy-bg-error-hover-rgb: 239, 68, 68; /* red-500 */
  --cpy-bg-warn-rgb: 217, 119, 6; /* amber-600 */
  --cpy-bg-warn-light-rgb: 217, 119, 6; /* amber-600 */
  --cpy-bg-warn-hover-rgb: 245, 158, 11; /* amber-500 */
  --cpy-bg-disabled-rgb: 226, 232, 240; /* slate-200 */

  --cpy-text-disabled: rgb(148, 163, 184); /* slate-400 */
  --cpy-text-base: rgb(241, 245, 249); /* slate-100 */
  --cpy-text-light: rgb(107, 114, 128); /* gray-500 */
  --cpy-text-primary: rgb(139, 92, 246); /* violet-500 */
  --cpy-text-secondary: rgb(249, 115, 22); /* orange-500 */
  --cpy-text-basic: rgb(100, 116, 139); /* slate-500 */
  --cpy-text-success: rgb(34, 197, 94); /* green-500 */
  --cpy-text-warn: rgb(245, 158, 11); /* amber-500 */
  --cpy-text-error: rgb(239, 68, 68); /* red-500 */
  ...
}
```

If you want to use a different method to checking for a dark class on the HTML tag, you can include your own css to set the colour variables. For example, if you want to use dark mode when the user has requested it in their browser settings, replace the html wrapper for your variables with:

```css
@media (prefers-color-scheme: dark) {
  ...
}
```


<!-- ROADMAP -->
## Roadmap

- Minor fixes
- Components
  - [ ] Form inputs
  - [ ] Ghost Components?
  - [ ] Grid layouts
- [ ] Figure out how to let the breakpoints be configurable
- [ ] Accessibility
- [ ] Keyboard events for components?
- [ ] Look into using css variables to override component colours
- [ ] Look into using host css to allow for custom styling (and the part attr. selector?)

See the <a href="https://github.com/lith1um/Canopy-Stencil/issues" target="_blank">open issues</a> for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/lith1um/Canopy-Stencil.svg?style=for-the-badge
[contributors-url]: https://github.com/lith1um/Canopy-Stencil/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lith1um/Canopy-Stencil.svg?style=for-the-badge
[forks-url]: https://github.com/lith1um/Canopy-Stencil/network/members
[stars-shield]: https://img.shields.io/github/stars/lith1um/Canopy-Stencil.svg?style=for-the-badge
[stars-url]: https://github.com/lith1um/Canopy-Stencil/stargazers
[issues-shield]: https://img.shields.io/github/issues/lith1um/Canopy-Stencil.svg?style=for-the-badge
[issues-url]: https://github.com/lith1um/Canopy-Stencil/issues
[license-shield]: https://img.shields.io/github/license/lith1um/Canopy-Stencil.svg?style=for-the-badge
[license-url]: https://github.com/lith1um/Canopy-Stencil/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alex-rayner
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Html]: https://img.shields.io/badge/HTML5-DD4A25?style=for-the-badge&logo=html5&logoColor=white
[Html-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
