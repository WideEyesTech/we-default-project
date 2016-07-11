import About from 'components/About'
import { connect } from 'react-redux'
import React, { Component } from 'react'

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

class AboutContainer extends Component {
  render () {
    return <About {...this.props} />
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutContainer)
