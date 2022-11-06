import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/views/login/index.vue')
  },
  {
    path: '/upload',
    component: () => import('~/components/upload/index.vue')
  },
  {
    path: '/home',
    redirect: '/home/status',
    component: () => import('~/views/home/index.vue'),
    children: [
      {
        path: 'status',
        component: () => import('~/views/dynamic/index.vue')
      }
    ]
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('~/components/not-found/not-found.vue')
  // }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
router.beforeEach(() => {
  //   console.log('全局路由前置守卫：to,from\n', to, from)
  // 设置页面标题
  //   document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE
  if (!NProgress.isStarted()) NProgress.start()
})

router.afterEach(() => {
  //   console.log('全局路由后置守卫：to,from\n', to, from)
  NProgress.done()
})

export default router
