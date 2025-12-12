/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
//https://docusaurus.io/docs/sidebar

//MAIN!!!
const sidebars = {
  landingSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'index'
    },
    {
      type: 'category',
      label: 'Roles',
      items: [
        {
          type: 'doc',
          label: 'Decision Maker',
          id: 'Roles/Decision Maker'
        },
        {
          type: 'doc',
          label: 'DI Analyst',
          id: 'Roles/DI Analyst'
        },
        {
          type: 'doc',
          label: 'Decision Model Builder',
          id: 'Roles/Decision Model Builder'
        },
        {
          type: 'doc',
          label: 'Decision Asset Manager',
          id: 'Roles/Decision Asset Manager'
        },
        {
          type: 'doc',
          label: 'OpenDI System Administrator',
          id: 'Roles/OpenDI System Administrator'
        },
        {
          type: 'doc',
          label: 'Decision Simulation Builder',
          id: 'Roles/Decision Simulation Builder'
        },
        {
          type: 'doc',
          label: 'Decision Simulation Manager',
          id: 'Roles/Decision Simulation Manager'
        },
        {
          type: 'doc',
          label: 'Decision Monitor Builder',
          id: 'Roles/Decision Monitor Builder'
        },
        {
          type: 'doc',
          label: 'Decision Monitor',
          id: 'Roles/Decision Monitor'
        },
        {
          type: 'doc',
          label: 'Decision Quality Assurance Manager',
          id: 'Roles/Decision Quality Assurance Manager'
        },
      ]
    },
    {
      type: 'category',
      label: 'OpenDI',
      items: [
        {
          type: 'link',
          label: 'Main Site',
          href: 'https://opendi.org'
        },
        {
          type: 'link',
          label: 'Roles and User Stories',
          href: 'http://opendi.org/roles-user-stories'
        },
        {
          type: 'link',
          label: 'API Specification',
          href: 'http://opendi.org/api-specification'
        }
      ]
    }
  ],

};

export default sidebars;
