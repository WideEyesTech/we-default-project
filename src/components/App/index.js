import {Link} from 'react-router'
import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <section>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </header>
        <section>
          {this.props.children}
        </section>
      </section>
    )
  }
}
