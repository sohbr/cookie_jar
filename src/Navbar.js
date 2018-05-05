import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './Navbar.scss'


class Navbar extends Component {

  render() {
    return (
      <navbar className="navbar">
        <div className="navbar-left"></div>
        <div className="navbar-center">
          <div className="navbar-title">
            <Link className="test" activeClass="active" to="home" spy={true}
              smooth={true} duration={600}>dan's cookie jar</Link>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <Link className="test" activeClass="active" to="gallery" spy={true}
                  smooth={true} duration={600}>gallery</Link>
              </li>
              <li>
                <Link className="test" activeClass="active" to="cookies" spy={true}
                  smooth={true} duration={600}>cookies</Link>
              </li>
              <li>
                <Link className="test" activeClass="active" to="contact" spy={true}
                  smooth={true} duration={600}>contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-right"></div>
      </navbar>
    )
  }
}

export default Navbar
