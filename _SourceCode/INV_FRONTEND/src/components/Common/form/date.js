import React, {PropTypes} from 'react'
import Formsy from 'formsy-react'
import DatePicker from 'rc-calendar/lib/Picker'
import Calendar from 'rc-calendar'
import CalendarLocale from 'rc-calendar/lib/locale/zh_CN'
import zhCn from 'gregorian-calendar/lib/locale/zh_CN'
import assign from 'object-assign'
import DateTimeFormat from 'gregorian-calendar-format'
import GregorianCalendar from 'gregorian-calendar'

const MyDate = React.createClass({
  mixins: [Formsy.Mixin],
  propTypes: {
    label: PropTypes.string,
    fieldClassName:PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.string,
    placeholder: PropTypes.string
  },
  changeValue(value) {
    const dateFormatter = new DateTimeFormat('yyyy-MM-dd')
    value && dateFormatter.format(value)
    this.setValue(value)
  },
  render() {
    const {label, fieldClassName, width, placeholder} = this.props
    const className = this.showError()?fieldClassName+' error' : fieldClassName
    const errorClassName = this.getErrorMessage()? 'ui basic red pointing prompt label transition visible':'ui hide'
    const errorMessage = this.getErrorMessage()

    const CalendarLocale2 = assign({}, CalendarLocale, {
      monthFormat: 'MMMM'
    })
    const dateFormatter = new DateTimeFormat('yyyy-MM-dd')
    const defaultCalendarValue = new GregorianCalendar(zhCn)
    defaultCalendarValue.setTime(Date.now())
    defaultCalendarValue.addMonth(-1)
    const calendar = (<Calendar
      locale={CalendarLocale2}
      style={{ zIndex: 10000000 }}
      dateInputPlaceholder="请输入"
      defaultValue={defaultCalendarValue}
    />)
    
    return (
      <div className={className}>
        <label>{label}</label>
        <DatePicker
          animation="slide-down"
          calendar={calendar}
          value={this.getValue()}
          onChange={this.changeValue}
        >
          {
            ({ value }) => {
              return (
                <span tabIndex="0">
                <input
                  name={this.props.name}
                  placeholder={placeholder?placeholder:'请选择日期'}
                  style={{ width: width?width:212 }}
                  readOnly
                  tabIndex="-1"
                  className="ant-calendar-picker-input ant-input"
                  value={value && dateFormatter.format(value) || ''}
                />
                </span>
              )
            }
          }
        </DatePicker>
        <div className={errorClassName}>{errorMessage}</div>
      </div>
    )
  }
})
export default MyDate