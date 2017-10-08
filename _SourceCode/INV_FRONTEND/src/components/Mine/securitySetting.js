import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import $ from 'jquery'
import defaultAvatarPerson1 from '../../assets/images/jenny.jpg'
import Sidebar from './sidebar'

import Cropper from 'react-cropper'
const src = ''
global.$ = global.jQuery = $

const mapStateToProps = state =>{
  return {
    auth: state.auth.toJS()
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)

  }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class SecuritySetting extends Component {
  constructor(props){
    super(props)
    this.state = {
      src,
      cropResult: null
    }
    this._cropImage = this._cropImage.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  }

  static fetchData(params){
    return [Actions.getArticleList(),Actions.getTagList()]
  }

  componentDidMount() {
    $('.menu .item').tab({
    })
  }

  handleChange(e,option,isAdd=false){
    e.preventDefault()
  }
  modifyHead(){
    $('.ui.makeProfile ').modal('show')
  }

  _cropImage() {
    const { actions,auth } = this.props
    if (typeof this.refs.cropper.getCroppedCanvas() === 'undefined') {
      return
    }
    const result = this.refs.cropper.getCroppedCanvas().toDataURL()
    this.setState({
      cropResult: this.refs.cropper.getCroppedCanvas().toDataURL()
    })
    const param = {
      dispatcher: 1001,
      _platform: 'pc',
      userType: 12,
      userId: auth.user.id,
      version: 2,
      headUrl:result
    }
    actions.eidtHeadProfile(param)
  }
  _onChange(e) {
    e.preventDefault()
    let files
    if (e.dataTransfer) {
      files = e.dataTransfer.files
    } else if (e.target) {
      files = e.target.files
    }
    const reader = new FileReader()
    reader.onload = () => {
      this.setState({ src: reader.result })
    }
    reader.readAsDataURL(files[0])
  }
  render() {
    return (
      <div className="ui grid right_content">
        <Sidebar />
          <div className="sixteen wide column right_content">

          <div className="ui modal makeProfile">
            <i className="close icon"></i>
            <div className="header">
              编辑个人头像
            </div>
            <div className="image content">
              <div className="cropper_div">
                <Cropper
                    className="cropper_div_cropper"
                    aspectRatio={16 / 16}
                    preview=".img_preview"
                    guides={false}
                    src={this.state.src}
                    ref="cropper"
                    crop={this._crop}
                    />

                  <input type="file" onChange={this._onChange} /> 
              </div>
              <div className="description" style={{paddingLeft:30}}>
                  <h1>预览</h1>
                  <div className="img_preview" style={{ width: 200, float: 'left', height: 200, overflow:'hidden'}}/>
              </div>
            </div>
            <div className="actions">
              <div className="ui black deny button">
                取消
              </div>
              <div className="ui positive right button" onClick={ this._cropImage }>
                保存
              </div>
            </div>
          </div>

          <div className="stretched column content">
            <h3 className="ui dividing header ">
                <div className="title"><i className="browser alternate icon"></i>安全设置</div>
            </h3>
            <div className="ui segment">
                <div className="clearfix margin-top">
                  <div className="avatar pull-left">
                  <p><img src={defaultAvatarPerson1} width="120" height="120"/></p>
                  <p className="avatar-txt-margin">
                  <a className ="link-title" onClick={e=>this.modifyHead()}>修改头像</a></p></div>
                </div>
                <div className="summary">
                  <p1 className="ng-binding">
                  <span></span> 
                  <span>登录账号</span> 
                  <span >：</span> tb2289119_66 
                   <span className="margin-left">
                   (<span className="text-warning" >您已通过实名认证</span>)</span>
                   <span></span>
                   </p1>
                </div>
                <div className="summary">
                  <p1 className="ng-binding">
                  <span></span>
                  <span>注册时间</span> 
                  <span >：</span> 2016-06-13 14:24:21
                   <span className="margin-left"></span>
                   <span></span></p1>
                </div>
                <div className="summary">
                  <p1 className="ng-binding">
                  <span></span>
                  <span>真实姓名</span> 
                  <span >：</span> 贾吉吉 
                   <span className="margin-left"></span>
                   <span></span></p1>
                </div>
                <div className="summary">
                  <p1 className="ng-binding">
                  <span></span>
                  <span>真实姓名</span> 
                  <span >：</span> 贾吉吉 
                   <span className="margin-left"></span>
                   <span></span></p1>
                </div>
                <div className="summary">
                  <p1 className="ng-binding">
                  <span></span>
                  <span>真实姓名</span> 
                  <span >：</span> 贾吉吉 
                   <span className="margin-left"></span>
                   <span></span></p1>
                </div>
                <div className="clearDiv"></div>
                <ul className="secure-set-list list-unstyled">
                  <li ng-repeat="item in items list-unstyled" className="ng-scope">
                    <div className="set-list-left pull-left">
                    <b ng-bind="item.title" className="ng-binding">登录密码</b></div>
                    <div className="set-list-right pull-right">
                    <span className="text-success">
                      <span className="icon text-size-18 margin-right-1 icon-yes-1"></span> 
                      <span ng-bind="item.statusLabel" className="ng-binding">已设置</span>
                    </span> 
                    <span className="text-explode">|</span>
                     <span className="link-operation">
                     <a >修改</a>
                     </span></div>
                     <div className="set-list-mid"
                     ><div className="inner ng-binding" ng-bind-html="item.description">
                     安全性高的密码可以使帐号更安全。建议您定期更换密码，设置一个包含字母，符号或数字中至少两项且长度超过6位的密码。
                     </div></div>
                  </li>

                  <li ng-repeat="item in items list-unstyled" className="ng-scope">
                    <div className="set-list-left pull-left">
                    <b ng-bind="item.title" className="ng-binding">邮箱绑定</b></div>
                    <div className="set-list-right pull-right">
                    <span className="text-success">
                      <span className="icon text-size-18 margin-right-1 icon-yes-1"></span> 
                      <span ng-bind="item.statusLabel" className="ng-binding">已设置</span>
                    </span> 
                    <span className="text-explode">|</span>
                     <span className="link-operation">
                     <a >修改</a>
                     </span></div>
                     <div className="set-list-mid"
                     ><div className="inner ng-binding" ng-bind-html="item.description">
                     邮箱绑定后可用来接收阿里云发送的各类系统、营销、服务通知。
                     </div></div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}