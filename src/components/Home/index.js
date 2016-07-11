import React, { PropTypes } from 'react'

const Home = (props, { user }) =>
  <h1>Hello, {user.company}</h1>

Home.contextTypes = {
  user: PropTypes.object.isRequired
}

module.exports = Home
