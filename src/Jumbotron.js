import React from 'react'
import Button from './Button'
import logo from './assets/images/logo.png'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './Jumbotron.scss'

const Jumbotron = props =>
  <header id="home" className="jumbotron">
    <div className="header-left">
    </div>
    <div className="header-center">
      <img src={logo} className="logo" alt="logo" />

      <h1>DAN'S COOKIE JAR</h1>
      <div className="star-divider">
        <div className="bar"></div>
        <i className="fa fa-star fa-3x" aria-hidden="true"></i>
        <div className="bar"></div>
      </div>

      <Button width="150px">ORDER NOW</Button>
    </div>
    <div className="header-right">
    </div>
  </header>

export default Jumbotron


// <h2>
//   Welcome to my cookie jar. I don&apos;t have much of a story other than
//   being a hungry guy with an appetite for delicious cookies. And besides,
//   anyone can bake a cookie, we craft an experience. I&apos;ll add some
//   cheesy story later...
// </h2>
