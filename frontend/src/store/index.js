import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count_items: 0,
      price_item: 0
  },
  getters: {
      count(state) {
          return state.count_items
      },
      price(state) {
          return state.price_item
      }
  },
  mutations: {
      increment(state, price) {
        state.count_items += 1
        state.price_item += price
    },
    clear_cart(state) {
        state.count_items = 0
        state.price_item = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
