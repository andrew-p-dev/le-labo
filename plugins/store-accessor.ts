import { Store } from 'vuex';
import { getModule } from 'nuxt-property-decorator';
import example from '@/store/example'
// import insertion point (do not change this text, it is being used by hygen cli)

let exampleStore: example
// variable insertion point (do not change this text, it is being used by hygen cli)

export default ({ store }: { store: Store<any> }) => {
  exampleStore = getModule(example, store)
  // extractVuexModule insertion point (do not change this text, it is being used by hygen cli)
};

export {
  exampleStore,
  // export insertion point (do not change this text, it is being used by hygen cli)
};
