import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import { Input, Form, FormItem, Button } from 'element-ui'
import '@/mock' // mock模拟数据
import '@/assets/fonts/iconfont.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/common.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
