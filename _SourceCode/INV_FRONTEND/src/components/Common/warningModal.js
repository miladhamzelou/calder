import React,{Component,PropTypes} from 'react'
import Modal from './modal'

export default class WarningModal extends Component{
  constructor(props) {
    super(props)
  }

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    isOpened: PropTypes.bool,
    onSave: PropTypes.func.isRequired
  }
  componentDidMount() {
    
  }

  render(){
    const {title, content, isOpened, onClose, onSave} = this.props

    return (
        <Modal style="basic" size='small' isOpened={isOpened} closePortal={onClose}>
          <div className="ui icon header">
            <i className="warning icon red"></i>
            {title}
          </div>
          <div className="content">
            <p>{content}</p>
          </div>
          <div className="actions">
              <div className="ui red basic cancel inverted button" onClick={onClose}>
                <i className="remove icon"></i>
                取消
              </div>
              <div className="ui green ok inverted button" onClick={onSave}>
                <i className="checkmark icon"></i>
                确认
              </div>
          </div>
        </Modal>
    )
  }
}