import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import defaultAvatar from '../../assets/images/elyse.png'
import {Checkbox} from 'react-semantify'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import ConfirmModal from '../Common/confirmModal'
import Input from '../Common/form/input'
import Sidebar from '../Common/addressSidebar'
import $ from 'jquery'
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
export default class AddressList extends Component {
  constructor(props){
    super(props)
    this.state ={
      isShow:false,
      isShoww:false,
      addressModel:{
        title:''
      },
      node:{
        name: 'myAppTree',
        children: [{
          name: 'RootComponentName',
          children: [{
            name: 'Parent',
            children: [{
              name: 'Child',
              children: []
            }, {
              name: 'OtherChild',
              children: []
            }]
          }]
        }]
      }
    }
    this.moreData = this.moreData.bind(this)
    this.editMember = this.editMember.bind(this)
    this.handleAdd = this.handleAdd.bind(this)

    this.onSave = this.onSave.bind(this)
    this.onSavee = this.onSavee.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.onCloseModall = this.onCloseModall.bind(this)
  }

  static propTypes = {
  }

  static fetchData(params){
    return [Actions.getArticleList(),Actions.getTagList()]
  }

  componentDidMount() {
    $('.menu .item').tab({
    })
    $('.card .image').dimmer({
      on: 'hover'
    })
  }

