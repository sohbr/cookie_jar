import React, { Component } from 'react'
import './Contact.scss'
import MapContainer from './MapContainer'
import cupcake1 from './assets/images/cupcake1.png'
import star from './assets/images/star.png'
import fb from './assets/images/fb-logo.png'
import ig from './assets/images/ig-logo.png'
import tw from './assets/images/tw-logo.png'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="map">
          <MapContainer />
        </div>
        <div className="contact-order">
          Order by Phone or Text: 832-830-5599
        </div>
        <div className="contact-order">or</div>
        <div className="contact-order">Send us an Email:</div>
        <div className="contact-blurb">
          Our website is designed for Houston residents to purchase cookies
          online for pickup. Delivery arrangements can be made for an additional
          charge. We also accept credit cards or cash on delivery or pickup.
          Currently, a 2 day advance notice is required for all orders. We
          happily take custom orders for parties, weddings, and special
          occasions. Just give us a call, text or email and we will be happy to
          fulfill your order.
        </div>
        <a href="mailto:danscookiejar@gmail.com">danscookiejar@gmail.com</a>
        <img className="cupcake" src={cupcake1} alt={'cupake1'} />
        <div className="follow-us">
          <img className="star" src={star} alt={'star'} />
          <div className="follow-text">FOLLOW US</div>
          <img className="star" src={star} alt={'star'} />
        </div>
        <div className="logos">
          <a href={'https://www.facebook.com/danscookiejar'}>
            <img className="logo" src={fb} alt={'facebook logo'} />
          </a>
          <a href={'https://www.instagram.com/danscookiejar/'}>
            <img className="logo" src={ig} alt={'instagram logo'} />
          </a>
          <a href={'https://twitter.com/danscookiejar'}>
            <img className="logo" src={tw} alt={'twitter logo'} />
          </a>
        </div>
      </div>
    )
  }
}

export default Contact
