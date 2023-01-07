const drawer = document.querySelector('cpy-drawer-container');
const navMenuElement = document.querySelector('cpy-nav-menu');

const closeMenuOnMobileNav = () => {
  if (!window.matchMedia('(min-width: 640px)').matches) {
    drawer.opened = false;
  }
}

const menuItems = navMenuElement.items = [
  { title: 'Home', type: 'basic', url: '/', icon: 'home' },
  {
    title: 'UI Components', type: 'group', description: 'Building blocks of websites', children: [
      { title: 'Tooltip', type: 'basic', url: '/tooltip', icon: 'chat_bubble', function: closeMenuOnMobileNav },
      { title: 'Popup', type: 'basic', url: '/popup', icon: 'menu', function: closeMenuOnMobileNav },
      { title: 'Spinner', type: 'basic', url: '/spinner', icon: 'refresh', function: closeMenuOnMobileNav },
      { title: 'Button', type: 'basic', url: '/button', icon: 'smart_button', function: closeMenuOnMobileNav },
      { title: 'Alert', type: 'basic', url: '/alert', icon: 'warning', function: closeMenuOnMobileNav },
      { title: 'Avatar', type: 'basic', url: '/avatar', icon: 'account_circle', function: closeMenuOnMobileNav },
      { title: 'Table', type: 'basic', url: '/table', icon: 'table', function: closeMenuOnMobileNav },
    ]
  },
];

// Methods to handle when a page loads
window.popupPageInit = function() {
  document.getElementById('menu-test').items = [
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
}

window.tooltipPageInit = function() {
  document.getElementById('tooltip-props').tableData = [
    { name: 'position', description: 'The tooltips position relative to the item it\'s wrapping', type: 'string', options: "'bottom' | 'left' | 'right' | 'top'", default: "'bottom'", required: false },
    { name: 'text', description: 'The text to display within the tooltip', type: 'string', options: "", default: "", required: false },
  ];
}

window.popupPageInit = function() {
  document.getElementById('popup-props').tableData = [
    { name: 'activeOn', description: 'What triggers the popup to show', type: 'string', options: "'click' | 'hover'", default: "'click'", required: false },
    { name: 'position', description: 'The position of the popup relative to the element it is linked with', type: 'string', options: "'bottom-start' | 'left-start' | 'right-start' | 'top-start'", default: "'bottom-start'", required: false },
  ];
}

window.spinnerPageInit = function() {
  document.getElementById('spinner-props').tableData = [
    { name: 'size', description: 'Spinner size', type: 'string', options: "'default' | 'large' | 'small'", default: "'default'", required: false },
    { name: 'type', description: 'Colour scheme of the spinner', type: 'string', options: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false },
  ];
}

window.buttonPageInit = function() {
  document.getElementById('button-props').tableData = [
    { name: 'appearance', description: 'Button styles', type: 'string', options: "'borderless' | 'fill' | 'outline'", default: "'fill'", required: false },
    { name: 'disabled', description: 'Whether the button is disabled or not', type: 'boolean', options: "", default: "false", required: false },
    { name: 'icon', description: 'If the button is only for an icon', type: 'boolean', options: "", default: "false", required: false },
    { name: 'size', description: 'Size of the button', type: 'string', options: "'default' | 'large' | 'small'", default: "'default'", required: false },
    { name: 'type', description: 'Colour scheme of the button', type: 'string', options: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false }
  ];
}

window.alertPageInit = function() {
  document.getElementById('alert-props').tableData = [
    { name: 'appearance', description: 'Alert styles', type: 'string', options: "'border' | 'soft'", default: "'soft'", required: false },
    { name: 'container', description: 'Whether the alert has a container', type: 'boolean', options: "", default: "true", required: false },
    { name: 'icon', description: 'If the button is only for an icon', type: 'string', options: "Material Icon", default: "undefined", required: false },
    { name: 'type', description: 'Colour scheme of the button', type: 'string', options: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'error'", required: false }
  ];
}

window.avatarPageInit = function() {
  document.getElementById('avatar-props').tableData = [
    { name: 'border', description: 'Shows a border around the avatar', type: 'boolean', options: "", default: "false", required: false },
    { name: 'size', description: 'Size of the avatar', type: 'string', options: "'default' | 'large' | 'small'", default: "'default'", required: false },
    { name: 'src', description: 'Image source for the avatar', type: 'string', options: "", default: "undefined", required: true },
    { name: 'type', description: 'Colour scheme of the button', type: 'string', options: "'rounded' | 'square'", default: "'rounded'", required: false }
  ];
}

window.tablePageInit = function() {
  document.getElementById('table-example').tableData = [{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},{"id":3,"todo":"Watch a classic movie","completed":false,"userId":4},{"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false,"userId":48},{"id":5,"todo":"Solve a Rubik's cube","completed":false,"userId":31},{"id":6,"todo":"Bake pastries for me and neighbor","completed":false,"userId":39},{"id":7,"todo":"Go see a Broadway production","completed":false,"userId":32},{"id":8,"todo":"Write a thank you letter to an influential person in my life","completed":true,"userId":13}];

  document.getElementById('table-props').tableData = [
    { name: 'tableData', description: 'Data to display in the table', type: "{ [key: string]: string | number | boolean | null | undefined }", options: "", default: "", required: true }
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
document.documentElement.addEventListener('click', e => {
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
