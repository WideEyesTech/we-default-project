/* global __DEV__ */

import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from 'reducers'
import thunk from 'redux-thunk'

export default configureStore

function configureStore (initialState) {
  let createStoreWithMiddleware
  if (__DEV__) {
    createStoreWithMiddleware = applyMiddleware(thunk, require('redux-logger')())(createStore)
  } else {
    createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
  }

  const reducer = combineReducers(reducers)
  const store = createStoreWithMiddleware(reducer, initialState)

  return store
}
