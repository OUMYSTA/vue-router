import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('@/pages/DashboardPages.vue'),
          name: 'dashboard'
        },
        {
          path: '/profile',
          component: () => import('@/pages/ProfilePage.vue'),
          name: 'profile'
        },
        {
          path: 'product',
          component: () => import('@/pages/ProductPage.vue'),
          name: 'product'
        },
        {
          path: 'product/:id',
          component: () => import('@/pages/ProductDetailPage.vue'),
          name: 'product.detail',
          meta: {isAdmin:true},
          beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('user') as string
            const user = JSON.parse(token)
            if(to.meta.isAdmin && user.isAdmin){
              next()
            }else{
              next({name:from.name as string})
            }
          }
        }
      ]
    },
    { path: '/login', component: () => import('@/pages/LoginPage.vue'), name: 'login' },
    { path: '/:pathMatch(.*)*', component: () => import('@/pages/NotFoundPage.vue') }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'login' && !localStorage.getItem('user')){
    next({name:'login'})
  }
  else{
    next()
  }
})

export default router
