import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)

// 要设置的全局访问的state对象
// const state = {

// }
const store = new Vuex.Store({
  modules: {
    user
  }
})

export default store
