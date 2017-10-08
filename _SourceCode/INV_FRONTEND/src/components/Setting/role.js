import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions/setting/role'
import { TreeBeard } from '../Common/tree/treeBeard'
import { bindActionCreators } from 'redux'
import Input from '../Common/form/input'
import Textarea from '../Common/form/textarea'
import Sidebar from './sidebar'
import Table from '../Common/Table'
import ConfirmModal from '../Common/confirmModal'
import WarningModal from '../Common/warningModal'
import roleMenuNode from './roleComponents/roleMenuComponent'

const mapStateToProps = state => {
  return {
    roles: state.roles.toJS(),
    roleMenu: state.roleMenu.toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Role extends Component {
  constructor(props) {
    super(props)
    this.onToggle = this.onToggle.bind(this)
    this.pageChange = this.pageChange.bind(this)
    this.onSave = this.onSave.bind(this) 
    this.onCloseModal = this.onCloseModal.bind(this)
    this.getFormData = this.getFormData.bind(this)
    this.onClickCheckbox = this.onClickCheckbox.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleCheckChild = this.handleCheckChild.bind(this)
    this.getRoleList = this.getRoleList.bind(this)
    this.getMenuList = this.getMenuList.bind(this)
    this.searchNames = this.searchNames.bind(this)
    this.getCheckedMenus = this.getCheckedMenus.bind(this)
    this.submitDeleteRole = this.submitDeleteRole.bind(this)
    this.colseDeleteModal = this.colseDeleteModal.bind(this)

    this.state = {
      isShow:false,
      isDeleteShow: false,
      current:1,
      pageSize:8,
      searchWord:'',
      title:'新增角色(默认)', 
      menus: {
        menuName:'招商系统',
        isChildren:false
      },
      activeNote: {
        roleName:'',
        description:''
      },
      deleteRole:''
    }
  }

  //定义参数的类型
  static propTypes = {
    actions: PropTypes.object.isRequired,
    values: PropTypes.object,
    pageNum: PropTypes.number,
    current: PropTypes.number,
    roleMenu: PropTypes.object,
    roles: PropTypes.object
  }
  
  //加载列表数据
  componentWillMount() {
    this.getRoleList(1)
    if(!this.state.menus.isChildren){
      this.getMenuList('')
    }
  }

  //加载角色列表
  getRoleList(current) {
    const { actions } = this.props
    const self  = this
    this.setState({
      current:current
    })
    const getRoleListParam = {  
      dispatcher: 1101,
      type: 4,
      pageNum: current,
      pageSize: 8,
      keyWords: self.searchWord
    }
    actions.getRoleList(getRoleListParam)
  }

  //加载菜单列表
  getMenuList(roleId) {
    const self = this
    const { actions } = this.props
    const getMenuListParam = {  
      dispatcher: 1401,
      type: 6,
      roleId: roleId
    }
    actions.getMenuList(getMenuListParam).then(function(){
      const { roleMenu } = self.props
      const menus = roleMenu.roleMenuList
      self.setState({
        menus: menus
      })
    })
  }

  //模糊搜索
  searchNames(e) {
    this.searchWord = e.target.value
    this.getRoleList(1)
  }

  //改变页数
  pageChange(e){
    this.getRoleList(e)
  }

  //新增角色
  handleAdd = () => {
    this.getMenuList('')
    this.setState({
      isShow:true,
      title:'新增角色', 
      activeNote: {
        roleName:'',
        description:''
      }
    })

  }

  //修改角色
  handleModify = (role) => {
    this.getMenuList(role.id)
    let newState = Object.assign(this.state,{
      isShow:true,
      title:'修改角色',
      activeNote: role     
    })
    this.setState(newState)
  }

  //删除角色
  deleteModal = (role) => {
    this.setState({
      isDeleteShow:true,
      deleteRole:role
    })
  }
  colseDeleteModal=() => {
    this.setState({
      isDeleteShow:false
    })
  }
  //确认删除角色
  submitDeleteRole = () => {
    let self = this
    const stringArray = [
      {
        id: this.state.deleteRole.id,
        version: this.state.deleteRole.version
      }
    ]
    const { actions } = this.props
    const param = {
      dispatcher: 1101,
      _platform: 'pc',
      type: 3,
      roleList: JSON.stringify(stringArray)
    }
    actions.deleteRole(param).then(function(){
      self.getRoleList(1)
      self.colseDeleteModal()
    },function(){
      console.log('删除失败')
    })
    
  }

  getCheckedMenus(list, menuIds) {
    let self = this
    list.forEach(function (item, index, array) {
      if(item.isHidden==1){
        menuIds=menuIds+','+item.id
      }
      if(item.isChildren){
        menuIds = self.getCheckedMenus(item.childrenList, menuIds)
      }
    })
    return menuIds
  }
 
  onSave(){
    let self = this
    const { actions} = this.props
    const values  = this.state.activeNote    
    const title  = this.state.title
    let menuIds = ''
    if(this.state.menus.isHidden==1){
      menuIds = menuIds+this.state.menus.id
    }
    if(this.state.menus.isChildren){
      menuIds = self.getCheckedMenus(this.state.menus.childrenList, menuIds)
    }

    if(title=='新增角色'){
      const param = {
        dispatcher: 1101,      
        type: 1,
        roleName: values.roleName,
        menuIds: menuIds,    
        description: values.description
      }
      actions.addRole(param).then(function(){
        self.getRoleList(1)
        self.onCloseModal()
      }, function(){
        console.log('新增失败')
      })
      
    }else if(title=='修改角色'){
      const param = {
        dispatcher: 1101,      
        type: 2,
        roleName: values.roleName,
        description: values.description,
        menuIds:menuIds,
        roleId: values.id,
        code: values.code,        
        version: values.version
      }
      actions.modifyRole(param).then(function(){
        self.getRoleList(1)
        self.onCloseModal()
      }, function(){
        console.log('修改失败')
      })
    }
    
  }

   //关闭弹出框
  onCloseModal(){
    this.setState({
      isShow:false
    })
  }

  //表单数据的传递
  getFormData(data) {
    this.setState({ activeNote: {
      title:this.state.title,      
      roleName: data.roleName,
      description: data.description,
      version: this.state.activeNote.version,
      id: this.state.activeNote.id
    }})
  }

  //子菜单的显示与隐藏
  onToggle(node, toggled) {
    if (this.state.cursor) {
      this.setState({
        cursor: {
          active: false
        }
      })
    }
    node.active = true
    if (node.childrenList) {
      node.toggled = toggled
    }
    this.setState({cursor: node})
  }

  //子菜单的选中与不选中
  onClickCheckbox(node, isHidden) {
    const self = this
    let menus = self.state.menus
    if(node.id==menus.id){
      menus.isHidden=isHidden
      menus.childrenList =self.handleCheckChild(menus.childrenList, isHidden)
    }else if(menus.isChildren){
      menus.childrenList =self.handleCheck(menus.childrenList, isHidden, node)
    }
    this.setState({
      menus: menus
    })
  }

  handleCheck(list, isHidden,node) {
    const self = this
    if(list){
      list.forEach(function (item, index, array) {
        if(item.id == node.id){
          item.isHidden = isHidden
          if(item.isChildren){
            self.handleCheckChild(item.childrenList, isHidden)
          }
        }else if (item.isChildren){
          self.handleCheck(item.childrenList, isHidden, node)
        }
      })
    }
    return list
  }

  handleCheckChild(list, isHidden){
    const self = this
    if(list){
      list.forEach(function (item, index, array) {
        item.isHidden = isHidden
        if(item.isChildren){
          self.handleCheckChild(item.childrenList, isHidden)
        }
      })
    }
    return list
  }

  render() {
    const { roles } = this.props
    roleMenuNode.onClickCheckbox = this.onClickCheckbox
    const menus = this.state.menus
    const tableList=roles.items != null &&roles.items.roleList.map((role, i)=>
            <tr key={i}>
              <td>{role.code}</td>
              <td>{role.roleName}</td>
              <td>{role.description}</td>
              <td>{role.createReviseTime}</td>
              <td>
                <button className="ui small basic blue button" onClick={e=>this.handleModify(role)}><i
                  className="edit icon"></i> 修改
                </button>
                <button className="ui small basic red button"
                        onClick={e=>this.deleteModal(role)}><i
                  className="delete icon"></i> 删除
                </button>
              </td>
            </tr>
          )
    return (
      <div className="ui grid right_content">
        <ConfirmModal 
          onClose={this.onCloseModal}
          onSave={this.onSave}
          getFormData={this.getFormData}
          title={this.state.title}
          isOpened={this.state.isShow}
          >
          <div className="ui grid">
            <div className="eight wide column">
              <Input  
                fieldClassName="field required"
                name="roleName" 
                type="text" 
                label="角色名称"
                placeholder="角色名称" 
                value={this.state.activeNote.roleName}
                validations={{
                  minLength: 1,
                  maxLength: 10
                }}
                validationErrors={{
                  minLength: '不能为空',
                  maxLength: '不能超过10字'
                }}
                required
              />  
              <Textarea 
                fieldClassName="field"
                name="description" 
                label="详情描述"
                placeholder="详情描述" 
                rows="3" 
                value={this.state.activeNote.description}
                validations={{
                  minLength: 1,
                  maxLength: 50
                }}
                validationErrors={{
                  minLength: '不能为空',
                  maxLength: '不能超过50字'
                }}
              />       
            </div>
            <div className="eight wide column">
              <div className="header" style={{paddingBottom:10}}>
                设置权限
              </div>
              <TreeBeard
                data={menus}
                onToggle={this.onToggle}
                decorators={roleMenuNode}
                />
            </div>
          </div>
        </ConfirmModal>
        <WarningModal 
          onClose={this.colseDeleteModal}
          onSave={this.submitDeleteRole}
          isOpened={this.state.isDeleteShow}
          title='删除角色'
          content='确认要删除?'
        />
        <Sidebar />
        <div className="sixteen wide column right_content">
          <div>
            <h4 className="ui dividing header ">
              <div className="title">角色管理</div>
              <div className="ui left icon mini input">
                <input onChange={e=>this.searchNames(e)} type="text" placeholder="角色搜索..."/>
                <i className="search icon"></i>
              </div>
              <button className="ui small basic button right floated blue" onClick={this.handleAdd}><i
                className="icon plus"></i>新增
              </button>
            </h4>
            <div className="ui segment">
              <Table 
                totalPage={roles.items!=null&&roles.items.totalPage}
                current={this.state.current}
                pageSize='10' 
                pageChange={this.pageChange}
              >
                <thead>
                  <tr>
                    <th>角色编码</th>
                    <th>角色名称</th>
                    <th>角色描述</th>
                    <th>创建时间</th>
                    <th>操作</th>
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
    )
  }
}
