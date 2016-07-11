import LoginForm from './LoginForm'
import React, { PropTypes } from 'react'

const Login = ({ authenticating, login }) => {
  return (
    <section className='container' style={{height: '100%'}}>
      <section className='row' style={{height: '100%'}}>
        <section className='column column-33 column-offset-33 col-center'>
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
