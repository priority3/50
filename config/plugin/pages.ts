import Pages from 'vite-plugin-pages'

export function setupConfigPages() {
  return Pages({
    dirs: 'src/views',
  })
}
