import React, {PropTypes} from 'react'
import Formsy from 'formsy-react'

const Textarea = React.createClass({
  mixins: [Formsy.Mixin],
  propTypes: {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.string,
    fieldClassName: PropTypes.string
  },
  changeValue(event) {
    this.setValue(event.currentTarget.value)
  },
  render() {
    const {label, placeholder,rows,fieldClassName} = this.props

    const className = this.showError()?fieldClassName+' error' : fieldClassName
    const errorClassName = this.getErrorMessage()? 'ui basic red pointing prompt label transition visible':'ui hide'
    const errorMessage = this.getErrorMessage()
    
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea type="text" rows={rows} onChange={this.changeValue} value={this.getValue()} placeholder={placeholder}></textarea>
        <div className={errorClassName}>{errorMessage}</div>
      </div>
    )
  }
})
export default Textarea