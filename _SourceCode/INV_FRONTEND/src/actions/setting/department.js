import * as types from '../common/types'
import api from '../../api'
import { showMsg } from '../common/other'

//获取部门列表
export const getDepartmentList = (options) =>{
  return (dispatch) => {
    return api.commonRequest(options)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        
        dispatch(getDepartmentData(json.obj))
      }).catch(err=>{
        //异常
        return dispatch(showMsg(err.message))
      })
  }
}

//获取部门列表-回调
function getDepartmentData(menu) {
  return {
    type: types.DEPARTMENT_LIST_SUCCESS,
    data: menu
  }
}


//添加部门
export function addDepartment(options) {
  return (dispatch) =>{
    return api.commonRequest(options)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('新增部门成功','success'))
      }).catch(err=>{
        //异常
        return dispatch(showMsg(err.message))
      })
  }
}

//修改部门
export function editDepartment(options) {
  return (dispatch) =>{
    return api.commonRequest(options)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('修改部门成功','success'))
      }).catch(err=>{
        //异常
        return dispatch(showMsg(err.message))
      })
  }
}

//删除部门
export function deleteDepartment(options) {
  return (dispatch) =>{
    return api.commonRequest(options)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(showMsg('删除部门成功','success'))
      }).catch(err=>{
        //异常
        return dispatch(showMsg(err.message))
      })
  }
}
