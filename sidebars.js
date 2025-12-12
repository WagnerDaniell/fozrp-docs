/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Regras',
      link: {
        type: 'generated-index',
        title: 'Regras do Servidor',
        description: 'Todas as regras do FOZ RP 2024',
        slug: '/regras',
      },
      items: [
        'regras/servidor',
        'regras/faccoes',
        'regras/corporacoes',
      ],
    },
    {
      type: 'category',
      label: 'Economia',
      link: {
        type: 'generated-index',
        title: 'Sistema Econômico',
        description: 'Todas as tabelas e sistemas econômicos',
        slug: '/economia',
      },
      items: [
        'economia/empregos',
        'economia/armas',
        'economia/imoveis',
        'economia/ilegal',
        'economia/veiculos',
        'economia/lojas',
        'economia/salarios',
        'economia/guarani',
        'economia/beneficios',

      ],
    },
    {
      type: 'category',
      label: 'Sistemas',
      link: {
        type: 'generated-index',
        title: 'Sistemas do Servidor',
        description: 'Sistemas de polícia, facções e mecânicas',
        slug: '/sistemas',
      },
      items: [
        'sistemas/policia',
        'sistemas/lojinha',
        'sistemas/resgate',
      ],
    },
  ],
};

module.exports = sidebars;