import React, {PropTypes} from 'react'
import Formsy from 'formsy-react'

const RadioGroup = React.createClass({
  mixins: [Formsy.Mixin],
  propTypes: {
    items: PropTypes.array,
    label: PropTypes.string,
    title: PropTypes.string,
    fieldClassName:PropTypes.string,
    value: PropTypes.string
  },
  componentDidMount() {
    const value = this.props.value
    this.changeValue(value)
  },
  changeValue(value) {
    this.setValue(value)
    this.setState({ value })
  },
  render() {
    const {items,label, title, fieldClassName} = this.props

    const className = this.showError()?fieldClassName+' error' : fieldClassName
    const errorClassName = this.getErrorMessage()? 'ui basic red pointing prompt label transition visible':'ui hide'
    const errorMessage = this.getErrorMessage()
    
    return (
      <div className={className}>
        <label>{title}</label>
        <div className="inline fields" style ={{paddingLeft:30}}>
          {items.map((item, i) => (
            <div  className="field" key={i}>
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name={name}
                  onChange={this.changeValue.bind(this, item)}
                  checked={this.state.value === item}
                />
                <label>{item.toString()}</label>
              </div>
            </div>
          ))}
          <div className={errorClassName}>{errorMessage}</div>
        </div>
      </div>
    )
  }
})
export default RadioGroup