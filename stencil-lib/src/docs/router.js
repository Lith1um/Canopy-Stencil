import { pageInits } from './pageInits.js';

const drawer = document.querySelector('cpy-drawer-container');
const navMenuElement = document.querySelector('cpy-nav-menu');

const closeMenuOnMobileNav = () => {
  if (!window.matchMedia('(min-width: 640px)').matches) {
    drawer.opened = false;
  }
}

const menuItems = navMenuElement.items = [
  { title: 'Home', type: 'basic', url: '/', icon: 'home', function: closeMenuOnMobileNav },
  { title: 'Getting Started', type: 'group', description: 'Installation guides', children: [
    { title: 'Web Components', type: 'basic', url: '/getting-started/webComps', icon: 'html', function: closeMenuOnMobileNav },
    { title: 'Angular', type: 'basic', url: '/getting-started/angularComps', icon: 'developer_board', function: closeMenuOnMobileNav },
  ] },
  { title: 'Learn more', type: 'group', description: 'Dive into the docs', separator: true, children: [
    { title: 'Colours & Dark Mode', type: 'basic', url: '/learn-more/colours', icon: 'palette', function: closeMenuOnMobileNav },
    { title: 'Form Validation', type: 'basic', url: '/learn-more/formValidation', icon: 'checklist', function: closeMenuOnMobileNav },
  ] },
  {
    title: 'User Interface', type: 'group', description: 'Building blocks of websites', children: [
    { title: 'Layout', icon: 'dashboard', type: 'collapsible', description: 'Common UI layouts', children: [
      { title: 'Carousel', type: 'basic', url: '/comps/carousel', function: closeMenuOnMobileNav },
      { title: 'Drawer', type: 'basic', url: '/comps/drawer', function: closeMenuOnMobileNav },
      { title: 'Navigation Menu', type: 'basic', url: '/comps/navMenu', function: closeMenuOnMobileNav },
      { title: 'Page Content', type: 'basic', url: '/comps/pageContent', function: closeMenuOnMobileNav }
    ] },
    { title: 'Interactions', icon: 'touch_app', type: 'collapsible', description: 'Floating UI components', children: [
      { title: 'Context Menu Trigger', type: 'basic', url: '/comps/contextMenuTrigger', function: closeMenuOnMobileNav },
      { title: 'Dialog', type: 'basic', url: '/comps/dialog', function: closeMenuOnMobileNav },
      { title: 'Popup', type: 'basic', url: '/comps/popup', function: closeMenuOnMobileNav },
      { title: 'Toast', type: 'basic', url: '/comps/toast', function: closeMenuOnMobileNav },
      { title: 'Tooltip', type: 'basic', url: '/comps/tooltip', function: closeMenuOnMobileNav },
      { title: 'Expand/Collapse', type: 'basic', url: '/comps/expandCollapse', function: closeMenuOnMobileNav },
      { title: 'Accordion', type: 'basic', url: '/comps/accordion', function: closeMenuOnMobileNav },
    ] },
    { title: 'Forms', icon: 'format_list_numbered', type: 'collapsible', description: 'Complete form elements', children: [
      { title: 'Basic Inputs', type: 'basic', url: '/comps/input', function: closeMenuOnMobileNav },
      { title: 'Toggle', type: 'basic', url: '/comps/toggle', function: closeMenuOnMobileNav }
    ] },
    { title: 'Generic', icon: 'inventory_2', type: 'collapsible', description: 'Simple UI components', children: [
      { title: 'Alert', type: 'basic', url: '/comps/alert', function: closeMenuOnMobileNav },
      { title: 'Avatar', type: 'basic', url: '/comps/avatar', function: closeMenuOnMobileNav },
      { title: 'Badge', type: 'basic', url: '/comps/badge', function: closeMenuOnMobileNav },
      { title: 'Button', type: 'basic', url: '/comps/button', function: closeMenuOnMobileNav },
      { title: 'Code Block', type: 'basic', url: '/comps/codeBlock', function: closeMenuOnMobileNav },
      { title: 'Context Menu', type: 'basic', url: '/comps/contextMenu', function: closeMenuOnMobileNav },
      { title: 'Icon', type: 'basic', url: '/comps/icon', function: closeMenuOnMobileNav },
      { title: 'Link', type: 'basic', url: '/comps/link', function: closeMenuOnMobileNav },
      { title: 'Spinner', type: 'basic', url: '/comps/spinner', function: closeMenuOnMobileNav },
      { title: 'Table', type: 'basic', url: '/comps/table', function: closeMenuOnMobileNav },
    ] },
  ] },
];

function loadPage(page) {
  var xhr = typeof XMLHttpRequest != 'undefined'
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');

  page = page || 'home';

  xhr.open('get', `/docs/${page}.html`, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("router-outlet").innerHTML = xhr.responseText;
      // run any related methods
      if (pageInits[`${page.split('/').pop()}`]) {
        pageInits[`${page.split('/').pop()}`]();
      }
    }
  }

  xhr.send();
}

let currentPath;

// this triggers my internal application logic
const handleRoute = () => {
  const path = window.location.pathname.substring(1);
  if (path === currentPath) {
    return;
  }
  loadPage(path);
  const setActive = (item) => {
    return item.type === 'basic'
      ? { ...item, active: window.location.pathname === item.url }
      : { ...item, children: item.children.map(setActive) };
  };
  navMenuElement.items = menuItems.map(setActive);
  currentPath = path;
}
// add event handler for when using the browser UI to navigate back and forth
window.onpopstate = () => handleRoute();
// trigger the current route once on init
handleRoute();

// navigates to an URL, triggers the route
const navigate = (url) => {
  // bail early if the URL is already active
  if (url.split('#')[0] === window.location.href.split('#')[0]) return false;
  // push the URL to the history
  window.history.pushState(null, '', url || '/');
  // trigger the route manually
  handleRoute();
}

// adds an event listener for all internal links
window.addEventListener('click', e => {
  const composedPath = e.composedPath();
  // since some elements are in the shadow root, we can make use of the path on the event to get the anchor
  for (let i = 0; i < composedPath.length - 1; i++) {
    const elemPath = composedPath[i];
    // get tag name
    const tag = elemPath.tagName;
    if (tag === 'A') {
      if (!elemPath.href || elemPath.target === '_blank') {
        continue;
      }
      // ignore href which is on a different domain to us
      if (elemPath.href) {
        const url = new URL(elemPath.href);
        if (url.hostname !== window.location.hostname || (url.pathname === window.location.pathname && url.hash)) {
          continue;
        }
      }
      e.preventDefault();
      navigate(elemPath.href);
      break;
    }
  }
});
