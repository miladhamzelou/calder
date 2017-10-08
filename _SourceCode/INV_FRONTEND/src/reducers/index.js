import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import auth from './common/auth'
import options from './common/options'
import showmsg from './common/showmsg'
import globalVal from './common/globalVal'
import departments from './setting/department'
import members from './setting/member'
import duties from './setting/duties'
import menuList from './setting/menus'
import { roles,roleMenu } from './setting/role'

const rootReducer = combineReducers({
  globalVal,
  departments,
  menuList,
  options,
  auth,
  roles,
  roleMenu,
  showmsg,
  routing: routerReducer,
  form: formReducer,
  members,
  duties
})

export default rootReducer
