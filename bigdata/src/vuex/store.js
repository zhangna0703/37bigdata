import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态

// 定义所需的 mutations
const state = {
  routerIndex: 0,
  titleStateFlage: true,
  checkName: ''
}
// 所需要定义的mutations
const mutations = {
  ROUTERINDEX: (state, data) => {
    state.routerIndex = data
  },
  TITLESTATEFLAGE: (state, data) => {
    state.titleStateFlage = data
  },
  CHECKNAME: (state, data) => {
    state.checkName = data
  }
}

// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
