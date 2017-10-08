import {
  MENU_LIST_SUCCESS 
} from '../../actions/common/types'
import { createReducer } from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
  isFetching: false,
  menu: [{
    menuName: '招商系统',
    isChildren: false
  }]
})

export default createReducer(initialState,{
  [MENU_LIST_SUCCESS]: (state,action)=>{
    const rootMenu = action.data
    return state.merge({
      isFetching:false,
      menu: fromJS(rootMenu)
    })
  }
})