import Mock from 'mockjs'
import loginAPI from './login'

Mock.setup({
  timeout: '300-600'
})

// 登录相关
Mock.mock('/login', 'post', loginAPI.loginByUserName)

export default Mock
