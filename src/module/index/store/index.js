import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    headerTitle:'快保',
    demoData: '这是测试数据',
    actionsData: ''
  },
  getters,
  mutations,
  actions
})

export default store