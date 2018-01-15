import React, { Component } from 'react'
import Button from './Button'
import Navbar from './Navbar'
import CookieList from './CookieList'
import Contact from './Contact'
import Footer from './Footer'
import logo from './assets/images/logo.png'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="grid-wrapper">
        <Navbar />
        <header id="home">
          <div className="header-left">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="header-right">
            <h1 className="App-title">Dan&apos;s Cookie Jar</h1>
            <h2 className="App-intro">
              Welcome to my cookie jar. I don&apos;t have much of a story other
              than being a hungry guy with an appetite for delicious cookies.
              And besides, anyone can bake a cookie, we craft an experience.
              I&apos;ll add some cheesy story later...
            </h2>
            <Button width="14vw">Order Now</Button>
          </div>
        </header>
        <section className="gallery" id="gallery">
          <h2>Gallery</h2>
        </section>
        <section className="cookies" id="cookies">
          <h2>Cookies</h2>
          <CookieList />
        </section>
        <section className="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    )
  }
}

export default App
