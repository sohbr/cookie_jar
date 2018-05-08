import React, { Component } from 'react'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import './StarDivider.scss'

class StarDivider extends Component {
  render() {
    return (
      <div className="star-divider">
        <div className="bar"></div>
        <i className="fa fa-star fa-3x" aria-hidden="true"></i>
        <div className="bar"></div>
      </div>
    )
  }
}

export default StarDivider
