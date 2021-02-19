export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '602f6aacd52bffa9413ff29a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-3678-studio',
                  apiId: '749c5046-173a-4493-a8d5-03de75bf15a8'
                },
                {
                  buildHookId: '602f6aaccb5d8c89862a2542',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-3678',
                  apiId: '292151e1-e965-472b-92d8-a342d2451e48'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gofurtheronline/sanity-nextjs-landing-pages3678',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-3678.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
