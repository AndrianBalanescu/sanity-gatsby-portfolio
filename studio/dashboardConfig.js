export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e3d873a172527db2d246928',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-affzdywa',
                  apiId: 'ce157067-8f46-428d-aa64-2871fb54aa36'
                },
                {
                  buildHookId: '5e3d873a698fbfb20551b4e8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hrfvs15z',
                  apiId: '36b95269-7e6e-4c67-b74e-46ff98563da1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Flomastermod/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hrfvs15z.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
