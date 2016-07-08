import 'css/main'

import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'configs/routes'
import {Router, browserHistory} from 'react-router'

ReactDOM.render((
  <Router history={browserHistory} routes={routes} />
), document.getElementById('root'))
