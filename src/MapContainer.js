import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
// import REACT_APP_API_KEY from './.env.local'

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: '50%', height: '50%', position: 'relative' }}
        initialCenter={{
          lat: 29.5746991,
          lng: -95.2346119
        }}
        zoom={11}
        onClick={this.onMapClicked}
      >
        <Marker
          title={'2114 Mooncrest Dr. Houston, TX 77089'}
          name={'2114 Mooncrest Dr. Houston, TX 77089'}
          position={{ lat: 29.5746991, lng: -95.2346119 }}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)
