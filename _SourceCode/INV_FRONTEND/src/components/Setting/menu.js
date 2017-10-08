import React, { Component,PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/setting'
import { TreeBeard } from '../Common/tree/treeBeard'
import defaultDecorators from './menus/decorators'
import WarningModal from '../Common/warningModal'
import ConfirmModal from '../Common/confirmModal'
import Input from '../Common/form/input'
import Sidebar from './sidebar'
import Textarea from '../Common/form/textarea'
import Dropdowns from '../Common/form/dropdown'

const mapStateToProps = state =>{
  return {  
    menuList: state.menuList.toJS()
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
@connect(mapStateToProps,mapDispatchToProps)
export default class Menus extends Component {
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

    this.state ={
      isShow:false,
      isDeleteShow: false,
      activeNote: {
        menuName:'',
        description:'',
        id: ''
      },
      deleteNote: null,
      cursor:'',
      current:1, 
      menuType: [
        {
          name:'顶级菜单',
          id: '1'
        },
        {
          name:'子菜单',
          id: '2'
        },
        {
          name:'按钮',
          id: '3'
        },
        {
          name:'超链接',
          id: '4'
        }
      ],
      details:{
        menuName:'招商系统',
        menuUrl:'',
        menuImg:'',
        menuType:'顶级菜单',
        menuDetails:''
      }
    }
  }

  //定义参数的类型
  static propTypes = {
    actions: PropTypes.object.isRequired,
    menuList: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { menuList} = this.props
    if(!menuList.menu[0].isChildren){
      this.getMenusList()
    }
  }

  //菜单管理中菜单列表数据，是树形结构
  getMenusList(){
    const { actions } = this.props
    const options = {   
      'dispatcher':1201,
      'funType':4,
      'menuId': 0
    }
    actions.getMenusList(options)
  }

  //点击新增，显示新增弹出框
  addModal(){
    this.setState({
      isShow:true, 
      activeNote: {
        title:'新增菜单',
        isAdd:true,
        menuName: '',
        description: '',
        parentId: this.state.cursor.id,
        iconPath: '',
        menuUrl : '',
        type: '',
        sort: '',
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
        title:'修改菜单',
        isAdd:false,
        id: this.state.cursor.id,
        version: this.state.cursor.version,
        menuName: this.state.cursor.menuName,
        iconPath: this.state.cursor.iconPath,
        menuUrl : this.state.cursor.menuUrl,
        type: this.state.cursor.type,
        sort: this.state.cursor.sort,
        description: this.state.cursor.description,
        parentId: this.state.cursor.parentId
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
      'dispatcher':1201,
      'funType':this.state.activeNote.isAdd?1:2,
      'menuId': this.state.activeNote.id,
      'version': this.state.activeNote.isAdd?'':this.state.activeNote.version,
      'menuName':this.state.activeNote.menuName,
      'iconPath': this.state.activeNote.iconPath,
      'menuUrl' : this.state.activeNote.menuUrl,
      'type': this.state.activeNote.type,
      'sort': this.state.activeNote.sort,
      'parentId':this.state.activeNote.parentId,
      'description':this.state.activeNote.description
    }
    this.state.activeNote.isAdd?actions.addMenu(param).then(function(){
      self.getMenusList()
      self.closeModal()
    },function(){
      console.log('新增失败')
    }):actions.editMenu(param).then(function(){
      self.getMenusList()
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
      'dispatcher':1201,
      'funType': 3,
      'menuId': this.state.deleteNote?this.state.deleteNote.id:null,
      'version':this.state.deleteNote.version
    }
    actions.deleteMenu(param).then(function(){
      self.getMenusList()
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
    this.setState({ 
      activeNote: {
        'title': this.state.activeNote.title,
        'isAdd': this.state.activeNote.isAdd,
        'id': this.state.activeNote.id,
        'version': this.state.activeNote.isAdd?'':this.state.activeNote.version,
        'menuName': data.menuName,
        'iconPath': data.iconPath,
        'menuUrl' : data.menuUrl,
        'type': data.type,
        'sort': data.sort,
        'parentId':this.state.activeNote.parentId,
        'description':data.description
      }
    })
  }

  onChangeMember(){
    let menuType=''
    if(this.state.cursor.type=='1'){
      menuType='顶级菜单'
    }
    if (this.state.cursor.type=='2') {
      menuType='子菜单'
    }
    if (this.state.cursor.type=='3') {
      menuType='按钮'
    }
    if (this.state.cursor.type=='4') {
      menuType='超链接'
    }
    this.setState({
      details:
      {
        menuName:this.state.cursor.menuName,
        menuUrl:this.state.cursor.menuUrl,
        menuImg:'right floated icon '+this.state.cursor.iconPath,
        menuType:menuType,
        menuDetails:this.state.cursor.description
      }
    })
    console.log(this.state.details)
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

  render() {
    const { menuList } = this.props
    defaultDecorators.editModal = this.editModal
    defaultDecorators.addModal = this.addModal
    defaultDecorators.deleteModal = this.deleteModal
    defaultDecorators.onChangeMember = this.onChangeMember
    const details=this.state.details
    return (
      <div className="ui grid right_content">
        <Sidebar />
        <div className="sixteen wide column right_content">
            <h4 className="ui dividing header ">
              <div className="title">菜单管理</div>
            </h4>
            <div className="ui segment">
              <div className="ui grid">
                <div className="four wide column">
                  <TreeBeard
                    data={menuList.menu}
                    onToggle={this.onToggle}
                    decorators={defaultDecorators}
                    onMouseOut={this.onMouseOut}
                    onMouseOver={this.onMouseOver}
                    />
                </div>
                <div className="ui segment twelve wide column">
                  <h4 className="ui dividing header ">
                    <div className="title">菜单详情</div>
                  </h4>
                  <div className="ui card large">
                    <div className="content">
                      <i className={details.menuImg}></i>
                      <div className="header">{details.menuName}</div>
                      <div className="meta">
                        <span>{details.menuType}</span>
                        <a>{details.menuUrl}</a>
                      </div>
                      <div className="description">{details.menuDetails}</div>
                    </div>
                  </div>
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
          <div className="two fields">
            <Input 
              name="menuName"
              label="菜单名称"
              placeholder="菜单名称"
              fieldClassName="field required"
              value={this.state.activeNote.menuName}
              validations={{
                minLength: 2,
                maxLength: 50
              }}
              validationErrors={{
                minLength: '不能小于2个字',
                maxLength: '不能超过50字'
              }}
              required/>
            <Input 
              name="menuUrl"
              label="菜单地址"
              placeholder="菜单地址"
              fieldClassName="field required"
              value={this.state.activeNote.menuUrl}
              validations={{
                minLength: 1,
                maxLength: 50
              }}
              validationErrors={{
                minLength: '不能小于2个字',
                maxLength: '不能超过50字'
              }}
              required/> 
          </div>
          <div className="three fields">
            <Input 
              name="iconPath"
              label="菜单图标"
              placeholder="菜单图标"
              fieldClassName="field required"
              value={this.state.activeNote.iconPath}
              validations={{
                minLength: 2,
                maxLength: 50
              }}
              validationErrors={{
                minLength: '不能小于2个字',
                maxLength: '不能超过50字'
              }}
              required/>
            
              <Dropdowns 
              name="type"
              label="菜单类型"
              placeholder="菜单类型"
              fieldClassName="field required"
              value={this.state.activeNote.type}
              itemList = {this.state.menuType}
              required/>

              <Input 
              name="sort"
              label="排序字段"
              placeholder="排序字段"
              fieldClassName="field required"
              value={this.state.activeNote.sort}
              validations="isInt"
              validationErrors={{
                isInt: '必须是数字',
                required: '不能为空'
              }}
              required/>
          </div>
          <Textarea 
            name="description"
            label="菜单描述"
            fieldClassName="field"
            placeholder="菜单描述"
            value={this.state.activeNote.description}
            />
        </ConfirmModal>
        <WarningModal 
          onClose={this.closeDeleteModal}
          onSave={this.submitDeleteData}
          isOpened={this.state.isDeleteShow}
          title='确认删除该菜单'
          content='您确认要删除该菜单?删除后不可恢复'
        />
      </div>
    )
  }
}