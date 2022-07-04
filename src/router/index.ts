// import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupRouteGuard } from './guard'
import routes from '~pages'
console.log(routes)

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App<Element>) {
  setupRouteGuard(router)
  app.use(router)
}
