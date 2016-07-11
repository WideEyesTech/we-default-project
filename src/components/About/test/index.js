import test from 'ava'
import React from 'react'
import About from '../index'
import { shallow } from 'enzyme'

const wrapper = shallow(<About />, {context: {user: {company: 'example'}}})

test('is rendered', t => {
  t.is(wrapper.find('h1').length, 1)
})