  handleChange(e,option,isAdd=false){
    e.preventDefault()
  }
  handleAdd(){
    this.setState({
      addressModel:{
        title:'新增通讯录'
      },
      isShoww:true
    })
  }
  editMember(){
    this.setState({
      addressModel:{
        title:'编辑通讯录'
      },
      isShoww:true
    })
  }
  moreData(){
    this.setState({
      addressModel:{
        title:'详细信息'
      },
      isShow:true
    })
  }
  onSave(){ 
    //insert coding here.. 
    this.onCloseModal()
  }
  onCloseModal(){
    this.setState({isShow:false})
  }
  onSavee(){ 
    //insert coding here.. 
    this.onCloseModal()
  }
  onCloseModall(){
    this.setState({isShoww:false})
  }
  render() {
    return (
      <div className="ui grid right_content">
        <Sidebar />
          <div className="sixteen wide column right_content">
          <ConfirmModal
           onClose={this.onCloseModal}
           onSave={this.onSave} 
           isOpened={this.state.isShow} 
           getFormData={this.getFormData}
           title={this.state.addressModel.title}
           id="moreData"
           ref="form"
        >
          <div className="three fields">
            <div>姓名：浪子天涯</div>
          </div>
          <div className="three fields">
            <div>手机：130-2252-1687</div>
          </div>
          <div className="three fields">
            <div>座机/电话：0512-66703849</div>
          </div>
          <div className="three fields">
            <div>邮箱：zuiqingyingmo@163.com</div>
          </div>
          <div className="three fields">
            <div>地址：东平街888号</div>
          </div>
        </ConfirmModal>
        <ConfirmModal
           onClose={this.onCloseModall}
           onSave={this.onSavee} 
           isOpened={this.state.isShoww} 
           getFormData={this.getFormData}
           title={this.state.addressModel.title}
           id="addressPanel"
           ref="form"
        >
          <div className="three fields">
                        <Input 
            name="departName"
            label="姓名"
            placeholder="姓名"
            fieldClassName="field required"
            value=""
            validations={{
              minLength: 1,
              maxLength: 50
            }}
            validationErrors={{
              minLength: '不能为空',
              maxLength: '不能超过50字'
            }}
            required/>
                      <Input 
            name="departName"
            label="手机"
            placeholder="手机"
            fieldClassName="field required"
            value=""
            validations={{
              minLength: 1,
              maxLength: 50
            }}
            validationErrors={{
              minLength: '不能为空',
              maxLength: '不能超过50字'
            }}
            required/>
                      <Input 
            name="departName"
            label="座机/电话"
            placeholder="座机/电话"
            fieldClassName="field required"
            value=""
            validations={{
              minLength: 1,
              maxLength: 50
            }}
            validationErrors={{
              minLength: '不能为空',
              maxLength: '不能超过50字'
            }}
            required/>
          </div>
          <div className="three fields">
                        <Input 
            name="departName"
            label="邮箱"
            placeholder="邮箱"
            fieldClassName="field required"
            value=""
            validations={{
              minLength: 1,
              maxLength: 50
            }}
            validationErrors={{
              minLength: '不能为空',
              maxLength: '不能超过50字'
            }}
            required/>
                      <Input 
            name="departName"
            label="地址"
            placeholder="地址"
            fieldClassName="field required"
            value=""
            validations={{
              minLength: 1,
              maxLength: 50
            }}
            validationErrors={{
              minLength: '不能为空',
              maxLength: '不能超过50字'
            }}
            required/>
                      <Input 
            name="departName"
            label="所属公司"
            placeholder="所属公司"
            fieldClassName="field required"
            value=""
            validations={{
              minLength: 1,
              maxLength: 50
            }}
            validationErrors={{
              minLength: '不能为空',
              maxLength: '不能超过50字'
            }}
            required/>
          </div>
        </ConfirmModal>
          <div className="stretched column content">
            <h3 className="ui dividing header ">
                <div className="title"><i className="call square  icon"></i>通讯录</div>
            </h3>
            <div className="ui segment">
                <div className="ui top pointing secondary menu">
                  <a className="active item" data-tab="first">员工通讯录</a>
                  <a className="item" data-tab="second">客户通讯录</a>
                </div>
                <div className="ui active tab segment" data-tab="first">

                  <div className="ui five column grid">
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column">
                      <div className="ui fluid card">
                          <div className="blurring dimmable image">
                            <div className="ui dimmer">
                              <div className="content">
                                <div className="center">
                                  <div className="ui inverted button" onClick={e=>this.moreData()}>查看详情</div>
                                </div>
                              </div>
                            </div>
                            <img src={defaultAvatar}/>
                          </div>
                          <div className="content">
                          <a className="header">范局</a>
                          <div className="meta">
            <i className="phone icon"></i>
                          13022521686
          </div>
                          </div>
                        </div>
                    </div>
                    <div className="column"></div>
                    <div className="column"></div>
                  </div>
                  <div className="ui six column grid">
                    <div className="column"></div>
                    <div className="column">
                      <div className="ui fluid card">
                          <div className="blurring dimmable image">
                            <div className="ui dimmer">
                              <div className="content">
                                <div className="center">
                                  <div className="ui inverted button">查看详情</div>
                                </div>
                              </div>
                            </div>
                            <img src={defaultAvatar}/>
                          </div>
                          <div className="content">
                          <a className="header">范副局</a>

                          <div className="meta">
            <i className="phone icon"></i>
                          13022521686
          </div>
                          </div>
                        </div>
                    </div>
                    <div className="column"></div>

                    <div className="column"></div>
                    <div className="column">
                      <div className="ui fluid card">
                          <div className="blurring dimmable image">
                            <div className="ui dimmer">
                              <div className="content">
                                <div className="center">
                                  <div className="ui inverted button">查看详情</div>
                                </div>
                              </div>
                            </div>
                            <img src={defaultAvatar}/>
                          </div>
                          <div className="content">
                          <a className="header">范副局</a>
                          
                          <div className="meta">
            <i className="phone icon"></i>
                          13022521686
          </div>
                          </div>
                        </div>
                    </div>
                    <div className="column"></div>

                  </div>
                  <div className="ui six doubling cards">
                    <div className="card">
                      <div className="image">
                        <img src={defaultAvatar}/>
                      </div>
                    </div>
                    <div className="card">
                      <div className="image">
                        <img src={defaultAvatar}/>
                      </div>
                    </div>
                    <div className="card">
                      <div className="image">
                        <img src={defaultAvatar}/>
                      </div>
                    </div>
                    <div className="card">
                      <div className="image">
                        <img src={defaultAvatar}/>
                      </div>
                    </div>
                    <div className="card">
                      <div className="image">
                        <img src={defaultAvatar}/>
                      </div>
                    </div>
                    <div className="card">
                      <div className="image">
                        <img src={defaultAvatar}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui tab segment" data-tab="second">
                <h4 className="ui dividing header ">
                <div className="ui mini icon input ">
                  <input type="text" placeholder="公司/姓名..."/>
                  <i className="search icon"></i>
                  </div>
                  <button className="ui small basic button right floated" onClick={e=>this.handleAdd()}><i
                    className="icon plus"></i>新增
                  </button>
                </h4>
                    <table className="ui single line table">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="ui checkbox">
                                                <input type="checkbox" />
                                                <label></label>
                                            </div>
                                        </th>
                                        <th>姓名</th>
                                        <th>座机</th>
                                        <th>手机</th>
                                        <th>邮箱</th>
                                        <th>地址</th>
                                        <th>所属公司</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td>李中华</td>
                                          <td>0512-66701234</td>
                                          <td>130-0000-11111</td>
                                          <td>zuiqiangyingmo@qq.com</td>   
                                          <td>浩辰大厦313</td>
                                          <td>三星集团</td>
                                          <td>
                                              <button className="ui mini basic blue button" onClick={e=>this.editMember()}> <i className="edit icon"></i> 编辑</button>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td>李中华</td>
                                          <td>0512-66701234</td>
                                          <td>130-0000-11111</td>
                                          <td>zuiqiangyingmo@qq.com</td>   
                                          <td>浩辰大厦313</td>
                                          <td>三星集团</td>
                                          <td>
                                              <button className="ui mini basic blue button" onClick={e=>this.editMember()}> <i className="edit icon"></i> 编辑</button>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td>李中华</td>
                                          <td>0512-66701234</td>
                                          <td>130-0000-11111</td>
                                          <td>zuiqiangyingmo@qq.com</td>   
                                          <td>浩辰大厦313</td>
                                          <td>三星集团</td>
                                          <td>
                                              <button className="ui mini basic blue button" onClick={e=>this.editMember()}> <i className="edit icon"></i> 编辑</button>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td>李中华</td>
                                          <td>0512-66701234</td>
                                          <td>130-0000-11111</td>
                                          <td>zuiqiangyingmo@qq.com</td>   
                                          <td>浩辰大厦313</td>
                                          <td>三星集团</td>
                                          <td>
                                              <button className="ui mini basic blue button" onClick={e=>this.editMember()}> <i className="edit icon"></i> 编辑</button>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td>李中华</td>
                                          <td>0512-66701234</td>
                                          <td>130-0000-11111</td>
                                          <td>zuiqiangyingmo@qq.com</td>   
                                          <td>浩辰大厦313</td>
                                          <td>三星集团</td>
                                          <td>
                                              <button className="ui mini basic blue button" onClick={e=>this.editMember()}> <i className="edit icon"></i> 编辑</button>
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
        </div>
      </div>
    )
  }
}
