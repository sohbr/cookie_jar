import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: '45%', height: '45%' }}
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
        <InfoWindow
          visible={true}
          position={{ lat: 29.5746991, lng: -95.2346119 }}
        >
          <div>
            <h2>2114 Mooncrest Dr. Houston, TX 77089</h2>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)
