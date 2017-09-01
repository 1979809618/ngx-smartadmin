export const menuData: Array<MenuItem> = [
  {
    text: 'Tables', active: true, open: true, icon: 'fa-table', subMenu: [
      { text: 'Table', url: '/table' }
    ]
  },
  {
    text: 'Forms', icon: 'fa-pencil-square-o', subMenu: [
      { text: 'Check Box', url: '/checkbox' },
      { text: 'Check Box Group', url: '/checkbox-group' },
      { text: 'Radio', url: '/radio' },
      { text: 'Radio Group', url: '/radio-group' },
      { text: 'Rating', url: '/rating' },
      { text: 'Switch', url: '/switch' }
    ]
  },
  {
    text: 'UI Elements', icon: 'fa-desktop', subMenu: [
      { text: 'Accordion', url: '/accordion' },
      { text: 'Alert', url: '/alert' },
      { text: 'Collapse Box', url: '/collapse-box' },
      { text: 'Modal', url: '/modal' },
      { text: 'Pagination', url: '/pagination' },
      { text: 'Progress', url: '/progress' },
      { text: 'TabSet', url: '/tabset' },
      { text: 'Widget', url: '/widget' },
      { text: 'Wizard', url: '/wizard' }
    ]
  }
];

window['AppConf'] = {
  menuData,
  rootHost: process.env.NODE_ENV === 'production' ? 'https://raw.githubusercontent.com/HstarComponents/ngx-smartadmin/master' : 'http://localhost:7777'
};
