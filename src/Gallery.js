import React, { Component } from 'react'
import StarDivider from './StarDivider'
import Carousel from './Carousel'

import './Gallery.scss'

class Gallery extends Component {
  render() {
    return (
      <div className="carousel-container">
        <h2>GALLERY</h2>
        <StarDivider />
        <Carousel />
        <h3>
          Welcome to my cookie jar. I don&apos;t have much of a story other than
          being a hungry guy with an appetite for delicious cookies. And besides,
          anyone can bake a cookie, we craft an experience. I&apos;ll add some
          cheesy story later...
        </h3>
      </div>
    )
  }
}

export default Gallery
