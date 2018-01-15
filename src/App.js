import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import CookieList from './CookieList'
import Contact from './Contact'
import Footer from './Footer'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="grid-wrapper">
        <Navbar />
        <Jumbotron />
        <section className="gallery" id="gallery">
          <h2>Gallery</h2>
        </section>
        <section className="cookies" id="cookies">
          <h2>Cookies</h2>
          <CookieList />
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <Contact />
        </section>
        <Footer />
      </div>
    )
  }
}

export default App
