import AppContainer from '../containers/App'
import { isUserAuthenticated } from 'configs/auth'

export default {
  childRoutes: [{
    path: '/',
    component: isUserAuthenticated(AppContainer),
    indexRoute: {
      getComponent (partialNextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('components/Home'))
        })
      }
    },
    childRoutes: [{
      path: '/about',
      getComponent (partialNextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('containers/About'))
        })
      }
    }]
  }, {
    path: '/login',
    getComponent (partialNextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('containers/Login'))
      })
    }
  }]
}
