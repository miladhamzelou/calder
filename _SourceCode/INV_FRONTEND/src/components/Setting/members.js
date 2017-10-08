import React, { Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/setting'
import {Pager} from  './member/rc-pager/src/rc-pager'
import defaultAvatar from '../../assets/images/elyse.png'
import WarningModal from '../Common/warningModal'
import ConfirmModal from '../Common/confirmModal'
import Input from '../Common/form/input'
import RadioGroup from '../Common/form/radioGroup'
import Dropdowns from '../Common/form/dropdown'
import GregorianCalendar from 'gregorian-calendar'
import zhCn from 'gregorian-calendar/lib/locale/zh_CN'
import MyDate from '../Common/form/date'
import Sidebar from './sidebar'
import Formsy from 'formsy-react'
import $ from 'jquery'

const mapStateToProps = state =>{
  return {
    members: state.members.toJS(),
    roles: state.roles.toJS(),
    departments: state.departments.toJS(),
    duties:state.duties.toJS()
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
@connect(mapStateToProps,mapDispatchToProps)
export default class Members extends Component {
  constructor(props){
    super(props)
    this.selectedRole=''
    this.selectedDev=''
    this.searchWord=''
    this.sortWords=''
    this.pageChange = this.pageChange.bind(this)
    this.getFormData = this.getFormData.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.onSave = this.onSave.bind(this)
    this.getMemberList = this.getMemberList.bind(this)
    this.exactSearchModal = this.exactSearchModal.bind(this)
    this.formatDate = this.formatDate.bind(this)
    this.submitDeleteMember = this.submitDeleteMember.bind(this)
    this.colseDeleteModal = this.colseDeleteModal.bind(this)
    this.submitRecMember = this.submitRecMember.bind(this)
    this.colseRecModal = this.colseRecModal.bind(this)
    this.getSearchFormData = this.getSearchFormData.bind(this)
    this.memberDetail = this.memberDetail.bind(this)
    this.closeDetail = this.closeDetail.bind(this)
    this.getRoleList = this.getRoleList.bind(this)
    this.getDepartList = this.getDepartList.bind(this)
    this.state = {
      open:false,
      memberModel: {
        'title':'',
        'isAdd':true,
        'userId':'',
        'version':'',
        'status':'',
        'nickName':'',
        'userName':'',
        'sex':'',
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
      isShow:false,
      current:1,
      isDeleteShow: false,
      isRecShow: false, 
      updateMember:'',
      date:'',
      personDetails:'',
      isShowPerson:false
    }
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    members: PropTypes.object.isRequired,
    duties: PropTypes.object.isRequired,
    departments: PropTypes.object.isRequired,
    roles: PropTypes.object.isRequired,
    fields: PropTypes.object,
    values: PropTypes.object
  }
  static fetchData(params){
    return [
      Actions.getMemberList()
    ]
  }
  componentWillMount() {
    const self= this
    const { actions } = this.props
  //获取用户列表
    self.getMemberList(1)
    const dutyParam = {
      dispatcher: 200,
      _platform: 'pc',
      type: 2,
      sysDicType:1
    }
    actions.getDutiesList(dutyParam)
  }
  componentDidMount() {
    $('.ui.modify').popup({
      hoverable:true
    })
  }
  exactSearchModal(){
    $('.exactSearchList').slideToggle()
    this.getRoleList()
    this.getDepartList()
  }
  getRoleList(){
    //获取角色列表
    const {roles,actions}  = this.props
    if (roles.roleList == null||roles.roleList=='') {
      const param = {
        dispatcher: 1101,
        _platform: 'pc',
        type: 4,
        pageSize: 100,
        pageNum: 1
      }
      actions.getRoleList(param)
    }
  }
  getDepartList(){
    const { actions } = this.props
    const options = {
      'dispatcher':1300,
      'type':1,
      'id': 0
    }
    actions.getDepartmentList(options)
  }
  getMemberList(current) {
    const { actions } = this.props
    const self  = this
    this.setState({current:current,isShow:false})
    const options = {
      'dispatcher':1001,
      'userType':8,
      'pageNo': current,
      'pageSize':8,
      'roleId':self.selectedRole,
      'departId':self.selectedDev,
      'keyWords':self.searchWord,
      'sortWords':self.sortWords
    }
    actions.getMemberList(options) 
  }
  //改变页数
  pageChange(e){
    this.getMemberList(e)
  }
  searchNames(e) {
    this.searchWord = e.target.value
    this.getMemberList(1)
  }
  getSearchFormData() {
    const data = this.refs.searchForm.getModel()
    this.selectedRole = data.searchRoleId
    this.selectedDev = data.searchDepartId
    this.getMemberList(1)
  }
  sortList(){
    this.sortWords==''?this.sortWords ='USER_NAME':this.sortWords=''
    this.getMemberList(this.state.current)
  }
  formatDate(time){
    if (time==null || time ==''||time.length==0) {return ''}
    var newDate = new Date(parseInt(time) * 1000)
    var year= newDate.getFullYear()
    var month = (newDate.getMonth()+1)<10?'0'+(newDate.getMonth()+1):(newDate.getMonth()+1)
    var day = newDate.getDate()
    return year+'-'+month+'-'+day
  }
  colseDeleteModal=() => {
    this.setState({
      isDeleteShow:false
    })
  }
  colseRecModal=() => {
    this.setState({
      isRecShow:false
    })
  }
//更新用户状态
  deleteMember(member){
    this.setState({
      isDeleteShow:true,
      updateMember:member
    })
  }
  submitDeleteMember = () => {
    const { actions } = this.props
    let self = this
    const param={
      'dispatcher':1001,
      'userType':4,
      'status':2,
      'userId':this.state.updateMember.id,
      'version':this.state.updateMember.version
    }
    actions.deleteMember(param).then(function(){
      self.getMemberList()
      self.colseDeleteModal()
    }, function(){
      console.log('更新member失败')
    })

  }
  submitRecMember =() => {
    const { actions } = this.props
    let self = this
    const param={
      'dispatcher':1001,
      'userType':4,
      'status':3,
      'userId':this.state.updateMember.id,
      'version':this.state.updateMember.version
    }
    actions.deleteMember(param).then(function(){
      self.getMemberList()
      self.colseRecModal()
    }, function(){
      console.log('更新member失败')
    })   
  }
  //恢复用户
  recieveMember(member){
    this.setState({
      isRecShow:true,
      updateMember:member
    })
  }
  //编辑角色
  editMember(id){
    this.getRoleList()
    this.getDepartList()
    const birthday = new GregorianCalendar(zhCn)
    if (id.birthday) {
      birthday.setTime(new Date(parseInt(id.birthday) * 1000))
    }
    const entryTime = new GregorianCalendar(zhCn)
    if (id.entryTime) {
      entryTime.setTime(new Date(parseInt(id.entryTime) * 1000))    
    }
    this.setState({isShow:true,value:id.departId?id.departId:'', memberModel: {
      'title':'编辑人员',
      'isAdd':false,
      'userId':id.id?id.id:'',
      'version':id.version?id.version:'',
      'status':id.status?id.status:'',
      'nickName':id.nickName?id.nickName:'',
      'userName':id.userName?id.userName:'',
      'sex':id.sex,
      'duties':id.duties?id.duties:'',
      'birthday':id.birthday?birthday:'',
      'idCard':id.idCard?id.idCard:'',
      'entryTime':id.entryTime?entryTime:'',
      'jobNumber':id.jobNumber?id.jobNumber:'',
      'landLine':id.landLine?id.landLine:'',
      'tel':id.tel?id.tel:'',
      'mail':id.mail?id.mail:'',
      'address':id.address?id.address:'',
      'roleId':id.roleIds?id.roleIds:'',
      'departId':id.departId?id.departId:''
    }
      })
  }
  memberDetail(id){
    this.setState({
      isShowPerson:true,
      personDetails:id
    })

  }
  closeDetail() {
    this.setState({
      isShowPerson:false
    })
  }
  //新增角色
  handleOpen = () => {
    this.getRoleList()
    this.getDepartList()
    this.setState({ isShow:true,value:'',memberModel: {
      'title':'新增人员',
      'isAdd':true,
      'userId':'',
      'version':'',
      'status':'',
      'nickName':'',
      'userName':'',
      'sex':'',
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
    }})
  }
  onSave(){
    const { actions } = this.props
    const self =this
    const param={
      'dispatcher':1001,
      'isAdd':this.state.memberModel.isAdd,
      'title':this.state.memberModel.title,
      'userType':this.state.memberModel.isAdd?1:6,
      'nickName':this.state.memberModel.nickName,
      'userName':this.state.memberModel.userName,
      'userId':this.state.memberModel.userId,
      'version':this.state.memberModel.version,
      'status':this.state.memberModel.status,
      'sex':this.state.memberModel.sex,
      'duties':this.state.memberModel.duties,
      'birthday':this.state.memberModel.birthday?(Date.parse(new Date(this.state.memberModel.birthday.time)))/1000:'',
      'idCard':this.state.memberModel.idCard,
      'entryTime':this.state.memberModel.entryTime?(Date.parse(new Date(this.state.memberModel.entryTime.time)))/1000:'',
      'jobNumber':this.state.memberModel.jobNumber,
      'landLine':this.state.memberModel.landLine,
      'tel':this.state.memberModel.tel,
      'mail':this.state.memberModel.mail,
      'address':this.state.memberModel.address,
      'departId':this.state.memberModel.departId,
      'roleId':this.state.memberModel.roleId
    }
    
    this.state.memberModel.isAdd?actions.addMember(param).then(function(){
      self.getMemberList(1)   
      self.setState({isShow:false})   
    }, function(){
      console.log('新增失败member')
    }):actions.editMember(param).then(function(){
      self.getMemberList(1)
      self.setState({isShow:false}) 
    }, function(){
      console.log('编辑失败member')
    })
  }
  getFormData(data) {
    this.setState({ memberModel: {
      'title':this.state.memberModel.title,
      'isAdd':this.state.memberModel.isAdd,
      'userId':this.state.memberModel.userId,
      'version':this.state.memberModel.version,
      'status':this.state.memberModel.status,
      'nickName':data.nickName,
      'userName':data.userName,
      'sex':data.frequency==='男'?0:1,
      'duties':data.duties,
      'birthday':data.birthday,
      'idCard':data.idCard,
      'entryTime':data.entryTime,
      'jobNumber':data.jobNumber,
      'landLine':data.landLine,
      'tel':data.tel,
      'mail':data.mail,
      'address':data.address,
      'departId':data.departId,
      'roleId':data.roleId
    }})
  }
     //关闭弹出框
  onCloseModal(){
    this.setState({
      isShow:false
    })
  }

  render() {
    const { members,roles,duties,departments} = this.props
    const personDetails=this.state.personDetails

    return (
      <div className="ui grid right_content">
            <WarningModal 
              onClose={this.colseDeleteModal}
              onSave={this.submitDeleteMember}
              isOpened={this.state.isDeleteShow}
              title='确认禁用该人员'
              content='您确认要禁用该人员?禁用后用户将不可登录本系统，但是资料会被系统保存，如需要可以恢复正常状态'
            />
            <WarningModal 
              onClose={this.colseRecModal}
              onSave={this.submitRecMember}
              isOpened={this.state.isRecShow}
              title='确认恢复该人员'
              content='您确认要恢复该人员?恢复到正常状态的人员可正常登录和使用本系统'
            />
            <ConfirmModal
             onClose={this.onCloseModal}
             onSave={this.onSave}
             getFormData={this.getFormData}
             title={this.state.memberModel.title}
             isOpened={this.state.isShow}
             id="editMemberPanel"
             ref="form">
            <div className="three fields">
              <Input 
                name="userName"
                label="账户名"
                placeholder="账号名"
                fieldClassName="field required"
                value={this.state.memberModel.userName}
                validations="minLength: 1,maxLength: 20,isAlphanumeric"
                validationErrors={{
                  minLength: '不能为空',
                  maxLength: '不能超过20字',
                  isAlphanumeric:'必须为英文字符或者数字'
                }}
                required/>
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
              <RadioGroup 
                name="frequency" 
                value={this.state.memberModel.sex==0?'男':'女'} 
                title="性别"
                items={['男', '女']} 
                required/>
            </div>
               <div className="two fields">
                  <Dropdowns 
                    name="departId"
                    label="部门"
                    placeholder="请选择部门"
                    multiple={false}
                    isChildren={true}
                    fieldClassName="field required"
                    value={this.state.memberModel.departId}
                    itemList={departments.items[0].isChildren?departments.items:null}
                    required/>
                  <Dropdowns 
                    name="roleId"
                    label="角色"
                    placeholder="角色"
                    multiple={true}
                    fieldClassName="field required"
                    value={this.state.memberModel.roleId}
                    itemList = {roles.items!=null?roles.items.roleList:null}
                    required/>
                  
              </div>
              <div className="three fields">
              <MyDate
                name="birthday"
                label ="出生年月"
                fieldClassName ="field"
                value ={this.state.memberModel.birthday}
              />
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
                <Dropdowns 
                  name="duties"
                  label="职务"
                  placeholder="职务"
                  fieldClassName="field"
                  value={this.state.memberModel.duties}
                  itemList = {duties.items!=null?duties.items:null}
                  />
          </div>                  
               
                  <div className="three fields">
                    <Input 
                      name="jobNumber"
                      label="工号"
                      placeholder="工号"
                      fieldClassName="field"
                      value={this.state.memberModel.jobNumber}
                      validations={{
                        maxLength: 20,
                        isAlphanumeric:true
                      }}
                      validationErrors={{
                        maxLength: '不能超过20字',
                        isAlphanumeric:'不能为汉字'
                      }}
                      />
                      <Input 
                      name="mail"
                      label="邮箱"
                      placeholder="邮箱"
                      fieldClassName="field"
                      value={this.state.memberModel.mail}
                      validations={{
                        maxLength: 20,
                        isEmail:true
                      }}
                      validationErrors={{
                        maxLength: '不能超过20字',
                        isEmail:'请输入合法的邮箱'
                      }}/>
                      <MyDate 
                      name="entryTime"
                      label="入职时间"
                      fieldClassName="field"
                      value={this.state.memberModel.entryTime}/>
                  </div>
                  <div className="three fields">
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
        <ConfirmModal
          onClose={this.closeDetail}
          title='人员信息'
          isOpened={this.state.isShowPerson}
          isNotNeedAction={true}
        > 
          <div className="ui segment">
            <div className="clearfix margin-top">
              <div className="avatar pull-left">
              <p>
                <img src={defaultAvatar} width="120" height="120"/>
              </p>
              <p className="avatar-txt-margin">
                <a className="ng-isolate-scope">{personDetails.userName}</a>
              </p>
              </div>
            </div>
            <div className="summary">
              <p1 className="ng-binding">
                <div className="ui tag label green mini">{personDetails.statusName}</div> 
              </p1>
            </div>
            <div className="summary">
              <p1 className="ng-binding">
                <span><i className="icon phone"></i>{personDetails.tel}</span> 
              </p1>
            </div>
            <div className="summary">
              <p1 className="ng-binding">
                <span><i className="icon mail"></i>{personDetails.mail}</span> 
              </p1>
            </div>
            <div className="summary">
              <p1 className="ng-binding">
                <span><i className="icon marker"></i>{personDetails.address}</span> 
              </p1>
            </div>
            <div className="summary">
              <p1 className="ng-binding">
                <span><i className="icon sitemap"></i>{personDetails.departName}</span> 
              </p1>
            </div>
            
            <div className="clearDiv"></div>
            <ul className="secure-set-list list-unstyled">
              <li ng-repeat="item in items list-unstyled" className="ng-scope">
                <div className="set-list-left pull-left">
                  <b ng-bind="item.title" className="ng-binding">简介：</b>
                </div>
                <div className="set-list-mid">
                  <div className="inner ng-binding" ng-bind-html="item.description">
                    该员工当前的职务为{personDetails.dutiesName},拥有的权限包括{personDetails.roleNames}。
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
        </ConfirmModal>
        <Sidebar />
            <div className=" sixteen wide column right_content">
                <div className="stretched column content">
                    <div>
                        <h4 className="ui dividing header " style={{clear:'both'}}>
                <div className="title">人员管理
                </div>
                
                <div className="ui modify" style={{float:'right',color:'#2185d0',height:35,lineHeight:'35px',cursor: 'pointer'}} onClick={this.exactSearchModal}>
                  <i className="find icon"></i>
                </div>
                <div className="ui flowing popup transition hidden">
                  <div className="ui divided center aligned">
                    <div className="">
                      高级搜索
                    </div>
                  </div>  
                </div>
                <div className="ui left icon mini input"> 
                  <i className="search icon"></i>                  
                  <input onChange={e=>this.searchNames(e)} type="text" placeholder="账户名/姓名"/>
                </div>
                <button className="ui small basic button right floated blue" onClick={this.handleOpen}><i
                  className="icon plus"></i>新增
                </button>
              </h4>
              
              <div className="exactSearchList" style={{height:60,display:'none'}}>
                <Formsy.Form className="ui form" ref="searchForm" onChange={this.getSearchFormData}>
                  <div className="inline fields">
                    <Dropdowns 
                    name="searchDepartId"
                    label="部门"
                    isChildren={true}
                    placeholder="请选择部门"
                    multiple={false}
                    fieldClassName="field"
                    itemList={departments.items[0].isChildren?departments.items:null}
                    />
                    <Dropdowns 
                    name="searchRoleId"
                    label="角色"
                    placeholder="角色"
                    multiple={true}
                    fieldClassName="field"
                    itemList = {roles.items!=null?roles.items.roleList:null}
                    required/>
                  </div>
                </Formsy.Form>
              </div>

              <div className="ui segment" style={{marginTop:0}}>
                <div className="scroll_table">
                  <table className="ui single line table">
                      <thead>
                          <tr>
                              <th>姓名</th>
                              <th><a className="userdetails" onClick={e=>this.sortList()}>账户名<i className="dropdown icon"></i> </a></th>
                              <th>座机</th>
                              <th>手机</th>
                              <th>邮箱</th>
                              <th>部门</th>
                              <th>角色</th>
                              <th>职务</th>
                              <th>状态</th>
                              <th>操作</th>
                          </tr>
                      </thead>
                      <tbody>
                          {members.items != null&&
                            members.items.userVOList.map((member,i)=>
                                <tr key={i}>
                                <td><img className="ui avatar image" width="30" src={defaultAvatar}/><a className="userdetails" onClick={e=>this.memberDetail(member)}>{member.nickName}</a></td>
                                    <td>{member.userName}</td>
                                    <td>{member.landLine}</td>
                                    <td>{member.tel}</td>   
                                    <td>{member.mail}</td>

                                    <td>{member.departName}</td>
                                    <td>{member.roleNames}</td>
                                    <td>{member.dutiesName}</td>
                                    <td>                            
                                      {(() => {
                                        let status =member.status
                                        switch (status) {
                                          case 3:return <button className='ui  button mini blue'  onClick={e=>this.deleteMember(member)}>正常</button>
                                          case 2:return <button className='ui  button mini red'  onClick={e=>this.recieveMember(member)}>禁用</button>
                                        }
                                      })()}
                                    </td>
                                    <td>
                                        <button className="ui small basic blue button" onClick={e=>this.editMember(member)}> <i className="edit icon"></i> 编辑</button>
                                    </td>
                                </tr>
                            )
                          }
                      </tbody>
                  </table> 
                  </div>
                  <div style ={{height:38,marginTop:5}}>               
                      <Pager pages={members.items!=null?members.items.totalPage:0} current={this.state.current} onChange={this.pageChange} pageSize={10}/>
                  </div>
                      
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}