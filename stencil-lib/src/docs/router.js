const drawer = document.querySelector('cpy-drawer-container');
const mobileNavMenu = document.getElementById('mobile-nav');
const desktopNavMenu = document.getElementById('desktop-nav');

window.matchMedia('(min-width: 992px)').onchange = (e) => {
  if (e.matches) {
    drawer.opened = false;
  }
};

const setActive = (item) => {
  return item.type === 'basic'
    ? { ...item, active: window.location.pathname === item.url }
    : { ...item, children: item.children.map(setActive) };
};

const reduceMenuItem = (currList, item, searchStr) => {
  if (item.type === 'basic') {
    return item.title.toLowerCase().includes(searchStr.toLowerCase())
      ? [...currList, item]
      : currList;
  }

  const childItems = item.children.reduce((currList, child) => reduceMenuItem(currList, child, searchStr), []);

  if (childItems.length > 0) {
    return item.type === 'collapsible'
      ? [...currList, {...item, children: childItems, collapsed: false}]
      : [...currList, {...item, children: childItems}];
  }
  return currList;
};

const onRouteChange = () => {
  if (drawer.opened) {
    drawer.opened = false;
  }
}

const menuItems = mobileNavMenu.items = desktopNavMenu.items = [
  { title: 'Home', type: 'basic', url: '/', icon: 'home' },
  { title: 'Getting Started', type: 'group', description: 'Installation guides', children: [
    { title: 'Web Components', type: 'basic', url: '/getting-started/webComps', icon: 'html' },
    { title: 'Angular', type: 'basic', url: '/getting-started/angularComps', icon: 'developer_board' },
  ] },
  { title: 'Learn more', type: 'group', description: 'Dive into the docs', children: [
    { title: 'Colors & Dark Mode', type: 'basic', url: '/learn-more/colors', icon: 'palette' },
    { title: 'Form Validation', type: 'basic', url: '/learn-more/formValidation', icon: 'checklist' },
    { title: 'Angular Guides', type: 'collapsible', icon: 'api', children: [
      { title: 'Web Forms', type: 'basic', url: '/learn-more/angularForms' },
    ] }
  ] },
  {
    title: 'User Interface', type: 'group', description: 'Building blocks of websites', children: [
    { title: 'Layout', icon: 'dashboard', type: 'collapsible', description: 'Common UI layouts', children: [
      { title: 'Carousel', type: 'basic', url: '/comps/carousel' },
      { title: 'Comment List', type: 'basic', url: '/comps/commentList' },
      { title: 'Drawer Container', type: 'basic', url: '/comps/drawer' },
      { title: 'Navigation Menu', type: 'basic', url: '/comps/navMenu' },
      { title: 'Overlay', type: 'basic', url: '/comps/overlay' },
      { title: 'Page Container', type: 'basic', url: '/comps/pageContainer' },
      { title: 'Page Content', type: 'basic', url: '/comps/pageContent' },
      { title: 'Slide In', type: 'basic', url: '/comps/slideIn' },
      { title: 'Table', type: 'basic', url: '/comps/table' },
      { title: 'Tabs', type: 'basic', url: '/comps/tabs' },
      { title: 'Toolbar', type: 'basic', url: '/comps/toolbar' },
    ] },
    { title: 'Interactions', icon: 'touch_app', type: 'collapsible', description: 'Floating UI components', children: [
      { title: 'Accordion', type: 'basic', url: '/comps/accordion' },
      { title: 'Context Menu Trigger', type: 'basic', url: '/comps/contextMenuTrigger' },
      { title: 'Dialog', type: 'basic', url: '/comps/dialog' },
      { title: 'Expand/Collapse', type: 'basic', url: '/comps/expandCollapse' },
      { title: 'Popup', type: 'basic', url: '/comps/popup' },
      { title: 'Splash', type: 'basic', url: '/comps/splash' },
      { title: 'Toast', type: 'basic', url: '/comps/toast' },
      { title: 'Tooltip', type: 'basic', url: '/comps/tooltip' },
    ] },
    { title: 'Forms', icon: 'format_list_numbered', type: 'collapsible', description: 'Complete form elements', children: [
      { title: 'Form Groups', type: 'basic', url: '/comps/formGroup' },
      { title: 'Basic Inputs', type: 'basic', url: '/comps/input' },
      { title: 'Checkbox', type: 'basic', url: '/comps/inputCheckbox' },
      { title: 'Color Picker', type: 'basic', url: '/comps/inputColor' },
      { title: 'File', type: 'basic', url: '/comps/inputFile' },
      { title: 'Select', type: 'basic', url: '/comps/inputSelect' },
      { title: 'Textarea', type: 'basic', url: '/comps/inputTextarea' },
      { title: 'Toggle', type: 'basic', url: '/comps/toggle' }
    ] },
    { title: 'Generic', icon: 'inventory_2', type: 'collapsible', description: 'Simple UI components', children: [
      { title: 'Alert', type: 'basic', url: '/comps/alert' },
      { title: 'Avatar', type: 'basic', url: '/comps/avatar' },
      { title: 'Badge', type: 'basic', url: '/comps/badge' },
      { title: 'Button', type: 'basic', url: '/comps/button' },
      { title: 'Card', type: 'basic', url: '/comps/card' },
      { title: 'Code Block', type: 'basic', url: '/comps/codeBlock' },
      { title: 'Code Snippet', type: 'basic', url: '/comps/codeSnippet' },
      { title: 'Comment', type: 'basic', url: '/comps/comment' },
      { title: 'Context Menu', type: 'basic', url: '/comps/contextMenu' },
      { title: 'Icon', type: 'basic', url: '/comps/icon' },
      { title: 'Link', type: 'basic', url: '/comps/link' },
      { title: 'Progress Bar', type: 'basic', url: '/comps/progressBar' },
      { title: 'Show More', type: 'basic', url: '/comps/showMore' },
      { title: 'Spinner', type: 'basic', url: '/comps/spinner' },
      { title: 'Stack', type: 'basic', url: '/comps/stack' },
    ] },
  ] },
];

