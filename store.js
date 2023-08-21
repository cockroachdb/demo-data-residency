import { createStore } from 'state-pool'

const store = createStore()

function debounce(func, timeout) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

store.persist({
  saveState: function (key, value, isInitialSet) {
    const doStateSaving = () => {
      try {
        const serializedState = JSON.stringify(value)
        window.localStorage.setItem(key, serializedState)
      } catch {
        // Ignore write errors
      }
    }

    if (isInitialSet) {
      doStateSaving()
    } else {
      const DEBOUNCE_TIME = 1000
      const processStateSaving = debounce(doStateSaving, DEBOUNCE_TIME)
      processStateSaving()
    }
  },
  loadState: function (key, noState) {
    try {
      const serializedState = window.localStorage.getItem(key)
      if (serializedState === null) {
        return noState
      }
      return JSON.parse(serializedState)
    } catch (err) {
      return undefined
    }
  },
  removeState: function (key) {
    window.localStorage.removeItem(key)
  },
  clear: function () {
    window.localStorage.clear()
  }
})

store.setState('providerAgnostic', false, { persist: true })
export default store
