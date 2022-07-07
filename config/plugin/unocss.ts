import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

export function configUnocss() {
  return UnoCSS({
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
    ],
    shortcuts: {
      'icon-btn': 'op50 hover:op100',
    },
  })
}
