import { createStore } from 'state-pool'

const store = createStore()
store.setState('providerAgnostic', false)

export default store
