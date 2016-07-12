import 'whatwg-fetch'

import { createAction } from 'redux-actions'
import {host, headers} from '../shared/constants'
import {checkStatus, parseJSON} from '../utils/api'

export const logout = createAction('USER_LOGGED_OUT')

export const login = data => dispatch => new Promise((resolve, reject) => {
  dispatch(createAction('USER_LOGGED_IN_REQUESTED')())
  return window.fetch(`${host}/login`, {
    headers,
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(res => resolve(res.access_token))
    .catch(err => {
      dispatch(createAction('USER_LOGGED_IN_FAILED')(err))
      reject(err)
    })
})

export const getUser = token => dispatch => new Promise((resolve, reject) => {
  return window.fetch(`${host}/users/show`, {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(res => {
      const payload = {...res, token}
      dispatch(createAction('USER_LOGGED_IN_COMPLETED')(payload))
      resolve(payload)
    })
    .catch(err => {
      dispatch(createAction('USER_LOGGED_IN_FAILED')(err))
      reject(err)
    })
})
