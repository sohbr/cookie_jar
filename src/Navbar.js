import React, { Component } from 'react'
import './Navbar.scss'


class Navbar extends Component {

  render() {
    return (
      <navbar className="navbar">
        <ul>
          <li>
            <div className="scroll" to="#home" animate={{ offset: 0, duration: 600, easing: easeInCubic }}>Home</div>
          </li>
          <li>
            <div className="scroll" to="#gallery" animate={{ offset: 0, duration: 600, easing: easeInCubic }}>Gallery</div>
          </li>
          <li>
            <div className="scroll" to="#cookies" animate={{ offset: 0, duration: 600, easing: easeInCubic }}>Cookies</div>
          </li>
          <li>
            <div className="scroll" to="#contact" animate={{ offset: 0, duration: 600, easing: easeInCubic }}>Contact</div>
          </li>
        </ul>
      </navbar>
    )
  }
}

export default Navbar
