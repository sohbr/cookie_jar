import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
  }

  static defaultProps = {
    width: '400px',
    height: '400px'
  }
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: this.props.width, height: this.props.height, position: 'relative', display: 'flex', justifycontent: 'center' }}
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

            <h2>2114 Mooncrest Dr. Houston, TX 77089</h2>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)
