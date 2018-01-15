import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor'
import './Navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <navbar className="navbar">
        <ul>
          <li>
            <Scrollchor to="#home">Home</Scrollchor>
          </li>
          <li>
            <Scrollchor to="#gallery">Gallery</Scrollchor>
          </li>
          <li>
            <Scrollchor to="#cookies">Cookies</Scrollchor>
          </li>
          <li>
            <Scrollchor to="#contact">Contact</Scrollchor>
          </li>
        </ul>
      </navbar>
    )
  }
}

export default Navbar
