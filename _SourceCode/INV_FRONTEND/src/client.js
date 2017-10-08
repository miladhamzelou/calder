import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import {Provider} from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import configureStore from './store/configureStore'

import 'semantic-ui/dist/semantic.css'
import 'cropperjs/dist/cropper.css'
import 'rc-calendar/assets/index.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './assets/styles/index.css'
import './assets/styles/table.css'
import './assets/styles/home.css'
import './assets/styles/common/head.css'
import './assets/styles/common/alert.css'
import './assets/styles/page.css'
import 'rc-tree-select/assets/index.css'
import './assets/styles/file.css'
import './assets/styles/setting/role.css'
import 'rc-select/assets/index.css'
import './assets/styles/resourceManage.css'
import createDevTools from './createDevtools'
var $ = require('jquery')
global.$ = global.jQuery = $
import 'semantic-ui/dist/semantic.js'
var md5 = require('blueimp-md5')
global.md5 = md5


const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState,browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

createDevTools(store)

render(
  <Provider store={store}>
    <Router history={history}>
      {routes()}
    </Router>
  </Provider>,
  document.getElementById('root')
)