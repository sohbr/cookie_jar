import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CookieListItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="cookie-item">
        <img src={this.props.image} alt={this.props.title} />
        <h2>
          {this.props.title}
        </h2>
        <p>
          {this.props.description}
        </p>
      </div>
    )
  }
}

export default CookieListItem
