import React, { PropTypes } from 'react'

const About = (props, {user}) =>
  <h1>About {user.company}</h1>

About.contextTypes = {
  user: PropTypes.object.isRequired
}

module.exports = About
