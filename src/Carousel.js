import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import './Carousel.scss'

import c1 from './assets/images/c1.png'
import c2 from './assets/images/c2.png'
import c3 from './assets/images/c3.png'
import c4 from './assets/images/c4.png'
import c5 from './assets/images/c5.png'
import c6 from './assets/images/c6.png'
import c7 from './assets/images/c7.png'

const CarouselDiv = styled.div`
  margin-top: 2.5rem;
  width: ${props => (props.width ? props.width : '400px')};
  height: ${props => (props.height ? props.height : '400px')};
`

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
      pauseOnHover: false,
      arrows: false
    }
    return (
      <div className="carousel">
        <CarouselDiv width='500px' height='100px'>
          <Slider className="slider" {...settings}>
            <div>
              <img className="cookie-pics" src={c1} alt="c1" />
            </div>
            <div>
              <img className="cookie-pics" src={c2} alt="c2" />
            </div>
            <div>
              <img className="cookie-pics" src={c3} alt="c3" />
            </div>
            <div>
              <img className="cookie-pics" src={c4} alt="c4" />
            </div>
            <div>
              <img className="cookie-pics" src={c5} alt="c5" />
            </div>
            <div>
              <img className="cookie-pics" src={c6} alt="c6" />
            </div>
            <div>
              <img className="cookie-pics" src={c7} alt="c7" />
            </div>
          </Slider>
        </CarouselDiv>


      </div>
    )
  }
}

export default Carousel
