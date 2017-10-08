import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import $ from 'jquery'
import Sidebar from './sidebar'
import ConfirmModal from '../Common/confirmModal'
import Input from '../Common/form/input'
import RadioGroup from '../Common/form/radioGroup'
import MyDate from '../Common/form/date'
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
export default class BasicData extends Component {
  constructor(props){
    super(props)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.onSave = this.onSave.bind(this)
    const {auth} =  this.props
    this.state ={
      memberModel: {
        'title':'编辑个人资料',
        'userId':'',
        'version':'',
        'status':'',
        'nickName':auth.user.nickName,
        'userName':auth.user.userName,
        'sex':auth.user.sex,
        'duties':'',
        'birthday':'',
        'idCard':'',
        'entryTime':'',
        'jobNumber':'',
        'landLine':'',
        'tel':'',
        'mail':'',
        'address':'',
        'departId':'',
        'roleId':''
      },
      isShow:false
    }
  }
  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  static fetchData(params){
  }
  componentDidMount() {
    $('.menu .item').tab({
    })
  }
  handleOpen = () =>{
    this.setState({
      isShow:true
    })
  }
  onCloseModal(){
    this.setState({
      isShow:false
    })
  }
  onSave(){
    this.setState({
      isShow:false
    })
  }

  render(){
    const currentUser = this.state.memberModel
    return (
      <div className="ui grid right_content">
        <ConfirmModal
             onClose={this.onCloseModal}
             onSave={this.onSave}
             getFormData={this.getFormData}
             title={this.state.memberModel.title}
             isOpened={this.state.isShow}
             ref="form"
            >
            <div className="three fields">
              <Input 
                name="nickName"
                label="姓名"
                placeholder="姓名"
                fieldClassName="field required"
                value={this.state.memberModel.nickName}
                validations={{
                  minLength: 1,
                  maxLength: 20
                }}
                validationErrors={{
                  minLength: '不能为空',
                  maxLength: '不能超过20字'
                }}
                required/>
              <MyDate
                name="birthday"
                label ="出生年月"
                fieldClassName ="field"
                value ={this.state.memberModel.birthday}
              />
              <RadioGroup 
                name="frequency" 
                value={this.state.memberModel.sex==0?'男':'女'} 
                title="性别"
                items={['男', '女']} 
                required/>
            </div>
              <div className="three fields">             
              <Input 
                name="idCard"
                label="身份证"
                placeholder="身份证"
                fieldClassName="field"
                value={this.state.memberModel.idCard}
                validations={{
                  matchRegexp:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                }}
                validationErrors={{
                  matchRegexp:'身份证不合法'
                }}
                />
              <Input 
                      name="tel"
                      label="手机"
                      placeholder="手机"
                      fieldClassName="field"
                      value={this.state.memberModel.tel}
                      validations={{
                        isLength:11,
                        isInt:true
                      }}
                      validationErrors={{
                        isLength: '请输入合法的手机',
                        isInt:'请输入合法的手机'
                      }}/>
                      <Input 
                      name="landLine"
                      label="座机/分机"
                      placeholder="座机/分机"
                      fieldClassName="field"
                      value={this.state.memberModel.landLine}
                      validations={{
                        matchRegexp: /^0\d{2,3}-?\d{7,8}$/
                      }}
                      validationErrors={{
                        matchRegexp:'如01088888888,010-88888888,0955-7777777'
                      }}/>
          </div>    
                  <div className="field">
                  
                      <Input 
                      name="address"
                      label="地址"
                      placeholder="地址"
                      fieldClassName="field"
                      value={this.state.memberModel.address}
                      validations={{
                        maxLength: 40
                      }}
                      validationErrors={{
                        maxLength: '不能超过40字'
                      }}
                      />
                  </div>
        </ConfirmModal>
        <Sidebar />
          <div className="sixteen wide column right_content">
          <div className="stretched column content">
            <h5 className="ui dividing header ">
                <div className="title">个人信息</div>
                <button className="ui small basic button right floated blue" onClick={this.handleOpen}><i
                  className="icon user"></i>编辑个人资料
                </button>
            </h5>
            <div className="ui segment">
              <div className="stretched column content">
              <h5 className="ui header ">
                <div className="title">基础信息</div>
              </h5>
              <div className="ui stackable grid">
                <div className="four wide column">
                  <div className="clearDiv"> 
                  <span className="white-right ">真实姓名:</span>
                            
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-right ">登录名:</span>
                             
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-right ">性别:</span>
                             
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-right ">出生年月:</span>
                             
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-right ">身份证:</span>
                             
                  </div>
                </div>
                <div className="twelve wide column pull-left">
                  <div className="clearDiv"> 
                  <span className=" white-left">{currentUser.nickName}</span>                             
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-left">{currentUser.userName}</span>                          
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-left">男</span>                             
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-left">19994-03-03</span>                          
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-left">320381199303033213</span>                             
                  </div>
                </div>
              </div>
              <h5 className="ui header ">
                <div className="title">工作信息</div>
              </h5>
              <div className="ui stackable grid">
                <div className="four wide column">
                  
                  <div className="clearDiv"> 
                  <span className=" white-right ">部门:</span>
                             
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-right ">职位:</span>
                             
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-right ">工号:</span>
                             
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-right ">入职时间:</span>
                             
                  </div>
                
                </div>
                <div className="twelve wide column pull-left">
                 
                  <div className="clearDiv"> 
                  <span className=" white-left">事业部</span>                          
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-left">副局长</span>                             
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-left">12120001</span>                          
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-left">2016-06-13 14:24:21</span>                             
                  </div>
                  
                </div>
              </div>
              <h5 className="ui header ">
                <div className="title">联系信息</div>
              </h5>
              <div className="ui stackable grid">
                <div className="four wide column">
                 
                  <div className="clearDiv"> 
                  <span className=" white-right ">分机/座机:</span>
                             
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-right ">地址:</span>
                             
                  </div>
                </div>
                <div className="twelve wide column pull-left">
                  
                  <div className="clearDiv"> 
                  <span className=" white-left">0512-888892012</span>                          
                  </div>
                  <div className="clearDiv"> 
                  <span className=" white-left">浩辰大厦</span>                          
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}