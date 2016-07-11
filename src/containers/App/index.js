import App from 'components/App'
import { connect } from 'react-redux'
import React, { PropTypes, Component } from 'react'
import * as userActions from 'actions/user'

const mapStateToProps = state => ({ user: state.user })
const mapDispatchToProps = dispatch => ({ logout: () => dispatch(userActions.logout()) })

class AppContainer extends Component {
  static childContextTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  getChildContext () {
    return {
      ...this.context,
      user: this.props.user,
      logout: this.props.logout
    }
  }

  render () {
    return <App children={this.props.children} />
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
