import test from 'ava'
import React from 'react'
import App from '../index'
import { shallow } from 'enzyme'
import { Link } from 'react-router'

const app = shallow(<App logout={() => {}} />)

test('renders link childs', t => {
  t.is(app.find(Link).length, 2)
})
