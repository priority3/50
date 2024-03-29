import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'
import { commonShortcuts } from './config/util'

export default defineConfig({
  shortcuts: [
    {
      ...commonShortcuts,
      'icon-btn': 'op50 hover:op100',
      'border-base': 'border-gray/20 dark:border-gray/15',
      'bg-base': 'bg-white dark:bg-truegray-900',
      'bg-canvas': 'bg-gray:15 dark:bg-truegray-800',
    },
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
