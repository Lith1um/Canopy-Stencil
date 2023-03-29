const drawer = document.querySelector('cpy-drawer-container');
const navMenuElement = document.querySelector('cpy-nav-menu');
const noResultsElem = document.getElementById('no-results');
const searchElem = document.getElementById('search-input');
const searchInputClear = document.getElementById('search-input-clear');

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

const handleSearchChange = (searchStr) => {
  const matchingResults = getMenuItems().reduce((currList, item) => reduceMenuItem(currList, item, searchStr), []);
  navMenuElement.items = [...matchingResults];

  if (matchingResults.length === 0) {
    noResultsElem.classList.remove('hidden');
  } else {
    noResultsElem.classList.add('hidden');
  }
};

searchElem.addEventListener('valueChange', (e) => handleSearchChange(e.detail));
searchInputClear.addEventListener('click', () => {
  searchElem.value = '';
  navMenuElement.items = getMenuItems().map(setActive);;
});

const onMenuItemClick = () => {
  searchElem.value = '';
  if (!window.matchMedia('(min-width: 640px)').matches) {
    drawer.opened = false;
  }
}

const menuItems = navMenuElement.items = [
  { title: 'Home', type: 'basic', url: '/', icon: 'home', function: onMenuItemClick },
  { title: 'Getting Started', type: 'group', description: 'Installation guides', children: [
    { title: 'Web Components', type: 'basic', url: '/getting-started/webComps', icon: 'html', function: onMenuItemClick },
    { title: 'Angular', type: 'basic', url: '/getting-started/angularComps', icon: 'developer_board', function: onMenuItemClick },
  ] },
  { title: 'Learn more', type: 'group', description: 'Dive into the docs', separator: true, children: [
    { title: 'Colours & Dark Mode', type: 'basic', url: '/learn-more/colours', icon: 'palette', function: onMenuItemClick },
    { title: 'Form Validation', type: 'basic', url: '/learn-more/formValidation', icon: 'checklist', function: onMenuItemClick },
  ] },
  {
    title: 'User Interface', type: 'group', description: 'Building blocks of websites', children: [
    { title: 'Layout', icon: 'dashboard', type: 'collapsible', description: 'Common UI layouts', children: [
      { title: 'Carousel', type: 'basic', url: '/comps/carousel', function: onMenuItemClick },
      { title: 'Drawer Container', type: 'basic', url: '/comps/drawer', function: onMenuItemClick },
      { title: 'Navigation Menu', type: 'basic', url: '/comps/navMenu', function: onMenuItemClick },
      { title: 'Overlay', type: 'basic', url: '/comps/overlay', function: onMenuItemClick },
      { title: 'Page Container', type: 'basic', url: '/comps/pageContainer', function: onMenuItemClick },
      { title: 'Page Content', type: 'basic', url: '/comps/pageContent', function: onMenuItemClick },
      { title: 'Table', type: 'basic', url: '/comps/table', function: onMenuItemClick },
      { title: 'Tabs', type: 'basic', url: '/comps/tabs', function: onMenuItemClick },
    ] },
    { title: 'Interactions', icon: 'touch_app', type: 'collapsible', description: 'Floating UI components', children: [
      { title: 'Accordion', type: 'basic', url: '/comps/accordion', function: onMenuItemClick },
      { title: 'Context Menu Trigger', type: 'basic', url: '/comps/contextMenuTrigger', function: onMenuItemClick },
      { title: 'Dialog', type: 'basic', url: '/comps/dialog', function: onMenuItemClick },
      { title: 'Expand/Collapse', type: 'basic', url: '/comps/expandCollapse', function: onMenuItemClick },
      { title: 'Popup', type: 'basic', url: '/comps/popup', function: onMenuItemClick },
      { title: 'Splash', type: 'basic', url: '/comps/splash', function: onMenuItemClick },
      { title: 'Toast', type: 'basic', url: '/comps/toast', function: onMenuItemClick },
      { title: 'Tooltip', type: 'basic', url: '/comps/tooltip', function: onMenuItemClick },
    ] },
    { title: 'Forms', icon: 'format_list_numbered', type: 'collapsible', description: 'Complete form elements', children: [
      { title: 'Basic Inputs', type: 'basic', url: '/comps/input', function: onMenuItemClick },
      { title: 'Toggle', type: 'basic', url: '/comps/toggle', function: onMenuItemClick }
    ] },
    { title: 'Generic', icon: 'inventory_2', type: 'collapsible', description: 'Simple UI components', children: [
      { title: 'Alert', type: 'basic', url: '/comps/alert', function: onMenuItemClick },
      { title: 'Avatar', type: 'basic', url: '/comps/avatar', function: onMenuItemClick },
      { title: 'Badge', type: 'basic', url: '/comps/badge', function: onMenuItemClick },
      { title: 'Button', type: 'basic', url: '/comps/button', function: onMenuItemClick },
      { title: 'Card', type: 'basic', url: '/comps/card', function: onMenuItemClick },
      { title: 'Code Block', type: 'basic', url: '/comps/codeBlock', function: onMenuItemClick },
      { title: 'Code Snippet', type: 'basic', url: '/comps/codeSnippet', function: onMenuItemClick },
      { title: 'Comment', type: 'basic', url: '/comps/comment', function: onMenuItemClick },
      { title: 'Context Menu', type: 'basic', url: '/comps/contextMenu', function: onMenuItemClick },
      { title: 'Icon', type: 'basic', url: '/comps/icon', function: onMenuItemClick },
      { title: 'Link', type: 'basic', url: '/comps/link', function: onMenuItemClick },
      { title: 'Progress Bar', type: 'basic', url: '/comps/progressBar', function: onMenuItemClick },
      { title: 'Show More', type: 'basic', url: '/comps/showMore', function: onMenuItemClick },
      { title: 'Spinner', type: 'basic', url: '/comps/spinner', function: onMenuItemClick },
      { title: 'Stack', type: 'basic', url: '/comps/stack', function: onMenuItemClick },
    ] },
  ] },
];

const devRoutes = {
  title: 'Developer Test',
  type: 'group',
  description: 'Pages for testing when running locally',
  children: [
    { title: 'Template Component Page', type: 'basic', url: '/comps/template', icon: 'aspect_ratio', function: onMenuItemClick },
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
      routerOutlet.parentElement.scrollTop = 0;

      // inject any scripts from the template
      const pageElements = document.createRange().createContextualFragment(xhr.responseText);
      const scriptElement = pageElements.querySelector('script');
      if (scriptElement) {
        routerOutlet.append(scriptElement);
      }
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

  navMenuElement.items = getMenuItems().map(setActive);
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
