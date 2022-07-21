// import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { setupRouteGuard } from './guard'
import pageRoutes from '~pages'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  ...pageRoutes,
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App<Element>) {
  setupRouteGuard(router)
  app.use(router)
}
