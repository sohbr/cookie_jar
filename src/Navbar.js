import React, { Component } from 'react'
import './Navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <navbar className="navbar">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Cookies</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </navbar>
    )
  }
}

export default Navbar
