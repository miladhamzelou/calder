import * as types from './types'
import { push } from 'react-router-redux'
import {signOut } from '../../utils/authService'
import cookie from 'react-cookie'
import { showMsg } from './other'
import api from '../../api'

//登录
function loginSuccess(token, user) {
  return {
    type: types.LOGIN_SUCCESS,
    token: token,
    user: user
  }
}

export function localLogin(userInfo) {
  return (dispatch,getState) =>{
    return api.localLogin(userInfo)
    .then(response => ({json: response.data}))
    .then(({json}) => {
      if(json.code!=0){
        return dispatch(showMsg(json.msg || '登录失败'))
      }
      //得到token,并存储
      cookie.save('token',json.obj.token)
      cookie.save('user',json.obj.userInfo)
      //获取用户信息
      dispatch(loginSuccess(json.obj.token, json.obj.userInfo))
      dispatch(showMsg('登录成功,欢迎光临!','success'))
      dispatch({type: types.GET_MENUS_SUCCESS, menus:json.menus})

      dispatch(push('/'))
      
    }).catch(err=>{
      //登录异常
      return dispatch(showMsg(err.message || '登录失败'))
    })
  }
}

//退出登录
export function logout() {
  return dispatch => {
    signOut()
    cookie.remove('token', '')
    cookie.remove('user', '')
    dispatch({type: types.LOGOUT_USER})
    setTimeout(function(){
      dispatch(push('/login'))
    },0)
  }
}

//修改用户资料
function successUpdateUser(user) {
  return {
    type: types.UPDATE_USER_SUCCESS,
    user:user
  }
}

export function updateUser(userInfo) {
  return (dispatch,getState)=>{
    return api.mdUser(userInfo)
    .then(response => ({json: response.data, status: response.statusText}))
    .then(({json,status}) => {
      if(status !== 'OK'){
        return dispatch(showMsg(json.data && json.data.error_msg || '更新用户资料失败'))
      }
      dispatch(showMsg('更新用户资料成功','success'))
      return dispatch(successUpdateUser(json.data))

    }).catch(err=>{
      return dispatch(showMsg(err.data.error_msg || '更新用户资料失败'))
    })
  }
}
//编辑用户头像
export function eidtHeadProfile(userInfo) {
  return (dispatch,getState)=>{
    return api.commonRequest(userInfo)
    .then(response => ({json: response.data}))
    .then(({json}) => {
      dispatch(showMsg('编辑用户头像成功','success'))
      return dispatch(successUpdateUser(json.data))
    }).catch(err=>{
      return dispatch(showMsg(err.data.error_msg || '更新用户资料失败'))
    })
  }
}
