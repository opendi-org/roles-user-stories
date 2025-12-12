// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenDI Roles and User Stories',
  tagline: 'Early draft of Roles and User Stories for the upcoming OpenDI standards',
  favicon: 'img/opendi-favicon.ico',

  // Set the production url of your site here
  url: 'http://opendi.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/roles-user-stories/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'opendi-org', // Usually your GitHub org/user name.
  projectName: 'roles-user-stories', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Adds Microsoft Clarity install code to the header for every page on the site.
  // Note: For privacy/tracking reasons, we have our Clarity project configured to not save cookies
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://www.clarity.ms",
      },
    },
    {
      tagName: "script",
      attributes: {
        type: "text/javascript"
      },
      innerHTML: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "otc9atffo4");`,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',

          //Set up "Edit this page" option at the bottom of each page
          //Available params given here: https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-content-docs#EditUrlFunction
          editUrl: ({version, versionDocsDirPath, docPath}) => {
            if (version !== 'current') //Only allow page editing when on the "Next" (dev) version
            {
              return undefined;
            }
            return "https://github.com/opendi-org/roles-user-stories/tree/dev/" + versionDocsDirPath + "/" + docPath;
          },

          routeBasePath: '/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'OpenDI Logo',
          src: 'img/opendi-logo.png',
          srcDark: 'img/opendi-logo-dark.png',
          href: 'https://opendi.org'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'landingSidebar',
            position: 'left',
            label: 'OpenDI Reference Roles and User Stories (DRAFT)',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            'aria-label': 'GitHub Repo',
            className: 'navbar--github-link',
            href: 'https://github.com/opendi-org/roles-user-stories',
            position: 'right',
          },
          {
            'aria-label': 'Discord Invite',
            className: 'navbar--discord-link',
            href: 'https://discord.gg/FtAX3JStJz',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/FtAX3JStJz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/opendi-org',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                href: 'http://opendi.org/',
              },
              {
                label: 'Decision Intelligence News',
                href: 'https://www.scoop.it/topic/decision-intelligence/',
              },
              {
                label: 'OpenDI Glossary',
                href: 'http://opendi.org',
              },
            ],
          },
          {
            title: 'Follow Us',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/opendi-org/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/people/OpenDi/100095177432725/'
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC4Thj0JegsJ3csqb-iEPI5A'
              },
              {
                label: 'BlueSky',
                href: 'https://bsky.app/profile/opendi.bsky.social'
              }
            ],
          },
          {
            title: 'OpenDI',
            items: [
              {
                label: 'Main Site',
                href: 'http://opendi.org',
              },
              {
                label: 'Roles and User Stories',
                href: 'http://opendi.org/roles-user-stories'
              },
              {
                label: 'API Specification',
                href: 'http://opendi.org/api-specification'
              },
            ],
          },
        ],
        copyright: `© 2025-26 OpenDI. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
