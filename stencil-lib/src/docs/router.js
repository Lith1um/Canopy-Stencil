const drawer = document.querySelector('cpy-drawer-container');
const navMenuElement = document.querySelector('cpy-nav-menu');

const closeMenuOnMobileNav = () => {
  if (!window.matchMedia('(min-width: 640px)').matches) {
    drawer.opened = false;
  }
}

const menuItems = navMenuElement.items = [
  { title: 'Home', type: 'basic', url: '/', icon: 'home', function: closeMenuOnMobileNav },
  {
    title: 'UI Components', type: 'group', description: 'Building blocks of websites', children: [
      { title: 'Tooltip', type: 'basic', url: '/tooltip', icon: 'chat_bubble', function: closeMenuOnMobileNav },
      { title: 'Popup', type: 'basic', url: '/popup', icon: 'menu', function: closeMenuOnMobileNav },
      { title: 'Code Block', type: 'basic', url: '/codeBlock', icon: 'code', function: closeMenuOnMobileNav },
      { title: 'Recursive Menu', type: 'basic', url: '/recursiveMenu', icon: 'list_alt', function: closeMenuOnMobileNav },
      { title: 'Navigation Menu', type: 'basic', url: '/navMenu', icon: 'menu_open', function: closeMenuOnMobileNav },
      { title: 'Spinner', type: 'basic', url: '/spinner', icon: 'refresh', function: closeMenuOnMobileNav },
      { title: 'Button', type: 'basic', url: '/button', icon: 'smart_button', function: closeMenuOnMobileNav },
      { title: 'Alert', type: 'basic', url: '/alert', icon: 'warning', function: closeMenuOnMobileNav },
      { title: 'Avatar', type: 'basic', url: '/avatar', icon: 'account_circle', function: closeMenuOnMobileNav },
      { title: 'Table', type: 'basic', url: '/table', icon: 'table', function: closeMenuOnMobileNav },
    ]
  },
];

// Methods to handle when a page loads
window.codeBlockPageInit = function() {
  document.getElementById('code-block-css-example').code = `.nav-menu-item {
  --item-opacity: 0;
  background-color: rgba(var(--cpy-bg-basic-rgb), var(--item-opacity));

  &:hover, &--active {
    --item-opacity: 0.1;
  }
}`;

  document.getElementById('code-block-ts-example').code = `import { Component, h, Prop } from '@stencil/core';
import * as Prism from 'prismjs';

@Component({
  tag: 'cpy-code-block',
  styleUrl: 'code-block.scss',
  shadow: false,
})
export class CodeBlock {

  @Prop() code: string;

  render() {
    return (
      <pre>
        <code class="language-css">
          {Prism.tokenize(this.code, '')}
        </code>
      </pre>
    );
  }
}`;

  document.getElementById('code-block-props').tableData = [
    { name: 'code', description: 'The code snippet to show', type: "string", default: "", required: true },
    { name: 'language', description: 'The code snippet language', type: "'typescript' | 'javascript' | 'css' | 'html'", default: "'typescript'", required: false },
  ];
}

window.tooltipPageInit = function() {
  document.getElementById('tooltip-props').tableData = [
    { name: 'position', description: 'The tooltips position relative to the item it\'s wrapping', type: "'bottom' | 'left' | 'right' | 'top'", default: "'bottom'", required: false },
    { name: 'text', description: 'The text to display within the tooltip', type: 'string', default: "", required: false },
  ];
}

window.popupPageInit = function() {
  document.getElementById('popup-test').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        { title: 'Option 2', icon: 'menu' },
        { title: 'Option 3', icon: 'refresh' },
        { title: 'Option 4', icon: 'smart_button' },
        { title: 'Option 5', icon: 'warning' },
      ]
    }
  ];

  document.getElementById('popup-props').tableData = [
    { name: 'activeOn', description: 'What triggers the popup to show', type: "'click' | 'hover'", default: "'click'", required: false },
    { name: 'position', description: 'The position of the popup relative to the element it is linked with', type: "'bottom-start' | 'left-start' | 'right-start' | 'top-start'", default: "'bottom-start'", required: false },
  ];
}

window.recursiveMenuPageInit = function() {
  document.getElementById('recursive-menu-example').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        { title: 'Option 2', icon: 'menu' },
        { title: 'Option 3', icon: 'refresh' },
        { title: 'Option 4', icon: 'smart_button' },
        { title: 'Option 5', icon: 'warning' },
      ]
    }
  ];

  document.getElementById('recursive-menu-props').tableData = [
    { name: 'items', description: 'Items to populate the menu with', type: 'RecursiveMenuItem[]', default: "", required: true }
  ];
}

