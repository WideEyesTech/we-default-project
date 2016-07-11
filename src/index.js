import 'css/main'

import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'configs/routes'
import { getUser } from 'actions/user'
import { Provider } from 'react-redux'
import { getItem } from 'utils/localStorage'
import configureStore from 'configs/configureStore'
import { Router, browserHistory } from 'react-router'

const store = configureStore()

const main = () => {
  ReactDOM.render((
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  ), document.getElementById('root'))
}

// stored accessToken may have expired...
const token = getItem('wideeyes-token')
if (token) {
  store.dispatch(getUser(token))
    .then(() => main())
    .catch(() => main())
} else {
  main()
}
