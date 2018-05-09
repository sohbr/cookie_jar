import React, { Component } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

const customModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '75%',
    maxWidth: '75%'
  }
}

Modal.setAppElement('#root')

class CookieListItem extends Component {
  state = { isOpen: false }

  static propTypes = {
    title: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  handleClickCard = () => {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <li className="cookie-item" onClick={this.handleClickCard}>
        <div className="cookie-image">
          <img src={this.props.image} alt={this.props.title} />
        </div>
        <div className="cookie-content">
          <h2>
            {this.props.title}
          </h2>

        </div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={() => this.setState({ isOpen: false })}
          contentLabel={this.props.title}
          style={customModalStyle}
        >
          <div className="cookie-modal">
            <div className="cookie-modal--image">
              <img src={this.props.image} alt={this.props.title} />
            </div>
            <div className="cookie-modal--content">
              <h1>
                {this.props.title}
              </h1>
              <p>
                {this.props.description}
              </p>
            </div>
          </div>
        </Modal>
      </li>
    )
  }
}

export default CookieListItem
