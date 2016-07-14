import cn from 'classnames'
import { Button } from 'wideeyes-ui'
import React, { PropTypes } from 'react'

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (!/^[A-Z0-9._%+-]{6,}$/i.test(values.password)) {
    errors.password = 'Invalid password: It must contain alphanumeric characters and be, at least, 6 characters long.'
  }

  return errors
}

class LoginForm extends React.Component {
  static propTypes = {
    authenticating: PropTypes.bool,
    login: PropTypes.func.isRequired
  }

  state = {
    email: '',
    errors: {},
    password: ''
  }

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleEmailChange (e) {
    const val = e.target.value
    this.setState({
      ...this.state,
      email: val,
      errors: validate({
        ...this.state,
        email: val
      })
    })
  }

  handlePasswordChange (e) {
    const val = e.target.value
    this.setState({
      ...this.state,
      password: val,
      errors: validate({
        ...this.state,
        password: val
      })
    })
  }

  handleSubmit (e) {
    if (e) e.preventDefault()
    this.props.login({
      password: this.state.password,
      email: this.state.email
    })
  }

  render () {
    const {authenticating} = this.props
    const {email, password, errors} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label style={{color: errors.email ? 'red' : 'inherit'}}>Email</label>
          <input type='email' placeholder='Email' className={cn({invalid: errors.email})} onChange={this.handleEmailChange} value={email} />
          {errors.email ? <small style={{color: 'red'}}>Invalid email address</small> : null}
        </div>
        <div className='form-group'>
          <label style={{color: errors.password ? 'red' : 'inherit'}}>Password</label>
          <input type='password' placeholder='Password' className={cn({invalid: errors.password})} onChange={this.handlePasswordChange} value={password} />
          {errors.password ? <small style={{color: 'red'}}>Invalid password: it must be, at least, 6 alphanumeric characters long</small> : null}
        </div>
        <Button mode='primary' type='submit' disabled={authenticating}>
          Submit
        </Button>
      </form>
    )
  }
}

module.exports = LoginForm
