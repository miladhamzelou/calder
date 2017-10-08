/**
 * Created by fdd on 2016/5/21.
 */
import * as types from '../common/types'
import api from '../../api'
import { showMsg } from '../common/other'
//获取职位列表
export function getDutiesList(options) {
  return (dispatch,getState) =>{
    return api.commonRequest(options)
      .then(response => ({json: response.data}))
      .then(({json}) => {
        if(json.code!=0){
          return dispatch(showMsg(json.msg))
        }
        dispatch(getData(json.obj))
      }).catch(err=>{
        //登录异常
        return dispatch(showMsg(err.message))
      })
  }
}
//获取部门列表-回调
function getData(menu) {
  return {
    type: types.DUTIES_LIST_SUCCESS,
    data: menu
  }
}