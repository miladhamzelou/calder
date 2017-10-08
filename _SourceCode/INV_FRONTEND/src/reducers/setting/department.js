import {
  DEPARTMENT_LIST_SUCCESS 
} from '../../actions/common/types'
import { createReducer } from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
  isFetching: false,
  items: [{
    name: '招商系统',
    isChildren: false
  }]
})

function compileData(list) {
  list.map((depart, i)=> {
    depart.name = depart.departName
    if(depart.isChildren){
      depart.childrenList=compileData(depart.childrenList)
    }
  })
  return list
}

export default createReducer(initialState,{
  [DEPARTMENT_LIST_SUCCESS]: (state,action)=>{
    const rootDepartment = compileData(action.data)
    return state.merge({
      isFetching:false,
      items: fromJS(rootDepartment)
    })
  }
})