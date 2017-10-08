/**
 * Created by ZJL on 2016/5/21.
 */
import * as types from '../common/types'
import api from '../../api'
import { showMsg } from '../common/other'

//获取角色列表成功
function getRoleListSuccess(json) {
  return {
    type: types.GET_ROLE_LIST_SUCCESS,
    roleListResponseData: json
  }
}

//获取菜单树成功
function getMenuListSuccess(json) {
  return {
    type: types.GET_ROLE_MENU_LIST_SUCCESS,
    menuListResponseData: json
  }
}

export function getRoleList(param) {
  return (dispatch) =>{
    return api.commonRequest(param)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(getRoleListSuccess(json))
        dispatch({type: types.GET_MENUS_SUCCESS, menus:json.menus})
      }).catch(err=>{
        //登录异常
        return dispatch(showMsg(err.message))
      })
  }
}

//增加角色
export function addRole(param) {
  return (dispatch,getState) =>{
    return api.commonRequest(param)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('操作成功','success'))
        dispatch({type: types.GET_MENUS_SUCCESS, menus:json.menus})
      }).catch(err=>{
        //登录异常
        return dispatch(showMsg(err.message))
      })
  }
}

//删除角色
export function deleteRole(param) {
  return (dispatch, getState) =>{
    return api.commonRequest(param)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('删除成功','success'))
        dispatch({type: types.GET_MENUS_SUCCESS, menus:json.menus})
      }).catch(err=>{
        //登录异常
        return dispatch(showMsg(err.message))
      })
  }
}

export function modifyRole(param) {
  return (dispatch,getState) =>{
    return api.commonRequest(param)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('操作成功','success'))
        dispatch({type: types.GET_MENUS_SUCCESS, menus:json.menus})
      }).catch(err=>{
        //登录异常
        return dispatch(showMsg(err.message))
      })
  }
}

//获取菜单
export function getMenuList(param) {
  return (dispatch) =>{
    return api.commonRequest(param)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(getMenuListSuccess(json.obj[0]))
        dispatch({type: types.GET_MENUS_SUCCESS, menus:json.menus})
      }).catch(err=>{
        //登录异常
        return dispatch(showMsg(err.message))
      })
  }
}