const navMenuElement = document.querySelector('cpy-nav-menu');
const menuItems = navMenuElement.items = [
  { title: 'Home', type: 'basic', url: '/', icon: 'home' },
  {
    title: 'UI Components', type: 'group', description: 'Building blocks of websites', children: [
      { title: 'Tooltip', type: 'basic', url: '/tooltip', icon: 'chat_bubble' },
      { title: 'Menu', type: 'basic', url: '/menu', icon: 'menu' },
      { title: 'Spinner', type: 'basic', url: '/spinner', icon: 'refresh' },
      { title: 'Button', type: 'basic', url: '/button', icon: 'smart_button' },
      { title: 'Alert', type: 'basic', url: '/alert', icon: 'warning' },
      { title: 'Avatar', type: 'basic', url: '/avatar', icon: 'account_circle' },
    ]
  },
];

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
