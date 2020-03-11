import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrollTop: 0
  },
  getters: {
    getScrollTop: state => state.scrollTop
  },
  mutations: {
    SET_SCROLL_TOP ( state, top ) {
      state.scrollTop = top
    }
  },
  actions: {
    setScrollTop ({ commit }, top) {
      commit('SET_SCROLL_TOP', top)
    }
  },
  modules: {
  }
})
