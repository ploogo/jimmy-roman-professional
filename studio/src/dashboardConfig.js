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
                  buildHookId: '60314a2db2938bceed846daf',
                  title: 'Sanity Studio',
                  name: 'jimmy-roman-professional-studio',
                  apiId: '02cff74a-94ea-47e0-b1b0-ff67f6980405'
                },
                {
                  buildHookId: '60314a2dee9649c5e590a91d',
                  title: 'Blog Website',
                  name: 'jimmy-roman-professional',
                  apiId: '579c7e83-e898-44ca-810d-e7fc11b9e552'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ploogo/jimmy-roman-professional',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://jimmy-roman-professional.netlify.app', category: 'apps' }
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
