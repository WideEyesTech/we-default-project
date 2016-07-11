import test from 'ava'
import React from 'react'
import Login from '../index'
import { shallow } from 'enzyme'
import LoginForm from '../LoginForm'

const wrapper = shallow(<Login login={() => {}} />)

test('is rendered', t => {
  t.is(wrapper.find(LoginForm).length, 1)
})
