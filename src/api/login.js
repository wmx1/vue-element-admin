import fetch from '@/utils/fetch'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return fetch({
    url: '/login',
    method: 'post',
    data
  })
}
