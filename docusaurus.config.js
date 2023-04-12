// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ksinny',
  tagline: 'Ksinny\'s blog :! ',
  favicon: 'img/myfavicon.ico',

  // Set the production url of your site here
  url: 'https://ksinny.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ksinny', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "network",
        path: "cs/network",
        routeBasePath: "cs/network",
        sidebarPath : require.resolve("./sidebarsNetwork.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dataStructure",
        path: "cs/dataStructure",
        routeBasePath: "cs/dataStructure",
        sidebarPath : require.resolve("./sidebarsDataStructure.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "database",
        path: "cs/database",
        routeBasePath: "cs/database",
        sidebarPath : require.resolve("./sidebarsDatabase.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "operatingSystem",
        path: "cs/operatingSystem",
        routeBasePath: "cs/operatingSystem",
        sidebarPath : require.resolve("./sidebarsOperatingSystem.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "CSBasic",
        path: "cs/CSBasic",
        routeBasePath: "cs/CSBasic",
        sidebarPath : require.resolve("./sidebarsCSBasic.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "designPattern",
        path: "cs/designPattern",
        routeBasePath: "cs/designPattern",
        sidebarPath : require.resolve("./sidebarsDesignPattern.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "Java",
        path: "java",
        routeBasePath: "java",
        sidebarPath : require.resolve("./sidebarsJava.js"),
      },
    ],

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ksinny',
        logo: {
          alt: 'My-Logo',
          /*src: 'img/logo.svg',*/
          src: 'img/MyLogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'CS',
            position: 'left',
            items: [
              {
                 type: "doc",
                 docsPluginId: "CSBasic",
                 label: "CS기초",
                 docId: "intro",
              },
              {
                 type: "doc",
                 docsPluginId: "designPattern",
                 label: "디자인패턴",
                 docId: "intro",
              },
              {
                type: "doc",
                docsPluginId: "network",
                label: "네트워크",
                docId: "intro",
              },
              {
                 type: "doc",
                 docsPluginId: "operatingSystem",
                 label: "운영체제",
                 docId: "intro",
              },
              {
                 type: "doc",
                 docsPluginId: "database",
                 label: "데이터베이스",
                 docId: "intro",
              },
              {
                 type: "doc",
                 docsPluginId: "dataStructure",
                 label: "자료구조",
                 docId: "intro",
              },
            ],
          },
          {
             type: "doc",
             docsPluginId: "Java",
             label: "Java",
             docId: "intro",
           },
          {
            href: 'https://github.com/Ksinny',
            label: 'GitHub',
            position: 'right',
           /* src: 'MyLogo.png',*/
          },
       ],
      },
      algolia: {
          appId: 'DDRZD4XC36',
          apiKey: '0c144633c68aa0f158f1cde45ace310d',
          indexName: 'ksinny',
          position: 'right',
          contextualSearch: false,
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Ksinny, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
