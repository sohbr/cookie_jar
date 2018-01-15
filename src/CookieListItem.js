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
      <li className="cookie-item">
        <div className="cookie-image">
          <img src={this.props.image} alt={this.props.title} />
        </div>
        <div className="cookie-content">
          <h2>
            {this.props.title}
          </h2>
          <p>
            {this.props.description}
          </p>
        </div>
      </li>
    )
  }
}

export default CookieListItem
