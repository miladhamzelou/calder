import React, {PropTypes} from 'react'
import {Dropdown} from 'react-semantify'
const DepSelect = React.createClass({
  propTypes: {
    label: PropTypes.string,
    fieldClassName: PropTypes.string,
    placeholder: PropTypes.string,
    divClass:PropTypes.string,
    dataList: PropTypes.array,
    isMultiple:PropTypes.bool
  },
  changeValue(event) {
    this.setValue(event.currentTarget.value)
  },
  componentDidMount() {
  },
  render() {
    const {label, dataList, placeholder,isMultiple,fieldClassName,divClass} = this.props

    const className = isMultiple?'item selection search multiple '+fieldClassName:'item selection search '+fieldClassName
    
    return (
      <div className={divClass}>
        <label style={{height:38,lineHeight:'38px'}}>{label}</label>
        <Dropdown className={className} init={true}>
          <input name="states" type="hidden"/>
            <i className="dropdown icon"></i>
            <div className="default text">{placeholder}</div>
              <div className="menu">
                {dataList != null &&dataList.obj.roleList.map((role, i)=>
                 <a className="item" data-value={role.id}>{role.roleName}</a>
                )}
              </div>
        </Dropdown>
      </div>

    )
  }
})
export default DepSelect