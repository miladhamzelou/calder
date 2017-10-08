import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Dropdown} from 'react-semantify'
import Input from '../Common/form/input'
import Textarea from '../Common/form/textarea'
import ConfirmModal from '../Common/confirmModal'
import WarningModal from '../Common/warningModal'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import jennyAvatar from '../../assets/images/jenny.jpg'
import elliotAvatar from '../../assets/images/elliot.jpg'
import helenAvatar from '../../assets/images/helen.jpg'
import defaultAvatar from '../../assets/images/elyse.png'
import $ from 'jquery'
import Sidebar from './sidebar'
global.$ = global.jQuery = $

const mapStateToProps = state =>{
  return {  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class SharedFiles extends Component {
  constructor(props){
    super(props)
    this.state = {
      isShow:false,
      isDeleteShow:false
    }
    this.addModal = this.addModal.bind(this)
    this.modifyModal = this.modifyModal.bind(this)
    this.deleteModal = this.deleteModal.bind(this)

    this.onSave = this.onSave.bind(this)
    this.submitDelete = this.submitDelete.bind(this)
    this.colseDeleteModal = this.colseDeleteModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  static propTypes = {
  }

  static fetchData(params){
    return [Actions.getArticleList(),Actions.getTagList()]
  }

  componentDidMount() {
    //设置popup
    $('.ui.modify').popup({
      hoverable:true
    })  
    $('.temp').hide()
    $('.ui.dropdown.office').dropdown({
      onChange: function(value, text, $selectedItem) {
        if(value=='1'){
          $('.temp').show()
        }else if (value=='2'){
          $('.temp').hide()
        }
      }
    })
    $('.operate').popup({
      position : 'top center',
      inline: true
    })   
    
  }

  addModal(){
    this.setState({isShow:true})
  }
  modifyModal(){
    //insert coding here..
    this.setState({isShow:true})
  }

  onSave(){ 
    //insert coding here.. 
    this.onCloseModal()
  }
  onCloseModal(){
    this.setState({isShow:false})
  }

  deleteModal(){
    //insert coding here..
    this.setState({isDeleteShow:true})   
  }


  submitDelete() {
    //insert coding here..
    this.colseDeleteModal()
  }
  colseDeleteModal=() => {
    this.setState({isDeleteShow:false})
  }


  exactSearchModal(){
    // $('.exactSearchList').slideToggle()
    $('.exactSearchList').transition({
      animation  : 'scale'
    })
  }

  handleChange(e,option,isAdd=false){
    e.preventDefault()
  }
  render() {
    return (
      <div className="ui grid right_content">
        <Sidebar />
          <div className="sixteen wide column right_content">
          <div className="stretched column content">
            <h3 className="ui dividing header ">
                <div className="title"><i className="laptop alternate icon"></i>非自定义事件（10）</div>
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
                  <input type="text" placeholder="搜索..."/>
                </div> 
                <button className="ui small basic button right floated blue" onClick={this.addModal}><i
                  className="icon plus"></i>新增
                </button>
            </h3>
            <div className="exactSearchList" style={{height:60,display:'none'}}>
              <div className="ui form">
                <div className="inline fields">
                  <div className="field">
                    <label style={{height:38,lineHeight:'38px'}}>时间</label>
                    <input type="date" placeholder="时间" />
                  </div>
                  <div className="field">
                    <label style={{height:38,lineHeight:'38px'}}>参与人</label>
                    <Dropdown className="item ui selection dropdown mini right" init={true}>
                        <input name="states" type="hidden"/>
                          <i className="dropdown icon"></i>
                          <div className="default text">参与人</div>
                          <div className="menu">
                            <a className="item" data-value="1">李易峰</a>
                            <a className="item" data-value="2">黄渤</a>
                            <a className="item" data-value="3">张三丰</a>
                          </div>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui segment">
              <table className="ui single line table">
                <thead>
                  <tr>
                    <th >名称</th>
                    <th >参与人</th>
                    <th >开始时间</th>
                    <th >结束时间</th>
                    <th >状态</th>
                    <th >操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a className="fdd_file_name">会议纪要上传</a></td>
                    <td>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={jennyAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={helenAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={defaultAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                    </td>
                    <td>昨天10:30</td>
                    <td>今天11:39</td>
                    <td><div className="ui tag label green mini">已完成</div></td>
                    <td>
                      <i className="edit alternate icon link operate" data-content="编辑"  data-variation="mini" onClick={this.modifyModal}></i>
                      <i className="send alternate icon link operate" data-content="确认发送" data-variation="mini"></i>
                      <i className="minus red square icon link operate" data-content="删除" data-variation="mini" onClick={this.deleteModal}></i>  
                    </td>
                  </tr>
                  <tr>
                    <td><a className="fdd_file_name">出差</a></td>
                    <td>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={jennyAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={helenAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                    </td>
                    <td>昨天10:30</td>
                    <td>今天12:39</td>
                    <td><div className="ui tag label green mini">已完成</div></td>
                    <td>
                      <i className="edit alternate icon link operate" data-content="编辑" data-variation="mini" onClick={this.modifyModal}></i>
                      <i className="send alternate icon link operate" data-content="确认发送" data-variation="mini"></i>
                      <i className="minus red square icon link operate" data-content="删除" data-variation="mini" onClick={this.deleteModal}></i>  
                    </td>
                  </tr>
                  <tr>
                    <td><a className="fdd_file_name">出差报告</a></td>
                    <td>
                      <img className="ui avatar image" src={helenAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={jennyAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                    </td>
                    <td>昨天10:30</td>
                    <td>今天11:39</td>
                    <td><div className="ui tag label orange mini">未开始</div></td>
                    <td>
                      <i className="edit alternate icon link operate green" data-content="编辑" data-variation="mini" onClick={this.modifyModal}></i>
                      <i className="send alternate icon link operate green" data-content="确认发送" data-variation="mini"></i>
                      <i className="minus red square icon link operate" data-content="删除" data-variation="mini" onClick={this.deleteModal}></i>  
                    </td>
                  </tr>
                  <tr>
                    <td><a className="fdd_file_name">来访预报</a></td>
                    <td>
                      <img className="ui avatar image" src={defaultAvatar} />
                      <i className="alarm outline alternate icon link operate blue" data-content="未完成，点击再次提醒"  data-variation="mini"></i>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={jennyAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                    </td>
                    <td>昨天10:30</td>
                    <td>今天11:39</td>
                    <td><div className="ui tag label blue mini">进行中</div></td>
                    <td>
                      <i className="edit alternate icon link operate" data-content="编辑" data-variation="mini" onClick={this.modifyModal}></i>
                      <i className="send alternate icon link operate" data-content="确认发送" data-variation="mini"></i>
                      <i className="minus red square icon link operate" data-content="删除" data-variation="mini" onClick={this.deleteModal}></i>  
                    </td>
                  </tr>
                  <tr>
                    <td><a className="fdd_file_name">会议预报</a></td>
                    <td>
                      <img className="ui avatar image" src={helenAvatar} />
                      <i className="remove alternate icon link operate red" data-content="未完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={defaultAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="未完成，点击再次提醒"  data-variation="mini"></i>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="remove alternate icon link operate red" data-content="未完成"  data-variation="mini"></i>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="checkmark alternate icon link operate green" data-content="已完成"  data-variation="mini"></i>
                    </td>
                    <td>昨天10:30 </td>
                    <td>今天11:39</td>
                    <td><div className="ui tag label red mini">已过期</div></td>
                    <td>
                      <i className="edit alternate icon link operate green" data-content="编辑" data-variation="mini" onClick={this.modifyModal}></i>
                      <i className="send alternate icon link operate" data-content="确认发送" data-variation="mini"></i>
                      <i className="minus red square icon link operate" data-content="删除" data-variation="mini" onClick={this.deleteModal}></i>  
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style ={{height:38}}>               
                <Pager pages={10} current={4} pageSize={5}/>
              </div>
            </div>
          </div>
        </div>
        <WarningModal 
          onClose={this.colseDeleteModal}
                      onSave={this.submitDelete}
                      isOpened={this.state.isDeleteShow}
          title='删除'
          content='确认要删除?'
        />  
        <ConfirmModal 
          onClose={this.onCloseModal}
          onSave={this.onSave} 
          isOpened={this.state.isShow}                     
          title='新增'
          id="officeModal"
          ref="form"
          >
          <div className="fields three">
            <Input fieldClassName="field required"
                    type="text" 
                    name="receptionObj" 
                    label="名称"
                    placeholder="名称"  
              />
            <Input fieldClassName="field required"
                    type="datetime-local" 
                    name="receptionObj" 
                    label="开始时间"
                    placeholder="开始时间"  
              />
            <Input fieldClassName="field required"
                    type="datetime-local" 
                    name="receptionObj" 
                    label="结束时间"
                    placeholder="结束时间" 
                    
              />
          </div>
          <div className="field required">
            <label>协同办公人员</label>
            <Dropdown className="item ui multiple selection dropdown mini right roleDown" init={true} style={{height:'auto'}}>
              <input name="states" type="hidden"/>
                <i className="dropdown icon"></i>
                <div className="default text">请选择</div>
                  <div className="menu">
                    <a className="item" data-value="1">王文</a>
                    <a className="item" data-value="2">张苏</a>
                    <a className="item" data-value="3">李俊</a>
                    <a className="item" data-value="4">张伟</a>
                    <a className="item" data-value="5">王燕</a>
                    <a className="item" data-value="6">李昊</a>
                  </div>
            </Dropdown>
          </div>
          <Textarea fieldClassName="field"
                    name="description" 
                    label="备注"
                    placeholder="备注" 
                    rows="3"
                    validations={{
                      minLength: 1,
                      maxLength: 50
                    }}
                    validationErrors={{
                      minLength: '不能为空',
                      maxLength: '不能超过50字'
                    }}
              /> 
          <div className="field">
            <div style={{height:'40px'}}>
              <label >附件</label> 
              <button style={{float:'right'}} className="ui mini basic red button">
                <i className="delete icon"></i> 取消
              </button>
              <button style={{float:'right'}} className="ui mini basic blue button" onClick={this.uploadFn}>
                <i className="upload icon"></i> 上传
              </button>
            </div>
            
            <div>
              <div style={{height:'30px'}}>
                <span style={{width:30,height:30,background:'#4a83dc',color:'#ffffff',padding:5,marginRight:5}}>doc</span>久光电商贸易的批发说明文档.doc
                <span className="ui delete" style={{marginLeft:10,color:'#d01919',cursor:'pointer'}}>
                  <i className="icon delete"></i> 
                </span>
              </div>
            </div>
          </div>                                                                                           
        </ConfirmModal> 
      </div>
    )
  }
}