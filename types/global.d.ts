import type { RouteRecordRaw } from 'vue-router'

// 类型声明只存在于模块中
declare global {
  declare interface MetaRouterRecordRaw extends RouteRecordRaw{
    meta?: {
      title?: string
      id:number
    }
  }
}
