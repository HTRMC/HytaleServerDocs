import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hytale Server Protocol',
  tagline: 'Documentation for Hytale Server Network Packets',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://htrmc.github.io',
  baseUrl: '/HytaleServerDocs/',

  organizationName: 'HTRMC',
  projectName: 'HytaleServerDocs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/HTRMC/HytaleServerDocs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Server Protocol',
      logo: {
        alt: 'Hytale Server Docs',
        src: 'img/hytale-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'packetsSidebar',
          position: 'left',
          label: 'Packets',
        },
        {
          href: 'https://github.com/HTRMC/HytaleServerDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Packets',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/HTRMC',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HTRMC. Built with Docusaurus.<br/>This is an unofficial community project and is not affiliated with or endorsed by Hypixel Studios or Hytale.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
