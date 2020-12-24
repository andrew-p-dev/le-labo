import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b09659e0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/de",
    component: _b09659e0,
    name: "index___de___en"
  }, {
    path: "/de",
    component: _b09659e0,
    name: "index___en___de"
  }, {
    path: "/fr",
    component: _b09659e0,
    name: "index___fr___en"
  }, {
    path: "/fr",
    component: _b09659e0,
    name: "index___en___fr"
  }, {
    path: "/de/de",
    component: _b09659e0,
    name: "index___de___de"
  }, {
    path: "/de/fr",
    component: _b09659e0,
    name: "index___fr___de"
  }, {
    path: "/fr/de",
    component: _b09659e0,
    name: "index___de___fr"
  }, {
    path: "/fr/fr",
    component: _b09659e0,
    name: "index___fr___fr"
  }, {
    path: "/",
    component: _b09659e0,
    name: "index___en___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