window.navMenuPageInit = function() {
  document.getElementById('nav-menu-example').items = [
    { title: 'Basic Nav Item' },
    { title: 'Basic Nav Item w/ Icon', icon: 'home' },
    { title: 'Basic Nav Item w/ Description', description: 'Basic nav item description' },
    { title: 'Basic Nav Item w/ Separator After', separator: true },
    { title: 'Basic Nav Item w/ All Applied', icon: 'home', description: 'Basic nav item description', separator: true },
    {
      title: 'Nav Item Group', type: 'group', separator: true, description: 'Represents the start of a group of items', children: [
        { title: 'Group Item 1', type: 'basic', icon: 'chat_bubble' },
        { title: 'Group Item 2', type: 'basic', icon: 'menu' },
        { title: 'Group Item 3', type: 'basic', icon: 'list_alt' },
        { title: 'Group Item 4', type: 'basic', icon: 'menu_open' },
        { title: 'Group Item 5', type: 'basic', icon: 'refresh' },
      ]
    },
  ];;

  document.getElementById('nav-menu-props').tableData = [
    { name: 'items', description: 'Items to populate the navigation menu with', type: 'NavMenuItem[]', default: "", required: true }
  ];
}

window.spinnerPageInit = function() {
  document.getElementById('spinner-props').tableData = [
    { name: 'size', description: 'Spinner size', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
    { name: 'type', description: 'Colour scheme of the spinner', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false },
  ];
}

window.buttonPageInit = function() {
  document.getElementById('button-props').tableData = [
    { name: 'appearance', description: 'Button styles', type: "'borderless' | 'fill' | 'outline'", default: "'fill'", required: false },
    { name: 'disabled', description: 'Whether the button is disabled or not', type: 'boolean', default: "false", required: false },
    { name: 'icon', description: 'If the button is only for an icon', type: 'boolean', default: "false", required: false },
    { name: 'size', description: 'Size of the button', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
    { name: 'type', description: 'Colour scheme of the button', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false }
  ];
}

window.alertPageInit = function() {
  document.getElementById('alert-props').tableData = [
    { name: 'appearance', description: 'Alert styles', type: "'border' | 'soft'", default: "'soft'", required: false },
    { name: 'container', description: 'Whether the alert has a container', type: 'boolean', default: "true", required: false },
    { name: 'icon', description: 'The icon (if any) to show', type: 'string', default: "undefined", required: false },
    { name: 'type', description: 'Colour scheme of the alert', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'error'", required: false }
  ];
}

window.avatarPageInit = function() {
  document.getElementById('avatar-props').tableData = [
    { name: 'border', description: 'Shows a border around the avatar', type: 'boolean', default: "false", required: false },
    { name: 'size', description: 'Size of the avatar', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
    { name: 'src', description: 'Image source for the avatar', type: 'string', default: "undefined", required: true },
    { name: 'type', description: 'Colour scheme of the button', type: "'rounded' | 'square'", default: "'rounded'", required: false }
  ];
}

window.tablePageInit = function() {
  document.getElementById('table-example').tableData = [{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},{"id":3,"todo":"Watch a classic movie","completed":false,"userId":4},{"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false,"userId":48},{"id":5,"todo":"Solve a Rubik's cube","completed":false,"userId":31},{"id":6,"todo":"Bake pastries for me and neighbor","completed":false,"userId":39},{"id":7,"todo":"Go see a Broadway production","completed":false,"userId":32},{"id":8,"todo":"Write a thank you letter to an influential person in my life","completed":true,"userId":13}];

  document.getElementById('table-props').tableData = [
    { name: 'tableData', description: 'Data to display in the table', type: "{ [key: string]: string | number | boolean | null | undefined }", default: "", required: true }
  ];
}

function loadPage(page) {
  var xhr = typeof XMLHttpRequest != 'undefined'
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');

  page = page || 'home';

  xhr.open('get', `docs/${page}.html`, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("router-outlet").innerHTML = xhr.responseText;
      // run any related methods
      if (window[`${page}PageInit`]) {
        window[`${page}PageInit`]();
      }
    }
  }

  xhr.send();
}

// this triggers my internal application logic
const handleRoute = () => {
  const path = window.location.pathname.split('/')[1];
  loadPage(path);
  const setActive = (item) => {
    return item.type !== 'group'
      ? { ...item, active: window.location.pathname === item.url }
      : { ...item, children: item.children.map(setActive) };
  };
  navMenuElement.items = menuItems.map(setActive);
}
// add event handler for when using the browser UI to navigate back and forth
window.onpopstate = () => handleRoute();
// trigger the current route once on init
handleRoute();

// navigates to an URL, triggers the route
const navigate = (url) => {
  // bail early if the URL is already active
  if (url === window.location.href) return false;
  // push the URL to the history
  window.history.pushState(null, '', url || '/');
  // trigger the route manually
  handleRoute();
}

// adds an event listener for all internal links
window.addEventListener('click', e => {
  // since some elements are in the shadow root, we can make use of the path on the event to get the anchor
  for (let i = 0; i < e.path.length - 1; i++) {
    const elemPath = e.path[i];
    // get tag name
    const tag = elemPath.tagName;
    if (tag === 'A') {
      if (!elemPath.href || elemPath.target === '_blank') {
        continue;
      }
      e.preventDefault();
      navigate(elemPath.href);
      break;
    }
  }
});
