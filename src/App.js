import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import Gallery from './Gallery'
import CookieList from './CookieList'
import Contact from './Contact'
import Footer from './Footer'
import './App.scss'
import { Element } from 'react-scroll'

class App extends Component {
  render() {
    return (
      <div className="grid-wrapper">
        <Navbar />
        <Jumbotron />
        <Element name="gallery">
          <section className="gallery" id="gallery">
            <h2 className="section-headers">Gallery</h2>
            <Gallery />
          </section>
        </Element>
        <Element name="cookies">
          <section className="cookies" id="cookies">
            <h2 className="section-headers">Cookies</h2>
            <CookieList />
          </section>
        </Element>
        <Element name="contact">
          <section className="contact" id="contact">
            <h2 className="section-headers">Contact Us</h2>
            <Contact />
          </section>
        </Element>
        <Footer />
      </div>
    )
  }
}

export default App
