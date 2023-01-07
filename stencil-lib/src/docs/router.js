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
  document.getElementById('tooltip-props').data = [
    { name: 'position', description: 'The tooltips position relative to the item it\'s wrapping', type: 'string', options: "'bottom' | 'left' | 'right' | 'top'", default: "'bottom'", required: false },
    { name: 'text', description: 'The text to display within the tooltip', type: 'string', options: "", default: "", required: false },
  ];
}

window.tablePageInit = function() {
  document.getElementById('table-test').data = [{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},{"id":3,"todo":"Watch a classic movie","completed":false,"userId":4},{"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false,"userId":48},{"id":5,"todo":"Solve a Rubik's cube","completed":false,"userId":31},{"id":6,"todo":"Bake pastries for me and neighbor","completed":false,"userId":39},{"id":7,"todo":"Go see a Broadway production","completed":false,"userId":32},{"id":8,"todo":"Write a thank you letter to an influential person in my life","completed":true,"userId":13},{"id":9,"todo":"Invite some friends over for a game night","completed":false,"userId":47},{"id":10,"todo":"Have a football scrimmage with some friends","completed":false,"userId":19},{"id":11,"todo":"Text a friend I haven't talked to in a long time","completed":false,"userId":39},{"id":12,"todo":"Organize pantry","completed":true,"userId":39},{"id":13,"todo":"Buy a new house decoration","completed":false,"userId":16},{"id":14,"todo":"Plan a vacation I've always wanted to take","completed":false,"userId":28},{"id":15,"todo":"Clean out car","completed":false,"userId":33},{"id":16,"todo":"Draw and color a Mandala","completed":true,"userId":24},{"id":17,"todo":"Create a cookbook with favorite recipes","completed":false,"userId":1},{"id":18,"todo":"Bake a pie with some friends","completed":false,"userId":1},{"id":19,"todo":"Create a compost pile","completed":true,"userId":5},{"id":20,"todo":"Take a hike at a local park","completed":true,"userId":43},{"id":21,"todo":"Take a class at local community center that interests you","completed":false,"userId":22},{"id":22,"todo":"Research a topic interested in","completed":false,"userId":4},{"id":23,"todo":"Plan a trip to another country","completed":true,"userId":37},{"id":24,"todo":"Improve touch typing","completed":false,"userId":45},{"id":25,"todo":"Learn Express.js","completed":false,"userId":49},{"id":26,"todo":"Learn calligraphy","completed":false,"userId":50},{"id":27,"todo":"Have a photo session with some friends","completed":false,"userId":14},{"id":28,"todo":"Go to the gym","completed":false,"userId":15},{"id":29,"todo":"Make own LEGO creation","completed":false,"userId":30},{"id":30,"todo":"Take cat on a walk","completed":false,"userId":15}];
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
