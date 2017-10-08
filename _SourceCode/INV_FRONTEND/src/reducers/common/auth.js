import {
  LOGIN_SUCCESS,
  LOGOUT_USER,
  USERINFO_FAILURE,
  UPDATE_USER_SUCCESS
} from '../../actions/common/types'
import {getCookie} from '../../utils/authService'
import { createReducer } from 'redux-immutablejs'
import {fromJS} from 'immutable'

const initialState = fromJS({
  token: 'aaa',
  user: getCookie('user') || null
})

export default createReducer(initialState,{
  [LOGIN_SUCCESS]: (state,action)=>{
    return state.merge({
      token: action.token,
      user: action.user
    })
  },
  [USERINFO_FAILURE]: (state,action)=> state.set('user',null),
  [LOGOUT_USER]: (state,action)=> {
    return state.merge({
      token: null,
      user: null
    })
  },
  [UPDATE_USER_SUCCESS]: (state,action)=> {
    return state.merge({
      user: action.user
    })
  }
})