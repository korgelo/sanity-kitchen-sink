export default {
  widgets: [
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
                  buildHookId: '62a45db223b63b77b4736b92',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4df2mc5o',
                  apiId: 'c6551e3a-39da-4472-941c-ac57364a70d4'
                },
                {
                  buildHookId: '62a45db2a32b4d7d55b0dea0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wj2sgxph',
                  apiId: '64329b2b-fb82-456f-81ef-16968eb8c70a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/korgelo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wj2sgxph.netlify.app', category: 'apps'}
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
