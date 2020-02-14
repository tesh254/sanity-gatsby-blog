export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e46ebece09df30e18a16072',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-82v2rqvy',
                  apiId: 'd5965bf1-a870-4bf1-b7e5-1f7f8f22b2dd'
                },
                {
                  buildHookId: '5e46ebec2ef5f1169627d91d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-surjbrfc',
                  apiId: '3f6fa7f5-3be9-4556-99ac-046c010cdc01'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tesh254/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-surjbrfc.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
