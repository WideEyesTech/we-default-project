import Login from 'components/Login'
import { connect } from 'react-redux'
import React, { PropTypes, Component } from 'react'
import * as userActions from 'actions/user'

const mapStateToProps = state => ({
  authenticating: state.user.authenticating
})

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(userActions.login(data)),
  getUser: token => dispatch(userActions.getUser(token))
})

class LoginContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor () {
    super()
    this.login = this.login.bind(this)
  }

  login (formData) {
    this.props.login(formData)
      .then(token => this.props.getUser(token))
      .then(() => this.context.router.push('/'))
      .catch(err => console.error(err))
  }

  render () {
    return <Login {...this.props} login={this.login} />
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
