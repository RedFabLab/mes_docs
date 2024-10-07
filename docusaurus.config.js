// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Производство, доступное каждому",
  //tagline: "Dinosaurs are cool test 2",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "redfab", // Usually your GitHub org/user name.
  projectName: "mes docs yo", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: // - Добавлял "Edit this page" в конце каждой статьи
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // }, // Страница "Blog", пока не нужна
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark', // Использовать темную тему по умолчанию
        disableSwitch: true,  // Отключить возможность переключения темы
      },
      // Если захотим вернуть светлую тему - удалить просто colorMode:
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://redfab.ru",
            label: "Подробнее о Redfab", // Изменение на сайт Redfab
            position: "left",
          },
          // { to: "/blog", label: "Blog", position: "left" }, // Страница "Blog", пока не нужна
          // {
          //   type: "search", // Строка поиска
          //   position: "right", // Позиция строки поиска
          // },
        ],
        // footer: {
        //   style: 'dark',
        //   links: [
        //     {
        //       title: 'Docs',
        //       items: [
        //         {
        //           label: 'Tutorial',
        //           to: '/docs/intro',
        //         },
        //       ],
        //     },
        //     {
        //       title: 'Community',
        //       items: [
        //         {
        //           label: 'Stack Overflow',
        //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //         },
        //         {
        //           label: 'Discord',
        //           href: 'https://discordapp.com/invite/docusaurus',
        //         },
        //         {
        //           label: 'Twitter',
        //           href: 'https://twitter.com/docusaurus',
        //         },
        //       ],
        //     },
        //     {
        //       title: 'More',
        //       items: [
        //         {
        //           label: 'Blog',
        //           to: '/blog',
        //         },
        //         {
        //           label: 'GitHub',
        //           href: 'https://github.com/facebook/docusaurus',
        //         },
        //       ],
        //     },
        //   ],
        //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        // },
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
