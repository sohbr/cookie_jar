import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor'
import './Navbar.scss'

function easeInCubic(x, t, b, c, d) {
  return c*(t/=d)*t*t + b;
}

class Navbar extends Component {

  render() {
    return (
      <navbar className="navbar">
        <ul>
          <li>
            <Scrollchor className="scroll" to="#home" animate={{ offset: 0, duration: 600, easing: easeInCubic }}>Home</Scrollchor>
          </li>
          <li>
            <Scrollchor className="scroll" to="#gallery" animate={{ offset: 0, duration: 600, easing: easeInCubic }}>Gallery</Scrollchor>
          </li>
          <li>
            <Scrollchor className="scroll" to="#cookies" animate={{ offset: 0, duration: 600, easing: easeInCubic }}>Cookies</Scrollchor>
          </li>
          <li>
            <Scrollchor className="scroll" to="#contact" animate={{ offset: 0, duration: 600, easing: easeInCubic }}>Contact</Scrollchor>
          </li>
        </ul>
      </navbar>
    )
  }
}

export default Navbar
