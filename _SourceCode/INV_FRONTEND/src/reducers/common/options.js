import { CHANGE_OPTIONS } from '../../actions/common/types'
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'

const initialState = fromJS({'currentPage': 1, 'pageSize':5,'dispatcher':1001,'userType':8})

export default createReducer(initialState, {
  [CHANGE_OPTIONS]: (state, action) => state.merge(action.option)
})