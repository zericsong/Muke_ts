import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  // arrow function recommended for full type inference
  state: () => ({   //()立即返回函数，省略了return{...}
    // all these properties will have their type inferred automatically
    count: 1,
  }),
  getters: {
    // automatically infers the return type as a number
    add: (state) => ++state.count ,
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})
