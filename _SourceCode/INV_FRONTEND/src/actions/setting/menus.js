import * as types from '../common/types'
import api from '../../api'
import { showMsg } from '../common/other'

//获取菜单列表
export const getMenusList = (options) =>{
  return (dispatch) => {
    return api.commonRequest(options)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        
        dispatch(getMenuData(json.obj))
      }).catch(err=>{
        //异常
        return dispatch(showMsg(err.message))
      })
  }
}

//获取菜单列表-回调
function getMenuData(menu) {
  return {
    type: types.MENU_LIST_SUCCESS,
    data: menu
  }
}

//添加菜单
export function addMenu(options) {
  return (dispatch) =>{
    return api.commonRequest(options)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('新增菜单成功','success'))
      }).catch(err=>{
        //异常
        return dispatch(showMsg(err.message))
      })
  }
}


//修改菜单
export function editMenu(options) {
  return (dispatch, getState) =>{
    return api.commonRequest(options)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('修改菜单成功','success'))
      }).catch(err=>{
        //异常
        return dispatch(showMsg(err.message))
      })
  }
}

//删除菜单
export function deleteMenu(options) {
  return (dispatch, getState) =>{
    return api.commonRequest(options)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('删除菜单成功','success'))
      }).catch(err=>{
        //异常
        return dispatch(showMsg(err.message))
      })
  }
}
