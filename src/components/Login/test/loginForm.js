import test from 'ava'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import LoginForm from '../LoginForm'

const login = sinon.spy()
const wrapper = shallow(<LoginForm login={login} />)

test('is rendered', t => {
  t.is(wrapper.find('form').length, 1)
})

test('login called on submit', t => {
  wrapper.find('form').simulate('submit')
  t.truthy(login.called)
})
