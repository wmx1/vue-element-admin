import axios from 'axios'
// import { store } from 'vuex'

console.log('process.env', process.env)
// 创建axios实例
const service = axios.create({
//   baseURL: process.env.BASE_URL, // api的baseurl
  timeout: 5000
})

// request拦截器
service.interceptors.request.use(config => {
//   if (store.getters.token) {

  //   }
  return config
})

export default service
