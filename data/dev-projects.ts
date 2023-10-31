// export const IndividualProjectsInfo = [
//   {
//     workcheck: {
//       name: 'Workcheck',
//       description: 'To-do list completa pro trabalho',
//       link_github: '/',
//     },
//   },
//   {
//     design_links: {
//       name: 'design_links',
//       description: 'Links uteis de design',
//       link_github: '/',
//     },
//   },
//   {
//     modern_palette: {
//       name: 'modern_palette',
//       description: 'Uma forma diferente de procurar cores hex/rgb',
//       link_github: '/',
//     },
//   },
//   {
//     moeda_magica: {
//       name: 'moeda_magica',
//       description: 'uma moeda mágica de leitura',
//       link_github: '/',
//     },
//   },
// ];

export function generateStaticParams() {
  return [
    {
      name: 'workcheck',
      description: 'to-do list pro trabalho',
      link_name: '/workcheck',
      icon: 'https://raw.githubusercontent.com/rommel-s/workcheck/main/public/icons/512x512.png',
    },
    {
      name: 'design links',
      description: 'links uteis de design',
      link_name: '/design_links',
      icon: 'https://raw.githubusercontent.com/rommel-s/workcheck/main/public/icons/512x512.png',
    },
    {
      name: 'modern palette',
      description: 'uma forma diferente de procurar cores hex/rgb',
      link_name: '/modern-palette',
      icon: 'https://raw.githubusercontent.com/rommel-s/modern-palette/main/public/icons/512x512.png',
    },
    {
      name: 'moeda magica',
      description: 'uma moeda mágica de leitura',
      link_name: '/moeda-magica',
      icon: 'https://raw.githubusercontent.com/rommel-s/moeda-magica/main/public/icons/512x512.png',
    },
  ];
}
