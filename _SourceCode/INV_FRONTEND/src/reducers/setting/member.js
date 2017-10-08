import {
  MEMBER_LIST_REQUEST,
  MEMBER_LIST_SUCCESS,
  MEMBER_LIST_FAILURE
} from '../../actions/common/types'
import { createReducer } from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
  isFetching: false,
  items:null
})

export default createReducer(initialState,{
  [MEMBER_LIST_REQUEST]: (state,action)=>state.set('isFetching',true),
  [MEMBER_LIST_SUCCESS]: (state,action)=>{
    return state.merge({
      isFetching:false,
      items: fromJS(action.json.obj)
    })
  },
  [MEMBER_LIST_FAILURE]: (state,action)=>state.set('isFetching',false)
})
