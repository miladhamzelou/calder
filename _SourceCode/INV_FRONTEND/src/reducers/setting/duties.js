import {
  DUTIES_LIST_SUCCESS 
} from '../../actions/common/types'
import { createReducer } from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
  items:null
})

function getDutyLists(list){
  list.map((duty, i)=> 
    duty.name = duty.value
  )
  return list
}

export default createReducer(initialState,{
  [DUTIES_LIST_SUCCESS]: (state,action)=>{
    const dutys = getDutyLists(action.data)
    return state.merge({
      items: fromJS(dutys)
    })
  }
})