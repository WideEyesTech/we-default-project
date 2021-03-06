import {Link} from 'react-router'
import React, { PropTypes } from 'react'

const App = ({children}, {logout}) => {
  return (
    <section className='container'>
      <section className='row'>
        <header className='col-1-1'>
          <ul>
            <li>
              <Link activeClassName='active' to='/'>Home</Link>
            </li>
            <li>
              <Link activeClassName='active' to='/about'>About</Link>
            </li>
            <li>
              <a href='#' onClick={logout}>Logout</a>
            </li>
          </ul>
        </header>
      </section>
      <section className='row'>
        <section className='col-1-1'>
          {children}
        </section>
      </section>
    </section>
  )
}

App.propTypes = {
  children: PropTypes.element
}

App.contextTypes = {
  logout: PropTypes.func.isRequired
}

module.exports = App
