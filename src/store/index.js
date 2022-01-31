import { createStore } from 'vuex'

export default createStore({
  state: {
    allRooms: null,
  },
  getters: {
    allRooms(state)
    {
      return state.allRooms
    }
  },
  mutations: {
    mutationSetAllRooms (state, value) {
      state.allRooms = value
    },
  },
  actions: {
    actionSetAllRooms({commit}, value)
    {
      commit('mutationSetAllRooms', value)
    },
  },
  modules: {
  }
})
