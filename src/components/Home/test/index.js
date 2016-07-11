import test from 'ava'
import React from 'react'
import Home from '../index'
import { shallow } from 'enzyme'

const wrapper = shallow(<Home />, {context: {user: {company: 'example'}}})

test('is rendered', t => {
  t.is(wrapper.find('h1').length, 1)
})
