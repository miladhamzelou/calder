import React, { Component, PropTypes } from 'react'
import Portal from 'react-portal'

class InnerModal extends Component {
  constructor(props) {
    super(props)
    this.state={
      modalHeight:0
    }
  }
  componentDidMount() {
    this.setHeight()
  }

  setHeight(){
    let modalHeight = window.$('#reactInnerModal').outerHeight()
    this.setState({modalHeight:modalHeight})
  }

  render() {
    let className = `ui modal transition visible active scale in ${this.props.style} ${this.props.size}`
    return (
      <div id='reactInnerModal' className={className} style={{'marginTop': - this.state.modalHeight / 2}}>
        {this.props.children}
      </div>
    )
  }
}

InnerModal.propTypes = {
  style: PropTypes.oneOf(['standard', 'basic']),
  size: PropTypes.oneOf(['', 'small', 'large', 'fullscreen']),
  closePortal: PropTypes.func,
  children: React.PropTypes.node.isRequired
}
InnerModal.defaultProps = {
  style: 'standard',
  size: ''
}

class Modal extends Component {
  render() {
    let className = `ui dimmer modals visible active page transition fade in ${this.props.className}`
    return (
      <Portal className={className}
      isOpened={this.props.isOpened}
      closeOnEsc={this.props.closeOnEsc}
      closeOnOutsideClick={this.props.closeOnOutsideClick}
      onClose={this.props.onClose}>
        <InnerModal style={this.props.style} className={this.props.className} size={this.props.size} >
          {this.props.children}
        </InnerModal>
      </Portal>
    )
  }
}

Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeOnEsc: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.oneOf(['standard', 'basic']),
  size: PropTypes.oneOf(['', 'small', 'large', 'fullscreen']),
  children: React.PropTypes.node.isRequired
}
Modal.defaultProps = {
  style: 'standard',
  size: ''
}

module.exports = Modal