import React,{Component,PropTypes} from 'react'
import Modal from './modal'
import Formsy from 'formsy-react'

export default class confirmModal extends Component{
  constructor(props) {
    super(props)
    this.state ={
      saveClass: 'ui basic blue button disabled'
    }
    this.enableButton = this.enableButton.bind(this)
    this.disableButton = this.disableButton.bind(this)
    this.getFormData = this.getFormData.bind(this)
  }

  static propTypes = {
    id:PropTypes.string,
    title: PropTypes.string,
    Width: PropTypes.string,
    children: React.PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    getFormData: PropTypes.func,
    isOpened: PropTypes.bool,
    isNotNeedAction: PropTypes.bool
  }

  componentDidMount() {
    
  }
  getFormData() {
    let getFormData = this.props.getFormData
    if(getFormData){ getFormData(this.refs.form.getModel())}
  }
  enableButton() {
    this.setState({
      saveClass: 'ui basic blue button'
    })
  }
  disableButton() {
    this.setState({
      saveClass: 'ui basic blue button disabled'
    })
  }

  render(){
    const {onSave, onClose, title, isOpened, isNotNeedAction} = this.props
    return (
      <Modal style='standard' className='' size='small' isOpened={isOpened} closeIcon  closePortal={onClose}>
        <i className='close icon' onClick={onClose}></i>
        <div className="header">
          {title}
        </div>
        <div className="content">
          <Formsy.Form className="ui form" ref="form" onChange={this.getFormData} onValid={this.enableButton} onInvalid={this.disableButton}>
            {this.props.children}
          </Formsy.Form>
        </div>
        {
          isNotNeedAction?'':
          <div className="actions">
            <div className="ui basic cancel red button" onClick={onClose} >取消</div>
            <div className={this.state.saveClass}   onClick={onSave}>保存</div>
          </div>
        }
      </Modal>
    )
  }
}