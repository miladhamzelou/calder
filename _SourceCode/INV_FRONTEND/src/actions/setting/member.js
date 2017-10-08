/**
 * Created by fdd on 2016/5/21.
 */
import * as types from '../common/types'
import api from '../../api'
import { showMsg } from '../common/other'
//获取用户列表
export const getMemberList = (options) =>{
  return (dispatch) => {
    return dispatch({
      type: types.MEMBER_LIST,
      promise: api.commonRequest(options)
    })
  }
}
//添加用户
export function addMember(member) {
  return (dispatch,getState) =>{
    return api.commonRequest(member)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('添加用户成功！','success'))
      }).catch(err=>{
        //登录异常
        return dispatch(showMsg(err.message))
      })
  }
}

//编辑用户
export function editMember(member) {
  return (dispatch,getState) =>{
    return api.commonRequest(member)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('编辑用户成功！','success'))
      }).catch(err=>{
        //登录异常
        return dispatch(showMsg(err.message))
      })
  }
}
//删除用户（更改用户状态）
export function deleteMember(member) {
  return (dispatch,getState) =>{
    return api.commonRequest(member)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('操作成功','success'))
      }).catch(err=>{
        //登录异常
        return dispatch(showMsg(err.message))
      })
  }
}
//根据条件搜索用户列表
export const searchMemberList = (options) =>{
  return (dispatch) => {
    return dispatch({
      type: types.MEMBER_LIST,
      promise: api.commonRequest(options)
    })
  }
}


