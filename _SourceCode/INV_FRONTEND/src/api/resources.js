require('es6-promise').polyfill()
import axios from 'axios'
import { API_ROOT } from '../config'
import { signOut, getCookie } from '../utils/authService'
import cookie from 'react-cookie'

axios.defaults.baseURL = API_ROOT
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.headers = config.headers || {}
  const token = getCookie('token')
  if (token) {
    config.headers.Authorization = 'Basic ' + token
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  if (response.data.code === '11' || response.data.code === '12') {
    signOut()
    cookie.remove('token', '')
    cookie.remove('user', '')
    window.location.pathname = '/login'
  }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})


export const ApiResource = (method, data, api) => {
  data._platform = 'pc'
  return axios({
    method: method,
    url: api,
    params:data
  })
}