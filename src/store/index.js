import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getter'
Vue.use(Vuex)

// 要设置的全局访问的state对象
// const state = {

// }
const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})

export default store
