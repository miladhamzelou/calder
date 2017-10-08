import {
  GET_ROLE_LIST_SUCCESS,
  GET_ROLE_MENU_LIST_SUCCESS
} from '../../actions/common/types'
import { createReducer } from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialStateRoleList = fromJS({
  items:null
})

const initialStateRoleMenuList = fromJS({
  roleMenuList:{
    menuName:'招商系统',
    isChildren:false
  }
})

function getRoleLists(list){
  list.map((role, i)=> 
    role.name = role.roleName
  )
  return list
}

//获取角色列表
export const roles = createReducer(initialStateRoleList,{
  [GET_ROLE_LIST_SUCCESS]: (state,action)=>{
    let obj = action.roleListResponseData.obj
    obj.roleList = getRoleLists(obj.roleList)
    return state.merge({
      items: obj
    })
  }
})

//获取角色列表
export const roleMenu = createReducer(initialStateRoleMenuList,{
  [GET_ROLE_MENU_LIST_SUCCESS]: (state,action)=>{
    return state.merge({
      roleMenuList: action.menuListResponseData
    })
  }
})
