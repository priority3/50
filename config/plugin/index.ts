import type { Plugin } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { configUnocss } from './unocss'
import { configAutoimport } from './auto-imp'
import { configVuecomponents } from './vue-auto-com'
import { configMockplugin } from './mock'
import { setupConfigPages } from './pages'
export function configVitePlugin(isBuild: Boolean) {
  const vitePlugins: (Plugin | Plugin[]) [] = [
    // unocss
    configUnocss(),
    // 自动引入
    configAutoimport(),
    // vue 相关组件 自动导入
    configVuecomponents(),
    // vue
    // pages
    setupConfigPages(),
    Vue({
      // $语法糖
      reactivityTransform: true,
    }),
  ]
  vitePlugins.push(configMockplugin(isBuild))
  return vitePlugins
}

export default configVitePlugin
