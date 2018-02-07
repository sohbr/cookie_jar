import React, { Component } from 'react'
import Carousel from './Carousel'

import './Gallery.scss'

class Gallery extends Component {
  render() {
    return (
      <div className="carousel-container">
        <Carousel />
      </div>
    )
  }
}

export default Gallery
