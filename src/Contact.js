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
      </div>
    )
  }
}

export default Contact
