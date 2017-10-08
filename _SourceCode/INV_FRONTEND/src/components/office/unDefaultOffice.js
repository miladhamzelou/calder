import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import {Dropdown} from 'react-semantify'
import WarningModal from '../Common/warningModal'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import jennyAvatar from '../../assets/images/jenny.jpg'
import elliotAvatar from '../../assets/images/elliot.jpg'
import helenAvatar from '../../assets/images/helen.jpg'
import defaultAvatar from '../../assets/images/elyse.png'
import $ from 'jquery'
import Sidebar from './sidebar'

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
      isDeleteShow:false
    }
    this.submitDelete = this.submitDelete.bind(this)
    this.colseDeleteModal = this.colseDeleteModal.bind(this)
    this.deleteModal = this.deleteModal.bind(this)
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

  colseDeleteModal=() => {
    this.setState({
      isDeleteShow:false
    })
  }
  submitDelete() {
    this.colseDeleteModal()
  }

  addModal(){
    $('#officeModal').modal('show')
  }

  modifyModal(){
    $('#officeModal').modal('show')
  }

  deleteModal(){
    this.setState({isDeleteShow:true})
  }
  onSave(){  
    $('#officeModal').modal('hide')
  }

   //关闭弹出框
  onCloseModal(){
    $('#officeModal').modal('hide')
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
                <div className="title"><i className="laptop alternate icon"></i>自定义事件（10）</div>
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
                <Link className="ui small basic button right floated blue" to="/office/officeDetails"><i
                  className="icon plus"></i>新增
                </Link>
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
                      <i className="spinner alternate icon link operate" data-content="未开始"  data-variation="mini"></i>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="spinner alternate icon link operate" data-content="未开始"  data-variation="mini"></i>
                      <img className="ui avatar image" src={elliotAvatar} />
                      <i className="spinner alternate icon link operate" data-content="未开始"  data-variation="mini"></i>
                      <img className="ui avatar image" src={jennyAvatar} />
                      <i className="spinner alternate icon link operate" data-content="未开始"  data-variation="mini"></i>
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
      </div>
    )
  }
}