import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'example',
  stateFactory: true,
  namespaced: true,
})
export default class Example extends VuexModule {
  @Action
  async getItems() {
    return new Promise(resolve => {
      setTimeout(() => resolve([
        'one',
        'two',
        'three'
      ]), 1500)
    })
  }
}
