import React, {PropTypes} from 'react'
import Formsy from 'formsy-react'
import $ from 'jquery'

const Dropdowns = React.createClass({
  mixins: [Formsy.Mixin],
  propTypes: {
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    fieldClassName: PropTypes.string,
    value: PropTypes.string,
    itemList: PropTypes.array,
    multiple: PropTypes.bool,
    isChildren: PropTypes.bool,
    isClearAll: PropTypes.bool
  },
  changeValue(e) {
    this.setValue(e.currentTarget.value)
  },
  componentDidMount() {
    const {multiple,name} = this.props
    const self = this
    
    $('#'+name).dropdown({
      allowAdditions: multiple,
      allowCategorySelection: true,
      onChange: function(value, text, $selectedItem) {
        self.setValue(value)
      }
    })
  },
  clearAll(){
    const {name} = this.props
    $('#'+name).dropdown('clear')
  },
  renderChild(item) {
    return (
        <div className="menu">
          {item.childrenList.map((item, i)=>
            item.isChildren
            ?<div key={i} className="item pointing" data-value={item.id}>
              <i className="dropdown icon"></i>
              <span className="text">{item.name}</span>{this.renderChild(item)}</div> 
            :<a key={i} className="item" data-value={item.id}>{item.name}</a>
          )}
        </div>
    )
  },

  render() {
    const {label, fieldClassName, itemList, placeholder, multiple, name, isChildren, isClearAll} = this.props

    const className = this.showError()?fieldClassName+' error' : fieldClassName
    const errorClassName = this.getErrorMessage()? 'ui basic red pointing prompt label transition visible':'ui hide'
    const errorMessage = this.getErrorMessage()
    let dropdownClassName = multiple?'ui selection multiple search dropdown':'ui selection dropdown' 
    dropdownClassName = isChildren?'ui button dropdown basic ':dropdownClassName
    return (
      <div className={className}>
        <label>{label}</label>
        <div className={dropdownClassName} id={name}>
            <input name={name} type="hidden" onChange={this.changeValue} value={this.getValue()}/>
            <div className="default text">{placeholder}</div>
            <i className="dropdown icon"></i>
            <div className="menu">
              {itemList!=null&&itemList.map((item, i)=>
                item.isChildren
                ?<div key={i} className="item pointing" data-value={item.id}>
                  <i className="dropdown icon"></i>
                  <span className="text">{item.name}</span>{this.renderChild(item)}</div> 
                :<a key={i} className="item" data-value={item.id}>{item.name}</a>
              )}
            </div>
        </div>
        {isClearAll?<i className="remove circle icon clear" onClick={this.clearAll}></i>:''}
        <div className={errorClassName}>{errorMessage}</div>
      </div>

    )
  }
})
export default Dropdowns