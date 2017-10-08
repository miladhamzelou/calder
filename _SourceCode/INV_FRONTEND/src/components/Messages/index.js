import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Checkbox,Dropdown} from 'react-semantify'
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
    $('.ui.projectDetails').popup({
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
  detailsModal(){
    $('#newsModal').modal('show')
  }

  deleteModal(){
    $('#deleteModal').modal({
      onDeny: function () {
        $('#deleteModal').modal('hide')
      },
      onApprove: function () {
        $('#deleteModal').modal('hide')
      }
    }).modal('show')
  }
  onSave(){  
    $('#newsModal').modal('hide')
  }

   //关闭弹出框
  onCloseModal(){
    $('#newsModal').modal('hide')
  }

  exactSearchModal(){
    $('.exactSearchList').slideToggle()
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
                <div className="title"><i className="laptop alternate icon"></i>全部消息(4)</div>
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
                <button className="ui small basic button right floated red" onClick={this.deleteModal}><i
                  className="icon delete"></i>删除
                </button>
            </h3>
            <div className="exactSearchList" style={{height:60,display:'none'}}>
              <div className="ui form">
                <div className="inline fields">
                  <div className="field">
                    <label style={{height:38,lineHeight:'38px'}}>标题</label>
                    <input type="text" placeholder="标题" />
                  </div>
                  
                  <div className="field">
                    <label style={{height:38,lineHeight:'38px'}}>发送人</label>
                    <Dropdown className="item ui selection dropdown mini right" init={true}>
                        <input name="states" type="hidden"/>
                          <i className="dropdown icon"></i>
                          <div className="default text">发送人</div>
                          <div className="menu">
                            <a className="item" data-value="1">李易峰</a>
                            <a className="item" data-value="2">黄渤</a>
                            <a className="item" data-value="3">张三丰</a>
                          </div>
                    </Dropdown>
                  </div>

                  <div className="field">
                    <label style={{height:38,lineHeight:'38px'}}>时间</label>
                    <input type="date" placeholder="时间" />
                  </div>

                </div>
              </div>
            </div>
            <div className="ui segment">
              <table className="ui single line table">
                <thead>
                  <tr>
                    <th>
                      <Checkbox init={true}>
                        <input type="checkbox"/>
                        <label></label>
                      </Checkbox>
                    </th>
                    <th >标题</th>
                    <th >发送人</th>
                    <th >时间</th>
                    <th >类型</th>
                    <th >状态</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Checkbox init={true}>
                        <input type="checkbox"/>
                        <label></label>
                      </Checkbox>
                    </td>
                    <td onClick={this.detailsModal} style={{color:'#0099CC',cursor: 'pointer'}}>
                      对于创业公司的补助
                    </td>
                    <td>
                      <span className="ui avatar projectDetails">
                        <img className="ui circular image" style={{display:'inline'}} src={jennyAvatar}/>
                      </span>
                      <div className="ui flowing popup transition hidden">
                        <div className="ui divided center aligned">
                          <div className="card">
                            <div className="content" style={{textAlign:'left'}}>
                              <img className="right floated mini ui image" src={jennyAvatar} />
                              <div className="header"><i className="icon user"></i> 李俊 </div>
                              <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                              <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                            </div>
                          </div>
                        </div>  
                      </div>
                    </td>                   
                    <td>今天12:00</td>
                    <td>系统消息</td>
                    <td><div className="ui tag label green mini">未读</div></td> 
                  </tr>
                  <tr>
                    <td>
                      <Checkbox init={true}>
                        <input type="checkbox"/>
                        <label></label>
                      </Checkbox>
                    </td>
                    <td onClick={this.detailsModal} style={{color:'#0099CC',cursor: 'pointer'}}>
                     园区新政策
                    </td>
                    <td>
                      <span className="ui avatar projectDetails">
                        <img className="ui circular image" style={{display:'inline'}} src={elliotAvatar}/>
                      </span>
                      <div className="ui flowing popup transition hidden">
                        <div className="ui divided center aligned">
                          <div className="card">
                            <div className="content" style={{textAlign:'left'}}>
                              <img className="right floated mini ui image" src={elliotAvatar} />
                              <div className="header"><i className="icon user"></i> 李俊 </div>
                              <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                              <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                            </div>
                          </div>
                        </div>  
                      </div>
                    </td>                    
                    <td>今天10:00</td>
                    <td>邮件</td>
                    <td><div className="ui tag label green mini">未读</div></td> 
                  </tr>
                  <tr>
                    <td>
                      <Checkbox init={true}>
                        <input type="checkbox"/>
                        <label></label>
                      </Checkbox>
                    </td>
                    <td onClick={this.detailsModal} style={{color:'#0099CC',cursor: 'pointer'}}>
                      又有享优惠啦
                    </td>
                    <td>
                      <span className="ui avatar projectDetails">
                        <img className="ui circular image" style={{display:'inline'}} src={helenAvatar}/>
                      </span>
                      <div className="ui flowing popup transition hidden">
                        <div className="ui divided center aligned">
                          <div className="card">
                            <div className="content" style={{textAlign:'left'}}>
                              <img className="right floated mini ui image" src={helenAvatar} />
                              <div className="header"><i className="icon user"></i> 李俊 </div>
                              <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                              <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                            </div>
                          </div>
                        </div>  
                      </div>
                    </td>                     
                    <td>昨天15:30</td>
                    <td>系统消息</td>
                    <td><div className="ui tag label mini">已读</div></td>  
                  </tr>
                  <tr>
                    <td>
                      <Checkbox init={true}>
                        <input type="checkbox"/>
                        <label></label>
                      </Checkbox>
                    </td>
                    <td onClick={this.detailsModal} style={{color:'#0099CC',cursor: 'pointer'}}>
                      这么好的政策，还等什么
                    </td> 
                    <td>
                      <span className="ui avatar projectDetails">
                        <img className="ui circular image" style={{display:'inline'}} src={defaultAvatar}/>
                      </span>
                      <div className="ui flowing popup transition hidden">
                        <div className="ui divided center aligned">
                          <div className="card">
                            <div className="content" style={{textAlign:'left'}}>
                              <img className="right floated mini ui image" src={defaultAvatar} />
                              <div className="header"><i className="icon user"></i> 李俊 </div>
                              <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                              <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                            </div>
                          </div>
                        </div>  
                      </div>
                    </td>                    
                    <td>昨天11:00</td>
                    <td>邮件</td>
                    <td><div className="ui tag label mini">已读</div></td> 
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
          id='deleteModal'
          title='删除'
          content='确认要删除?'
        />  
        <ConfirmModal 
          onClose={this.onCloseModal}
          onSave={this.onSave}                    
          title='消息详情'
          id="newsModal"
          ref="form"
          >
          <div className="field">
            园区将实施包括构建“众创空间”在内的五项行动计划，
            其中《关于发展众创空间鼓励大众创新创业的实施意见》
            为创新创业推出了“一揽子”扶持政策。
            经认定的众创空间可享受不超过50万元的启动资金支持和不超过30元/平米/月的办公用房补贴；
            由众创空间孵化的项目如一次性获得200万（含）以上投融资，
            给予众创空间不超过10万元每项目的创业辅导奖励；
            由众创空间推荐，在国内外知名创业大赛获奖或者一次性获得200万元（含）以上投融资的项目，每个优秀众创项目可享受不超过30万元的创业补贴和不超过20万元的众创服务补贴额度；
            专业服务单位向园区众创项目提供的服务给予全额补贴，每年累计最高不超过20万元；
            对于举办有助于推进创新创业的各类活动，给予承办单位不超过活动总支出金额30%的补贴，对每个承办单位每年累计不超过10万元。
          </div>                                                                                     
        </ConfirmModal> 
      </div>
    )
  }
}