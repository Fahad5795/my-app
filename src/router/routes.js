
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: { name: 'Table' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('components/AppTable.vue')
      },
      {
        path: 'cards',
        name: 'Cards',
        component: () => import('components/AppCards.vue')
      },
      {
        path: 'theme',
        name: 'Theme',
        component: () => import('components/AppTheme.vue')
      }
    ]
  }
]

export default routes
