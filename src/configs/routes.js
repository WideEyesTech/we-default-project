import App from 'components/App'

export default {
  childRoutes: [{
    path: '/',
    component: App,
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
          cb(null, require('components/About'))
        })
      }
    }]
  }]
}
