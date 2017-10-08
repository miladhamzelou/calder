import * as types from './types'
import api from '../../api'

//改变样式风格.
export const changeStyleMode = () => ({ type: types.CHANGE_STYLE_MODE })
//显示提示消息
export const showMsg = (content,type='error')=>{
  return {
    type: types.SHOW_MSG,
    message: { content:content,type:type }
  }
}
export const hideMsg = ()=>({type: types.HIDE_MSG})



//获取按钮
export const setChildMenus = (childMenus) =>{
  return (dispatch,getState) =>{
    return dispatch(successGetChildmenus(childMenus))
  }
}

function successGetChildmenus(childMenus) {
  return {
    type: types.GET_CHILD_MENUS_SUCCESS,
    childMenus: childMenus
  }
}
//首页图片success
export const getIndexImage = () => {
  return {
    type: types.GET_INDEX_IMG,
    promise: api.getIndexImage()
  }
}

export function uploadFile(file) {
  return (dispatch, getState) => {
    const formData = new FormData()
    formData.append('file', file)
  }
}

