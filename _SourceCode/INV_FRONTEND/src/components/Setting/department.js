import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/setting'
import { TreeBeard } from '../Common/tree/treeBeard'
import defaultDecorators from './department/decorators'
import WarningModal from '../Common/warningModal'
import ConfirmModal from '../Common/confirmModal'
import Table from '../Common/Table'
import Input from '../Common/form/input'
import Textarea from '../Common/form/textarea'
import Sidebar from './sidebar'
import defaultAvatar from '../../assets/images/elyse.png'

const mapStateToProps = state =>{
  return {  
    members: state.members.toJS(),
    departments: state.departments.toJS()
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}


@connect(mapStateToProps,mapDispatchToProps)

export default class Department extends Component {
  constructor(props){
    super(props)
    this.onToggle = this.onToggle.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onChangeMember = this.onChangeMember.bind(this)
    this.addModal = this.addModal.bind(this)
    this.editModal = this.editModal.bind(this)
    this.deleteModal = this.deleteModal.bind(this)    
    this.getFormData = this.getFormData.bind(this)
    this.submitData = this.submitData.bind(this)
    this.submitDeleteData = this.submitDeleteData.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.closeDeleteModal = this.closeDeleteModal.bind(this)
    this.pageChange = this.pageChange.bind(this)
    this.personModal = this.personModal.bind(this)
    this.closePersonModal = this.closePersonModal.bind(this)

    this.state ={
      isShow:false,
      isDeleteShow: false,
      activeNote: {
        departName:'',
        description:'',
        id: ''
      },
      departmentName:'所有',
      deleteNote: null,
      cursor:'',
      current:1,
      personDetails:'123' 
    }
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    members: PropTypes.object.isRequired,
    departments: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { members, departments} = this.props
    if(!departments.items[0].isChildren){
      this.getDepartmentList()
    }

    if(members.items==null){
      this.getMemberList('')
    }
  }

  getMemberList(id) {
    const { actions } = this.props
    const memberOptions = {
      'dispatcher':1001,
      'userType':8,
      'pageNo': 1,
      'pageSize':10,
      'departId':id
    }
    actions.getMemberList(memberOptions)
  }

  getDepartmentList(){
    const { actions } = this.props
    const options = {
      'dispatcher':1300,
      'type':1,
      'id': 0
    }
    actions.getDepartmentList(options)
  }

  //点击新增，显示新增弹出框
  addModal(){
    this.setState({ 
      isShow:true, 
      activeNote: {
        title:'新增部门',
        isAdd:true,
        departName: '',
        description: '',
        parentId: this.state.cursor.id,
        version: '',
        id: ''
      }
    })
  }

  //点击修改，显示修改弹出框
  editModal(){
    this.setState({ 
      isShow:true,
      activeNote: {
        title:'修改部门',
        isAdd:false,
        departName: this.state.cursor.departName,
        description: this.state.cursor.description,
        parentId: this.state.cursor.parentId,
        version: this.state.cursor.version,
        id: this.state.cursor.id
      }
    })
  }  

  //点击删除，显示删除弹出框
  deleteModal(){
    this.setState({
      isDeleteShow:true, 
      deleteNote: this.state.cursor 
    })
  }

  //提交增加或修改的数据功能
  submitData(){
    const { actions } = this.props
    const self=this
    const param={
      'dispatcher':1300,
      'type':this.state.activeNote.isAdd?2:3,
      'id': this.state.activeNote.id,
      'version': this.state.activeNote.isAdd?'':this.state.activeNote.version,
      'departName':this.state.activeNote.departName,
      'parentId':this.state.activeNote.parentId,
      'description':this.state.activeNote.description
    }
    this.state.activeNote.isAdd?actions.addDepartment(param).then(function(){
      self.getDepartmentList()
      self.closeModal()
    },function(){
      console.log('新增失败')
    }):actions.editDepartment(param).then(function(){
      self.getDepartmentList()
      self.closeModal()
    },function(){
      console.log('修改失败')
    })
    
  }

  //提交删除的数据
  submitDeleteData(){
    const { actions } = this.props
    const self=this
    const param={
      'dispatcher':1300,
      'type': 4,
      'id': this.state.deleteNote?this.state.deleteNote.id:null,
      'version':this.state.deleteNote.version
    }
    actions.deleteDepartment(param).then(function(){
      self.getDepartmentList()
      self.closeDeleteModal()
    },function(){
      console.log('删除失败')
    })
  }

  //关闭增加或修改的弹出框
  closeModal(){
    this.setState({
      isShow:false
    })
  }

  //关闭删除的弹出框
  closeDeleteModal(){
    this.setState({
      isDeleteShow:false
    })
  }
 
  getFormData(data) {
    this.setState({ activeNote: {
      title:this.state.activeNote.title,
      isAdd:this.state.activeNote.isAdd,
      departName: data.departName,
      description: data.description,
      parentId: this.state.activeNote.parentId,
      version: this.state.activeNote.version,
      id: this.state.activeNote.id
    }})
  }

  //改变页数
  pageChange(e){
    this.setState({
      current:e
    })
    const { actions } = this.props
    const options = {
      'dispatcher':1001,
      'userType':8,
      'pageNo': e,
      'pageSize':10,
      'departId':this.state.departId
    }
    actions.getMemberList(options)    
  }

  onChangeMember(e){
    e.stopPropagation()
    this.setState( Object.assign(this.state,{
      departmentName:this.state.cursor.departName
    }))
    this.getMemberList(this.state.cursor.id)
  }

  onToggle(node, toggled){
    if(this.state.cursor){
      this.setState({ cursor: {
        active :false
      }})
    }
    node.active = true
    if(node.childrenList){ 
      node.toggled = toggled
    }
    this.setState({ cursor: node })
  }

  onMouseOut(node){
    node.isOver = false
    this.setState({ cursor: node })
  }

  onMouseOver(node){
    node.isOver = true
    this.setState({ cursor: node })
  }

  personModal(member){
    this.setState({
      isShowPerson:true,
      personDetails:member
    })
    console.log(this.state.personDetails)
  }

  closePersonModal(){
    this.setState({
      isShowPerson:false
    })
  }

  render() {

    const { departments, members } = this.props
    defaultDecorators.editModal = this.editModal
    defaultDecorators.addModal = this.addModal
    defaultDecorators.deleteModal = this.deleteModal
    defaultDecorators.onChangeMember = this.onChangeMember
    const personDetails=this.state.personDetails
    const tableList=members.items!=null&&members.items.userVOList.map((member,i)=>
          <tr key={member.id}>
            <td>
              <img className="ui avatar image" width="30" src={defaultAvatar}/>
              <a className="userdetails" onClick={e=>this.personModal(member)}>{member.nickName}</a>
            </td>
            <td>{member.userName}</td>
            <td>{member.landLine}</td>
            <td>{member.tel}</td>   
            <td>{member.mail}</td>
            <td>{member.roleNames}</td>
          </tr>
        )
    return (
      <div className="ui grid right_content">
        <Sidebar />
        <div className="sixteen wide column right_content">
            <h4 className="ui dividing header ">
                <div className="title">部门管理</div>
            </h4>
            <div className="ui segment">
              <div className="ui grid">
                <div className="four wide column">
                  <TreeBeard
                    data={departments.items}
                    onToggle={this.onToggle}
                    decorators={defaultDecorators}
                    onMouseOut={this.onMouseOut}
                    onMouseOver={this.onMouseOver}
                    />
                </div>
                <div className="ui segment twelve wide column">
                  <h4 className="ui dividing header ">
                    <div className="title">{this.state.departmentName}的员工</div>
                  </h4>
                  
                  <Table
                    totalPage={members.items!=null&&members.items.totalPage}
                    current={this.state.current}
                    pageSize='10' 
                    pageChange={this.pageChange}
                  >
                    <thead>
                      <tr>
                        <th>姓名</th>
                        <th>账户名</th>
                        <th>座机</th>
                        <th>手机</th>
                        <th>邮箱</th>
                        <th>角色</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableList}
                    </tbody>
                  </Table> 
                </div>
              </div>
            </div>
        </div>
        <ConfirmModal
           onClose={this.closeModal}
           onSave={this.submitData}
           getFormData={this.getFormData}
           title={this.state.activeNote.title}
           isOpened={this.state.isShow}
        >
          <Input 
            name="departName"
            label="部门名称"
            placeholder="部门名称"
            fieldClassName="field required"
            value={this.state.activeNote.departName}
            validations={{
              minLength: 1,
              maxLength: 50
            }}
            validationErrors={{
              minLength: '不能为空',
              maxLength: '不能超过50字'
            }}
            required/>
          <Textarea 
            name="description"
            label="部门描述"
            fieldClassName="field"
            placeholder="部门描述"
            value={this.state.activeNote.description}
            />
        </ConfirmModal>

        <ConfirmModal
          onClose={this.closePersonModal}
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
                    该成员对工作很负责，与同事相处和睦，是一个很值得培养的人才
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
        </ConfirmModal>

        <WarningModal
          onClose={this.closeDeleteModal}
          onSave={this.submitDeleteData}
          isOpened={this.state.isDeleteShow}
          title='确认删除'
          content='您确认要删除该部门?删除后不可恢复,且删除前请把该部门人员转移到其他部门'
        />
      </div>
    )
  }
}