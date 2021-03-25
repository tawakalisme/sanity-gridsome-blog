export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '605bfbe966ff9b00b2a6c5e2',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-27uobrpk',
                  apiId: 'c83333ab-e961-43a1-a519-126cca36bfa3'
                },
                {
                  buildHookId: '605bfbe93d2b7300b7e62753',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-wnfb9pq8',
                  apiId: '6ec84057-c1f8-4f38-b3e4-4a2e781d840d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tawakalisme/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-wnfb9pq8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
