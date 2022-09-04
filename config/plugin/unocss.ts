import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

export function configUnocss() {
  return UnoCSS({
    presets: [
      // text='red'
      presetUno(),
      // class
      presetAttributify(),
      presetIcons(),
    ],
    shortcuts: {
      'icon-btn': 'op50 hover:op100',
      'border-base': 'border-gray/20 dark:border-gray/15',
      'bg-base': 'bg-white dark:bg-truegray-900',
      'bg-canvas': 'bg-gray:15 dark:bg-truegray-800',
    },
  })
}
