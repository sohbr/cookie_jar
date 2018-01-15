import React, { Component } from "react";
import Footer from "./Footer";
import logo from "./assets/images/logo.png";
import "./App.scss";

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
          <div className="header-left">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="header-right">
            <h1 className="App-title">Dan's Cookie Jar</h1>
            <h2 className="App-intro">
              Welcome to my cookie jar. I don't have much of a story other than
              being a hungry guy with an appetite for delicious cookies. And
              besides, anyone can bake a cookie, we craft an experience. I'll
              add some cheesy story later...
            </h2>
            <button className="App-button">Order Now</button>
          </div>
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
        <Footer />
      </div>
    );
  }
}

export default App;
