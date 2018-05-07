import React from 'react'
import Button from './Button'
import logo from './assets/images/logo.png'
import './Jumbotron.scss'

const Jumbotron = props =>
  <header id="home" className="jumbotron">
    <div className="header-left">
    </div>
    <div className="header-center">
      <img src={logo} className="logo" alt="logo" />

      <h1>DAN'S COOKIE JAR</h1>
      <h2>
        Welcome to my cookie jar. I don&apos;t have much of a story other than
        being a hungry guy with an appetite for delicious cookies. And besides,
        anyone can bake a cookie, we craft an experience. I&apos;ll add some
        cheesy story later...
      </h2>
      <Button width="150px">Order Now</Button>
    </div>
    <div className="header-right">
    </div>
  </header>

export default Jumbotron
