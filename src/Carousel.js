import React, { Component } from 'react'
import Slider from 'react-slick'
import './Carousel.scss'

import c1 from './assets/images/c1.png'
import c2 from './assets/images/c2.png'
import c3 from './assets/images/c3.png'
import c4 from './assets/images/c4.png'
import c5 from './assets/images/c5.png'
import c6 from './assets/images/c6.png'
import c7 from './assets/images/c7.png'

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      draggable: true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: 'Default',
      pauseOnHover: false
    }
    return (
      <div className="carousel">
        <Slider className="slider" {...settings}>
          <div>
            <img width={'200px'} height={'auto'} src={c1} alt="c1" />
          </div>
          <div>
            <img width={'200px'} height={'auto'} src={c2} alt="c2" />
          </div>
          <div>
            <img width={'200px'} height={'auto'} src={c3} alt="c3" />
          </div>
          <div>
            <img width={'200px'} height={'auto'} src={c4} alt="c4" />
          </div>
          <div>
            <img width={'200px'} height={'auto'} src={c5} alt="c5" />
          </div>
          <div>
            <img width={'200px'} height={'auto'} src={c6} alt="c6" />
          </div>
          <div>
            <img width={'200px'} height={'auto'} src={c7} alt="c7" />
          </div>
        </Slider>
      </div>
    )
  }
}

export default Carousel
