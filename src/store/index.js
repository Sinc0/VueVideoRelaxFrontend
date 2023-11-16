//imports
import { createStore } from 'vuex'


//storage
export default createStore({
  state: {
    allRooms: null,
    defaultRooms: null,
  },

  getters: {
    allRooms(state) { return state.allRooms },
    defaultRooms(state) { return state.defaultRooms }
  },

  mutations: {
    mutationSetAllRooms (state, value) { state.allRooms = value },
    mutationSetDefaultRooms (state, value) { state.defaultRooms = value },
  },

  actions: {
    actionSetAllRooms({commit}, value) { commit('mutationSetAllRooms', value) },
    actionSetDefaultRooms({commit}, value) { commit('mutationSetDefaultRooms', value) },
  },

  modules: { }
})
