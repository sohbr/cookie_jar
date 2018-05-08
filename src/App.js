import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import Gallery from './Gallery'
import CookieList from './CookieList'
import Contact from './Contact'
import Footer from './Footer'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="grid-wrapper">
          <Jumbotron />
          <section className="gallery" id="gallery">
            <Gallery />
          </section>
          <section className="cookies" id="cookies">
            <CookieList />
          </section>
          <section className="contact" id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
