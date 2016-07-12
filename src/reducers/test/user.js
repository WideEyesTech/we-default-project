import test from 'ava'
import { user as reducer } from '../user'

test('should return the initial state', t => {
  t.deepEqual(reducer(undefined, {}), {})
})

test('should handle USER_LOGGED_IN_REQUESTED', t => {
  t.deepEqual(reducer([], {type: 'USER_LOGGED_IN_REQUESTED'}), {authenticating: true})
})

test('should handle USER_LOGGED_IN_COMPLETED', t => {
  t.deepEqual(reducer([], {
    type: 'USER_LOGGED_IN_COMPLETED',
    payload: {
      name: 'example',
      token: 'foo'
    }
  }), {
    name: 'example',
    token: 'foo'
  })
})

test('should handle USER_LOGGED_IN_FAILED', t => {
  t.deepEqual(reducer([], {type: 'USER_LOGGED_IN_FAILED', payload: 'unauthorized'}), {})
})

test('should handle USER_LOGGED_OUT', t => {
  t.deepEqual(reducer([], {type: 'USER_LOGGED_OUT'}), {})
})
