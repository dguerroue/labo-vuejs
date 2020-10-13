import Vue from 'vue'
import Vuex from 'vuex'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: 'Hello World!',
    data: []
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data
    }
  },
  actions: {

    fetchData({commit}) {
      let data = [12, 13]

      commit('SET_DATA', data)
    }

  },
  getters: {
    getData: (state) => {
      return state.data
    }
  }
})