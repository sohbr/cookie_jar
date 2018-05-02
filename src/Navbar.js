import React, { Component } from 'react'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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
            <Link activeClass="active" to="home" spy="true" smooth="true" duration="{600}">Home</Link>
          </li>
          <li>
            <Link activeClass="active" to="gallery" spy="true" smooth="true" duration="{600}">Gallery</Link>
          </li>
          <li>
            <Link activeClass="active" to="cookies" spy="true" smooth="true" duration="{600}">Cookies</Link>
          </li>
          <li>
            <Link activeClass="active" to="contact" spy="true" smooth="true" duration="{600}">Contact</Link>
          </li>
        </ul>
      </navbar>
    )
  }
}

export default Navbar
