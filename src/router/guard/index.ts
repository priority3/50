import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import NProgress from 'nprogress'
export function setupRouteGuard(router: Router) {
  createPageLoadingGuard(router)
}

function createPageLoadingGuard(router: Router) {
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    console.log(to, from)
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
