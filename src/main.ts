import { createApp } from 'vue'
import type { App } from 'vue'
import AppView from './App.vue'
import 'nprogress/nprogress.css'
import 'uno.css'

import { setupRouter } from './router'
async function bootstrap(app: App<Element>): Promise<App> {
  setupRouter(app)
  return app
}

const app = createApp(AppView)
bootstrap(app).then(app => app.mount('#app'))
