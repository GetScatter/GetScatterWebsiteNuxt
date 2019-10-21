
const builtAt = new Date().toISOString()
const path = require('path')
const { I18N } = require('./locales/i18n-nuxt-config')

export default {
  mode: 'universal',
  head: {
    title: 'Scatter, an open-source multi blockchain wallet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { name: 'theme-color', content: '#00A8FF' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@Get_scatter' },
      { property: 'og:type', content: 'profile' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/static/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' },
      { rel: 'apple-touch-icon', href: '/static/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['@/assets/styles.scss','@/assets/_variables.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/lazyload' },
    { src: '@/plugins/globalComponents' },
    { src: '@/plugins/languages' },
    { src: "@/plugins/aos", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n', I18N],
  ],
  /*
  ** Build configuration
  */
  build: {
    extend (config) {

    }
  },

  generate: {
    routes: [
      '404'
    ]
  }
}
