import React, { Component } from 'react'
import './Navbar.scss'


class Navbar extends Component {

  render() {
    return (
      <navbar className="navbar">
        <ul>
          <li>
            <div className="scroll" to="#home" >Home</div>
          </li>
          <li>
            <div className="scroll" to="#gallery" >Gallery</div>
          </li>
          <li>
            <div className="scroll" to="#cookies" >Cookies</div>
          </li>
          <li>
            <div className="scroll" to="#contact" >Contact</div>
          </li>
        </ul>
      </navbar>
    )
  }
}

export default Navbar
