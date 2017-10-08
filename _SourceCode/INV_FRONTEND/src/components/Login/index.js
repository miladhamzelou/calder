import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import * as Actions from '../../actions'
var md5 = require('blueimp-md5')

const mapStateToProps = state =>{
  return {
    globalVal : state.globalVal.toJS(),
    auth: state.auth.toJS()
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } 
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length > 30) {
    errors.password = '密码长度不超过30'
  }
  return errors
}

@connect(mapStateToProps,mapDispatchToProps)
@reduxForm({
  form: 'signin',
  fields: ['userName', 'password', '_platform'],
  validate
})
export default class Login extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    globalVal: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    values: PropTypes.object,
    fields: PropTypes.object,
    dirty: PropTypes.bool,
    invalid: PropTypes.bool
  }

  static fetchData(params){
    return [Actions.getSnsLogins()]
  }

  handleSubmit (e) {
    e.preventDefault()
    const { values } = this.props
    const { actions } = this.props
    values.password = md5(values.password).toUpperCase()
    actions.localLogin(values)
  }
  componentDidMount() {
    // var $form = this.$("login form")
    //   .form({
    //     on: "blur",
    //     onSuccess: login.onSubmit,
    //     fields: {
    //       username: {
    //         identifier: 'username',
    //         rules: [{
    //           type   : 'empty',
    //           prompt : '请输入用户名'
    //         }]
    //       },
    //       passwd: {
    //         identifier: 'passwd',
    //         rules: [{
    //           type   : 'empty',
    //           prompt : '请输入密码'
    //         },
    //         {
    //           type   : 'minLength[6]',
    //           prompt : '密码不能小于6位'
    //         }]
    //       }
    //     }
    //   })
  }

  validatorCalss(field){
    let initClass = 'form-control'
    if(field.invalid){
      initClass += ' ng-invalid'
    }
    if(field.dirty){
      initClass += ' ng-dirty'
    }
    return initClass
  }

  render() {
    const {fields: { userName, password }, dirty,invalid } = this.props
    return (
      <div className="column">
        <h2 className="ui header login_header">
          <div className="content">
          招商管理系统
          </div>
        </h2>
        <form ref="login form" className="ui form segment" onSubmit={this.handleSubmit} noValidate>
          <div className="field">
            <label>用户名</label>
            <input type="text" 
              className={ this.validatorCalss(userName) } 
              placeholder="请输入用户名"
              {...userName} />
          </div>
          <div className="field">
            <label>密码</label>
            <input type="password"
              className={ this.validatorCalss(password) }
              placeholder="密码" 
              {...password} />
          </div>

          <div className="ui blue submit button" disabled={ dirty && invalid } onClick={this.handleSubmit}>登录</div>
          <div className="ui clear button">清除</div>
          <div className="ui error message"></div>
        </form>
      </div>
    )
  }
}