const devRoutes = {
  title: 'Developer Test',
  type: 'group',
  description: 'Pages for testing when running locally',
  children: [
    { title: 'Template Component Page', type: 'basic', url: '/comps/template', icon: 'aspect_ratio' },
  ]
};

const getMenuItems = () => [...menuItems, ...location.hostname === 'localhost' ? [devRoutes] : []];

const selectTab = () => {
  const tabsElem = document.getElementById('url-tabs');

  if (!tabsElem) {
    return;
  }

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  tabsElem.activeIndex = params.tab ?? 0;
};

const setTabListener = () => {
  const tabsElem = document.getElementById('url-tabs');
  
  if (!tabsElem) {
    return;
  }

  tabsElem.addEventListener('tabChanged', (e) => {
    const url = new URL(window.location);
    url.searchParams.set('tab', e.detail);
    url.hash = '';
    window.history.pushState({}, "", url);
  });
};

function loadPage(page) {
  var xhr = typeof XMLHttpRequest != 'undefined'
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');

  page = page || 'home';

  xhr.open('get', `/docs/${page}.html`, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const routerOutlet = document.getElementById("router-outlet");
      routerOutlet.innerHTML = xhr.responseText;
      document.getElementById('content').scrollTop = 0;

      desktopNavMenu.style.display = page === 'home' ? 'none' : 'block';

      // inject any scripts from the template
      const pageElements = document.createRange().createContextualFragment(xhr.responseText);
      const scriptElement = pageElements.querySelector('script');
      if (scriptElement) {
        routerOutlet.append(scriptElement);
      }
      onRouteChange();
      selectTab();
      setTabListener();
    }
  }

  xhr.send();
}

let currentPath;

// this triggers my internal application logic
const handleRoute = () => {
  const path = window.location.pathname.substring(1);

  if (path === currentPath) {
    selectTab();
    return;
  }
  loadPage(path);

  mobileNavMenu.items = desktopNavMenu.items = getMenuItems().map(setActive);
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
