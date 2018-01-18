import React, { Component } from 'react'
import './Contact.scss'
import MapContainer from './MapContainer'

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
        <div className="contact-order">
          Send us an Email: danscookiejar@gmail.com
        </div>
        <div className="contact-blurb">
          Our website is designed for Houston residents to purchase cookies
          online for pickup. Delivery arrangements can be made for an additional
          charge. We also accept credit cards or cash on delivery or pickup.
        </div>
        <div className="contact-blurb">
          Currently a 2 day advance notice is required. We happily take custom
          orders for parties, weddings, and special occasions. Just give us a
          call, text or email and we will be happy to fulfill your order.
        </div>
      </div>
    )
  }
}

export default Contact
