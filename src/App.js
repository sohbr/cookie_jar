import React, { Component } from 'react'
import logo from './assets/images/logo.png'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="grid-wrapper">
        <navbar className="navbar">
          <a href="">Home</a>
          <a href="">Cookies</a>
          <a href="">Contact</a>
        </navbar>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dan's Cookie Jar</h1>
        </header>
        <section className="gallery">
          <h2>Gallery</h2>
        </section>
        <section className="cookies">
          <h2>Cookies</h2>
        </section>
        <section className="contact">
          <h2>Contact</h2>
        </section>
        <footer>© 2017 by DAN'S COOKIE JAR.</footer>
      </div>
    )
  }
}

export default App
