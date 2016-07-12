import test from 'ava'
import nock from 'nock'
import thunk from 'redux-thunk'
import * as userActions from '../user'
import configureMockStore from 'redux-mock-store'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

test.afterEach(() => nock.cleanAll())

test('create USER_LOGGED_OUT when logout has completed', t => {
  const store = mockStore({user: {}})
  store.dispatch(userActions.logout())
  t.deepEqual(store.getActions(), [{type: 'USER_LOGGED_OUT'}])
})

test('creates USER_LOGGED_IN_REQUESTED when login has completed', t => {
  const token = 'foo'
  const store = mockStore({user: {}})

  nock('http://api.wide-eyes.it')
    .post('/login', {})
    .reply(200, {
      login: 'ok',
      access_token: token
    })

  const expectedActions = [
    { type: 'USER_LOGGED_IN_REQUESTED' }
  ]

  return store.dispatch(userActions.login({}))
    .then(() => t.deepEqual(store.getActions(), expectedActions))
    .catch((e) => t.fail(e.message))
})

test('creates USER_LOGGED_IN_COMPLETED when getUser has completed', t => {
  const token = 'foo'
  const store = mockStore({user: {}})

  nock('http://api.wide-eyes.it')
    .get('/users/show')
    .reply(200, { 'name': 'John Smith' })

  const expectedActions = [
    { type: 'USER_LOGGED_IN_COMPLETED', payload: {name: 'John Smith', token} }
  ]

  return store.dispatch(userActions.getUser(token))
    .then(() => t.deepEqual(store.getActions(), expectedActions))
    .catch((e) => t.fail(e.message))
})

test('creates USER_LOGGED_IN_FAILED when getUser has failed', t => {
  const token = 'foo'
  const store = mockStore({user: {}})

  nock('http://api.wide-eyes.it')
    .get('/users/show')
    .reply(500, {error: 'Unauthorized'})

  const expectedActions = [
    { type: 'USER_LOGGED_IN_FAILED' }
  ]

  return store.dispatch(userActions.getUser(token))
    .then(() => t.fail())
    .catch(() => {
      t.is(store.getActions().length, 1)
      t.is(store.getActions()[0].type, expectedActions[0].type)
    })
})
