import React, {PropTypes} from 'react'
import Formsy from 'formsy-react'

const Input = React.createClass({
  mixins: [Formsy.Mixin],
  propTypes: {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    fieldClassName:PropTypes.string
  },
  changeValue(event) {
    this.setValue(event.currentTarget.value)
  },
  render() {
    const {label, placeholder, fieldClassName} = this.props

    const className = this.showError()?fieldClassName+' error' : fieldClassName
    const errorClassName = this.getErrorMessage()? 'ui basic red pointing prompt label transition visible':'ui hide'
    const errorMessage = this.getErrorMessage()
    
    return (
      <div className={className}>
        <label>{label}</label>
        <input 
          onChange={this.changeValue} 
          name={this.props.name}
          value={this.getValue()} 
          placeholder={placeholder}
          type={this.props.type || 'text'}
          checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
        />
        <div className={errorClassName}>{errorMessage}</div>
      </div>
    )
  }
})
export default Input