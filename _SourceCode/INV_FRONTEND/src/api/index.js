import {ApiResource} from './resources'

export default {
  localLogin: function (data) {
    return ApiResource('post', data,'login.do')
  },
  logout: function (data) {
    return ApiResource('post', data,'logout.do')
  },
  commonRequest: function (data) {
    return ApiResource('post', data,'dispatcher.do')
  }
}