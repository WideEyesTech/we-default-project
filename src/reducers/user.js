import { handleActions } from 'redux-actions'
import { setItem, deleteItem } from '../utils/localStorage'

export const user = handleActions({
  USER_LOGGED_OUT: (state, action) => {
    deleteItem('wideeyes-token')
    return {}
  },

  USER_LOGGED_IN_FAILED: (state, action) => {
    deleteItem('wideeyes-token')
    return {}
  },

  USER_LOGGED_IN_REQUESTED: (state, action) => ({
    authenticating: true
  }),

  USER_LOGGED_IN_COMPLETED: (state, action) => {
    setItem('wideeyes-token', action.payload.token)
    return action.payload
  }
}, {})
