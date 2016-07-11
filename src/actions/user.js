import api from 'we-vision-library'
import { createAction } from 'redux-actions'

export const logout = createAction('USER_LOGGED_OUT')

export const login = data => dispatch => new Promise((resolve, reject) => {
  dispatch(createAction('USER_LOGGED_IN_REQUESTED')())
  api.login(data)
    .then(token => resolve(token))
    .catch(err => {
      dispatch(createAction('USER_LOGGED_IN_FAILED')(err))
      reject(err)
    })
})

export const getUser = token => dispatch => new Promise((resolve, reject) => {
  api.getUser({}, { Authorization: `Bearer ${token}` })
    .then(user => {
      dispatch(createAction('USER_LOGGED_IN_COMPLETED')({...user, token: token}))
      resolve(user)
    })
    .catch(err => {
      dispatch(createAction('USER_LOGGED_IN_FAILED')(err))
      reject(err)
    })
})
