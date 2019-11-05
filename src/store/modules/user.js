import { loginByUsername } from '@/api/login'
// import axios from 'axios'
import { setToken } from '@/utils/auth'
const state = {
  token: '',
  name: '',
  roles: []
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_NAME (state, name) {
    state.name = name
  },
  SET_ROLES (state, roles) {
    state.roles = roles
  }
}

const actions = {
  LoginByUserName ({ commit }, userInfo) {
    const username = userInfo.username.trim()
    console.log('username', username)
    return new Promise((resolve, reject) => {
      loginByUsername(username, userInfo.password).then(response => {
        console.log('response', response)
        const data = response.data
        setToken(data.token)
        commit('SET_TOKEN', data.token)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  GetUserInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {

    })
  }
}
export default {
  namespace: true,
  state,
  mutations,
  actions
}
