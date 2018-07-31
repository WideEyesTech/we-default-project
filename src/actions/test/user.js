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

test('creates USER_LOGGED_IN_REQUESTED when login has completed', async t => {
  const token = 'foo'
  const store = mockStore({user: {}})

  nock('http://api.wide-eyes.it')
    .post('/login', {})
    .reply(200, {
      login: 'ok',
      access_token: token
    },
    { 'Access-Control-Allow-Origin': '*','Content-type': 'application/json'})

  const expectedActions = [
    { type: 'USER_LOGGED_IN_REQUESTED' }
  ]

  return store.dispatch(userActions.login({}))
    .then(() => t.deepEqual(store.getActions(), expectedActions))
    .catch((e) => {
            console.log(e.stack);t.fail(e.stack)
        })
})

test('creates USER_LOGGED_IN_COMPLETED when getUser has completed', async t => {
  const token = 'foo'
  const store = mockStore({user: {}})
  var options_scope = nock('http://api.wide-eyes.it').log(console.log)
    .intercept('/users/show', 'OPTIONS').times(1)
    .reply(204,'',
               { 'Access-Control-Allow-Origin': '*'})

  var get_scope = nock('http://api.wide-eyes.it').log(console.log)
    .get('/users/show').times(2)
    .reply(200,
    { 'name': 'John Smith' },
    { 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-type, Authorization',
    'Content-type': 'application/json'})

  const expectedActions = [
    { type: 'USER_LOGGED_IN_COMPLETED', payload: {name: 'John Smith', token} }
  ]

  return store.dispatch(userActions.getUser(token))
    .then(() => t.deepEqual(store.getActions(), expectedActions))
    .catch((e) => {
        options_scope.isDone();
        get_scope.isDone();
        console.log(e.stack);
        t.fail(e.message)})
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
