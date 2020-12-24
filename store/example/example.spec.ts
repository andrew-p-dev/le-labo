import example from '@/store/example'
import { createStore } from '@/.nuxt/store'
import initialiseStores from '@/plugins/store-accessor'

const timeout = jest.fn(() => (callback: CallableFunction, _: number) => callback())

jest.mock('setTimeout', timeout)

const createTestStore = () => {
  const store = createStore()
  initialiseStores({ store })
  return store
}

test('ExampleStore.getItems [Happy case]', async () => {
  const store = createTestStore()
  const docs = await store.dispatch('example/getItems')

  expect(
    timeout.mock.calls.length,
  ).toBe(1)
})
