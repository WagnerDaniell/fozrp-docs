// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FOZ RP',
  tagline: 'Servidor de Roleplay Brasileiro',
  
  // ✅ CONFIGURAÇÃO PARA GITHUB PAGES:
  url: 'https://wagnerdaniell.github.io',
  baseUrl: '/fozrp-docs/',
  
  // ✅ SEUS DADOS DO GITHUB:
  organizationName: 'WagnerDaniell',
  projectName: 'fozrp-docs',
  
  // REMOVIDO DAQUI
  favicon: 'img/logo.png',

  // ✅ IMPORTANTE para GitHub Pages:
  trailingSlash: false,
  
  // ✅ Branch para deploy:
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn', // MOVI PARA AQUI
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // ✅ Atualize para SEU repositório:
          editUrl: 'https://github.com/WagnerDaniell/fozrp-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // ✅ Configuração para GitHub Pages:
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // Se quiser Google Analytics
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Logo FOZ RP',
          src: 'img/fozgif.gif',
        },
        items: [
          {
            label: 'Home',
            to: '/',
          },
          {
            to: '/regras',
            label: 'Regras',
            position: 'left',
          },
          {
            to: '/sistemas',
            label: 'Sistemas',
            position: 'left',
          },
          {
            to: '/economia',
            label: 'Economia',
            position: 'left',
          },
          {
            href: 'https://discord.gg/gGTFMnuDYa',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Regras',
                to: '/regras',
              },
              {
                label: 'Economia',
                to: '/economia',
              },
              {
                label: 'Sistemas',
                to: '/sistemas',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gGTFMnuDYa',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/WagnerDaniell/fozrp-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FOZ RP. Todos os direitos reservados.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'],
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // ✅ Metadata para SEO:
      metadata: [
        { name: 'description', content: 'Documentação oficial do servidor FOZ RP - MTA Roleplay' },
        { name: 'keywords', content: 'fozrp, mta, roleplay, gta, san andreas' },
      ],
    }),
};

module.exports = config;
