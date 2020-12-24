import { Context } from '@nuxt/types'
import { Options } from '@nuxtjs/vuetify'
import colors from 'vuetify/es5/util/colors'

import Rainy from '@/components/icons/Rainy.vue'
import CircleSmall from '@/components/icons/circle-small.vue'
import ShelfLife from '@/components/icons/shelf-life.vue'

export default (ctx: Context): Options => {
  return {
    defaultAssets: false,
    theme: {
      dark: false,
      disable: false,
      default: false,
      options: {},
      themes: {
        light: {
          primary: colors.purple.base,
          accent: colors.blueGrey.darken3,
          secondary: colors.pink.darken1,
          info: colors.blue.lighten2,
          warning: colors.amber.base,
          error: colors.red.accent3,
          success: colors.green.accent3,
          'paper-card': '#f7f1df',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
    icons: {
      iconfont: 'mdi',
      values: {
        rainy: {
          component: Rainy,
        },
        'circle-small': {
          component: CircleSmall,
        },
        'shelf-life': {
          component: ShelfLife,
        },
      },
    },
    lang: {
      locales: {},
      current: 'en',
      t: (key, ...params) => ctx.app.i18n.t(key, params) as string,
    },
  }
}
