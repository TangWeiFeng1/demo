import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  columns:['字段1','字段2','字段3','字段','字段','字段6','字段7'],
  targets: ['指标1','指标2','指标3','指标4','指标5','指标6']
}

const store =  new Vuex.Store({
  state,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export default store
