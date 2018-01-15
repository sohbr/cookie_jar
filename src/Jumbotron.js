import React from 'react'
import Button from './Button'
import logo from './assets/images/logo.png'
import './Jumbotron.scss'

const Jumbotron = props =>
  <header id="home" className="jumbotron">
    <div className="header-left">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="header-right">
      <h1>Dan&apos;s Cookie Jar</h1>
      <h2>
        Welcome to my cookie jar. I don&apos;t have much of a story other than
        being a hungry guy with an appetite for delicious cookies. And besides,
        anyone can bake a cookie, we craft an experience. I&apos;ll add some
        cheesy story later...
      </h2>
      <Button width="14vw">Order Now</Button>
    </div>
  </header>

export default Jumbotron
