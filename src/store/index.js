//imports
import { createStore } from 'vuex'


//storage
export default createStore({
  state: {
    activeRooms: null,
    defaultRooms: null,
  },

  getters: {
    activeRooms(state) { return state.activeRooms },
    defaultRooms(state) { return state.defaultRooms }
  },

  mutations: {
    mutationSetActiveRooms (state, value) { state.activeRooms = value },
    mutationSetDefaultRooms (state, value) { state.defaultRooms = value },
  },

  actions: {
    actionSetActiveRooms({commit}, value) { commit('mutationSetActiveRooms', value) },
    actionSetDefaultRooms({commit}, value) { commit('mutationSetDefaultRooms', value) },
  },

  modules: { }
})
