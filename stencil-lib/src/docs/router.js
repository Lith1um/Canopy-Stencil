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
  ] },
  {
    title: 'UI Components', type: 'group', description: 'Building blocks of websites', children: [
    { title: 'Tooltip', type: 'basic', url: '/comps/tooltip', icon: 'chat_bubble', function: closeMenuOnMobileNav },
    { title: 'Popup', type: 'basic', url: '/comps/popup', icon: 'menu', function: closeMenuOnMobileNav },
    { title: 'Code Block', type: 'basic', url: '/comps/codeBlock', icon: 'code', function: closeMenuOnMobileNav },
    { title: 'Context Menu', type: 'basic', url: '/comps/contextMenu', icon: 'list_alt', function: closeMenuOnMobileNav },
    { title: 'Navigation Menu', type: 'basic', url: '/comps/navMenu', icon: 'menu_open', function: closeMenuOnMobileNav },
    { title: 'Drawer', type: 'basic', url: '/comps/drawer', icon: 'space_dashboard', function: closeMenuOnMobileNav },
    { title: 'Spinner', type: 'basic', url: '/comps/spinner', icon: 'refresh', function: closeMenuOnMobileNav },
    { title: 'Badge', type: 'basic', url: '/comps/badge', icon: 'notifications', function: closeMenuOnMobileNav },
    { title: 'Button', type: 'basic', url: '/comps/button', icon: 'smart_button', function: closeMenuOnMobileNav },
    { title: 'Link', type: 'basic', url: '/comps/link', icon: 'link', function: closeMenuOnMobileNav },
    { title: 'Alert', type: 'basic', url: '/comps/alert', icon: 'warning', function: closeMenuOnMobileNav },
    { title: 'Avatar', type: 'basic', url: '/comps/avatar', icon: 'account_circle', function: closeMenuOnMobileNav },
    { title: 'Table', type: 'basic', url: '/comps/table', icon: 'table', function: closeMenuOnMobileNav },
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

// this triggers my internal application logic
const handleRoute = () => {
  const path = window.location.pathname.substring(1);
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
  if (url.split('#')[0] === window.location.href.split('#')[0]) return false;
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
      // ignore href which is on a different domain to us
      if (elemPath.href && new URL(elemPath.href).hostname !== window.location.hostname) {
        continue;
      }
      e.preventDefault();
      navigate(elemPath.href);
      break;
    }
  }
});
