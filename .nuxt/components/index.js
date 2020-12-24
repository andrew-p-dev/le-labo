export { default as Label } from '../../components/Label/Label.vue'
export { default as Soap } from '../../components/Soap/Soap.vue'
export { default as Rainy } from '../../components/icons/Rainy.vue'
export { default as CircleSmall } from '../../components/icons/circle-small.vue'
export { default as MenuRight } from '../../components/icons/menu-right.vue'
export { default as ShelfLife } from '../../components/icons/shelf-life.vue'

export const LazyLabel = import('../../components/Label/Label.vue' /* webpackChunkName: "components/Label/Label" */).then(c => c.default || c)
export const LazySoap = import('../../components/Soap/Soap.vue' /* webpackChunkName: "components/Soap/Soap" */).then(c => c.default || c)
export const LazyRainy = import('../../components/icons/Rainy.vue' /* webpackChunkName: "components/icons/Rainy" */).then(c => c.default || c)
export const LazyCircleSmall = import('../../components/icons/circle-small.vue' /* webpackChunkName: "components/icons/circle-small" */).then(c => c.default || c)
export const LazyMenuRight = import('../../components/icons/menu-right.vue' /* webpackChunkName: "components/icons/menu-right" */).then(c => c.default || c)
export const LazyShelfLife = import('../../components/icons/shelf-life.vue' /* webpackChunkName: "components/icons/shelf-life" */).then(c => c.default || c)
