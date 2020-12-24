import { Store } from 'vuex'
import VueRouter, { Route } from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    $store: Store<any>
    $router: VueRouter
    $route: Route
  }
}
