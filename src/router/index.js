import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login'
import Home from '../views/home'
import store from '@/store'
Vue.use(Router)

// 所有权限通用路由表
// 如首页和登录页和一些不用权限的公用页面
const router = new Router({
  routes: [
    // 初始化重定向到login
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log('to', to)
//   if (to.path === '/login') {
//     next({ path: '/' })
//   } else {
//     // next()
//     console.log(store.state.user.token)
//   }
// })
export default router
