import LoginForm from './LoginForm'
import React, { PropTypes } from 'react'

const Login = ({ authenticating, login }) => {
  return (
    <section className='container' style={{height: '100%'}}>
      <section className='row center' style={{height: '100%'}}>
        <section className='col-xs-1-1 col-md-1-3 center'>
          <LoginForm authenticating={authenticating} login={login} />
        </section>
      </section>
    </section>
  )
}

Login.propTypes = {
  authenticating: PropTypes.bool,
  login: PropTypes.func.isRequired
}

module.exports = Login
