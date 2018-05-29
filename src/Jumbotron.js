import React from 'react'
import Button from './Button'
import logo from './assets/images/logo.png'
import StarDivider from './StarDivider'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './Jumbotron.scss'

const Jumbotron = props =>
  <header id="home" className="jumbotron">
    <div className="header-left" />
    <div className="header-center">
      <img src={logo} className="logo" alt="logo" />

      <h1>DAN'S COOKIE JAR</h1>
      <StarDivider />

      <a href="mailto:danscookiejar@gmail.com">
        <Button width="150px">ORDER NOW</Button>
      </a>
    </div>
    <div className="header-right" />
  </header>

export default Jumbotron
