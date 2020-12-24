import messages from './assets/ts/messages.ts'

const brandName = 'Le Labo'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: brandName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss'],
  
  // Shared CSS variables (https://github.com/nuxt-community/style-resources-module)
  styleResources: {
    scss: ['@/assets/scss/_colors.scss'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@plugins/store-accessor.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
  ],

  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages,
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    treeShake: true,
    defaultAssets: false,
    customVariables: ['@/assets/scss/_vuetifyVariables.scss'],
    optionsPath: './vuetify.options.ts',
  },

  // put generated static site in /dist/<environment_name>
  generate: {
    dir: 'dist/' + process.env.OUTPUT_DIR,
  },

  env: {
    secretKey: process.env.SECRET_KEY,
  },

  publicRuntimeConfig: {
    brandName,
  }
}
