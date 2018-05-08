import React from 'react'
import Button from './Button'
import logo from './assets/images/logo.png'
import StarDivider from './StarDivider'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './Jumbotron.scss'

const Jumbotron = props =>
  <header id="home" className="jumbotron">
    <div className="header-left">
    </div>
    <div className="header-center">
      <img src={logo} className="logo" alt="logo" />

      <h1>DAN'S COOKIE JAR</h1>
      <StarDivider />

      <Button width="150px">ORDER NOW</Button>
    </div>
    <div className="header-right">
    </div>
  </header>

export default Jumbotron
