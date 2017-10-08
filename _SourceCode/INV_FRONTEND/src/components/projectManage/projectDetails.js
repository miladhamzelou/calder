import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import WarningModal from '../Common/warningModal'
import ConfirmModal from '../Common/confirmModal'
import defaultAvatar from '../../assets/images/pro1.jpg'
import defaultAvatarDoc from '../../assets/images/doc.png'
import defaultLogo1 from '../../assets/images/logo1.jpg'
import defaultAvatarLogo1 from '../../assets/images/helen.jpg'
import defaultAvatarLogo2 from '../../assets/images/jenny.jpg'
import defaultAvatarLogo3 from '../../assets/images/daniel.jpg'
import defaultAvatarLogo4 from '../../assets/images/elliot.jpg'
import { Link } from 'react-router'
import Input from '../Common/form/input'
import Textarea from '../Common/form/textarea'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import {Checkbox,Dropdown} from 'react-semantify'
import $ from 'jquery'
global.$ = global.jQuery = $

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default
class ProjectDetails extends Component {
  constructor(props) {
    super(props)
    this.addModal = this.addModal.bind(this)
    this.modifyModal = this.modifyModal.bind(this)
    this.deleteModal = this.deleteModal.bind(this)
    this.uploadFn = this.uploadFn.bind(this)

  }

  static propTypes = {}

  static fetchData(params) {
  }

  componentDidMount() {
    $('.card .image').dimmer({
      on: 'hover'
    })
    $('.ui.projectDetails').popup({
      hoverable:true
    })
    $('.ui.viewFile').popup({
      hoverable:true
    })
    $('.ui.download').popup({
      hoverable:true
    })
    $('.menu .item').tab()
    $('.ui.accordion').accordion()
    $('#example1').progress('increment')
  }

  addModal() {
    // this.setState({
    //   title:'新增会议'         
    // })
    $('#meetModal').modal('show')
  }

  modifyModal() {
    // this.setState({
    //   title:'修改会议'            
    // })
    $('#meetModal').modal('show')
  }

  deleteModal() {
    $('#deleteModal').modal({
      onDeny: function () {
        $('#deleteModal').modal('hide')
      },
      onApprove: function () {
        $('#deleteModal').modal('hide')
      }
    }).modal('show')
  }

  onSave() {
    $('#meetModal').modal('hide')
  }

  //关闭弹出框
  onCloseModal() {
    $('#meetModal').modal('hide')
  }

  exactSearchModal() {
    // if($('.exactSearch i').hasClass('down')){
    //   $('.exactSearch i').removeClass('down').addClass('up')
    // }else if($('.exactSearch i').hasClass('up')){
    //   $('.exactSearch i').removeClass('up').addClass('down')
    // }
    $('.exactSearchList').slideToggle()
  }

  uploadFn() {
    $('.meetFileUpLoad').click()
  }

  //改变页数
  pageChange() {

  }

  render() {
    return (
      <div>
        <ConfirmModal onClose={this.onCloseModal}
                      onSave={this.onSave}                    
                      title='会议详情'
                      id="meetModal"
                      ref="form"
        >
              <div className="fields three">
                <Input fieldClassName="field required"
                      type="text" 
                      name="receptionObj" 
                      label="会议名称"
                      placeholder="会议名称" 
                      validations={{
                        minLength: 1,
                        maxLength: 10
                      }}
                      validationErrors={{
                        minLength: '不能为空',
                        maxLength: '不能超过10字'
                      }}
                />
                
                <Input fieldClassName="field required"
                      type="text" 
                      name="receptionObj" 
                      label="会议主题"
                      placeholder="会议主题" 
                      validations={{
                        minLength: 1,
                        maxLength: 10
                      }}
                      validationErrors={{
                        minLength: '不能为空',
                        maxLength: '不能超过10字'
                      }}
                />

                <Input fieldClassName="field required"
                        type="datetime-local" 
                        name="receptionObj" 
                        label="时间"
                        placeholder="时间" 
                        
                />
              </div>

              <div className="fields three">
                
                <Input fieldClassName="field required"
                      type="text" 
                      name="receptionObj" 
                      label="地点"
                      placeholder="地点" 
                      validations={{
                        minLength: 1,
                        maxLength: 10
                      }}
                      validationErrors={{
                        minLength: '不能为空',
                        maxLength: '不能超过10字'
                      }}
                />

                <div className="field required">
                  <label>主持人</label>
                  <Dropdown className="item ui multiple selection dropdown mini right roleDown" init={true} style={{height:'auto'}}>
                    <input name="states" type="hidden"/>
                      <i className="dropdown icon"></i>
                      <div className="default text">主持人</div>
                        <div className="menu">
                          <a className="item" data-value="1">刘局</a>
                          <a className="item" data-value="2">陈局</a>
                          <a className="item" data-value="3">周局</a>
                          <a className="item" data-value="4">杜局</a>
                          <a className="item" data-value="5">张局</a>
                          <a className="item" data-value="6">李局</a>
                        </div>
                  </Dropdown>
                </div>

                <div className="field required">
                  <label>记录人</label>
                  <Dropdown className="item ui multiple selection dropdown mini right roleDown" init={true} style={{height:'auto'}}>
                    <input name="states" type="hidden"/>
                      <i className="dropdown icon"></i>
                      <div className="default text">记录人</div>
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
              </div>

              <div className="field">
                <div className="field">
                  <label>参与人员</label>
                  <Dropdown className="item ui multiple selection dropdown mini right roleDown" init={true} style={{height:'auto'}}>
                    <input name="states" type="hidden"/>
                      <i className="dropdown icon"></i>
                      <div className="default text">参加人员</div>
                        <div className="menu">
                          <a className="item" data-value="1">陈柳颖</a>
                          <a className="item" data-value="2">黄艳婷</a>
                          <a className="item" data-value="3">高婷婷</a>
                          <a className="item" data-value="4">王小强</a>
                          <a className="item" data-value="5">张安</a>
                          <a className="item" data-value="6">王敏燕</a>
                        </div>
                  </Dropdown>
                </div> 
              </div>
              
              <Textarea fieldClassName="field"
                        name="description" 
                        label="会议要点"
                        placeholder="会议要点" 
                        rows="1" 
                        validations={{
                          minLength: 1,
                          maxLength: 50
                        }}
                        validationErrors={{
                          minLength: '不能为空',
                          maxLength: '不能超过50字'
                        }}
                  />  

              <Textarea fieldClassName="field"
                        name="description" 
                        label="会议内容"
                        placeholder="会议内容" 
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
                  
                </div>
                
                <div>
                  <div style={{height:'30px'}}>
                    <span style={{width:30,height:30,background:'#4a83dc',color:'#ffffff',padding:5,marginRight:5}}>doc</span>久光电商贸易的批发说明文档.doc
                    <span className="ui delete" style={{marginLeft:10,color:'#d01919',cursor:'pointer'}}>
                      <i className="icon delete"></i> 
                    </span>
                  </div>

                  <div style={{height:'30px'}}>
                    <span style={{width:30,height:30,background:'#00c075',color:'#ffffff',padding:5,marginRight:5}}>xlsx</span>久光电商贸易的批发数量报表.xlsx
                    <span className="ui delete" style={{marginLeft:15,color:'#d01919',cursor:'pointer'}}>
                      <i className="icon delete"></i> 
                    </span>
                  </div>

                </div>
              </div>                                                                                                          
            
        </ConfirmModal> 

        <WarningModal id='deleteModal'
                      title='删除'
                      content='确认要删除?'
        />
        <div className="ui grid right_content">
          <div className="stretched column content">
            <div>
              <h2 className="ui dividing header " style={{clear:'both'}}>
                <Link className="title" to="/projectManage"><i className="reply alternate icon"></i>返回列表</Link>
              </h2>
              <div className="ui stackable grid">
                <div className="four wide column">
                  <div className="wrapper">
                    <img className="circular ui image user-avatar avatar208" src={defaultLogo1}/>

                    <div className="ui aligned center user-name ng-binding ng-scope">
                      久光百货
                    </div>
                    <div className="ui divider"></div>
                    <div className="ui aligned center">
                      <p className="list-top">
                        <span className="time">
                          <div className="ui indicating small progress" data-percent="72" id="example1"
                               style={{width:250}}>
                            <div className="bar" style={{transitionDuration: '300ms',width: '72%'}}></div>
                            <div className="label">进度 72%</div>
                          </div>
                        </span>
                      </p>
                    </div>

                    <div className="ui divider"></div>
                    <div className="user-created-at ng-scope">
                      合作公司：<span>云购信息有限公司</span>
                    </div>
                    <div className="user-created-at ng-scope">
                      企业编号：<span>459349587349875934734</span>
                    </div>
                    <div className="user-created-at ng-scope">
                      负  责  人：<span>张小帅</span>
                    </div>
                    <div className="user-created-at ng-scope">
                      联系方式：<span>130-2252-1686</span>
                    </div>
                    <div className="user-created-at ng-scope">
                      开始时间：<span>2015-03-08</span>
                    </div>
                     <div className="user-created-at ng-scope">
                      结束时间：<span>2016-03-08</span>
                    </div>
                    <div className="user-created-at ng-scope">
                      项目周期：<span>2年</span>
                    </div>
                    <div className="user-created-at ng-scope">
                      投资金额：<span>20万</span>
                    </div>
                    <div className="user-created-at ng-scope">
                      项目类型：<span>信息</span>
                    </div>
                    <div className="user-created-at ng-scope">
                      备<span style={{paddingLeft:'27px'}}>注：</span><span>优质客户需要特殊招商，对社会发展有利</span>
                    </div>
                  </div>
                </div>
                <div className="twelve wide column">
                  <div className="wrapper">
                    <div className="ui top attached tabular menu">
                      <a className="active item" data-tab="one">动态</a>
                      <a className="item" data-tab="two">任务管理</a>
                      <a className="item" data-tab="three">会议纪要</a>
                      <a className="item" data-tab="four">风险</a>
                      <a className="item" data-tab="five">干系人</a>
                      <a className="item" data-tab="six">条款执行情况</a>
                      <a className="item" data-tab="seven">资料</a>
                    </div>

                    <div className="ui bottom attached active tab segment" data-tab="one">
                      <div className="ui basic segment" id="project-activities">
                        <div className="start-date">
                          <span>2016-06-03 周五</span>
                        </div>
                        <div className="activity">
                          <div className="timeline">
                            <div className="time">15:30</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo4}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>吉吉</a>
                              <span>下载了</span>
                              项目
                              <a>久光百货</a>
                              <span>第三次会议的所有资料</span>
                            </div>
                          </div>
                        </div>
                        <div className="activity">
                          <div className="timeline">
                            <div className="time">14:00</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo3}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>宋中基</a>
                              <span>主持</span>
                              项目
                              <a>久光百货</a>
                              <span>第三次会议</span>
                            </div>
                          </div>
                        </div>
                        <div className="activity">
                          <div className="timeline">
                            <div className="time">11:00</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo2}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>张良</a>
                              <span>发起了</span>
                              项目
                              <a>久光百货</a>
                              <span>第三次会议</span>
                            </div>
                          </div>
                        </div>
                        <div className="activity not-bordered">
                          <div className="timeline">
                            <div className="time">09:30</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo1}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>宋中基</a>
                              <span>提交了</span>
                              项目
                              <a>久光百货</a>
                              <span>第三次会议的申请</span>
                            </div>
                          </div>
                        </div>

                        <div className="start-date" style={{paddingTop:'10px'}}>
                          <span>2016-06-02 周四</span>
                        </div>
                        <div className="activity">
                          <div className="timeline">
                            <div className="time">15:30</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo4}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>吉吉</a>
                              <span>下载了</span>
                              项目
                              <a>久光百货</a>
                              <span>第二次会议的所有资料</span>
                            </div>
                          </div>
                        </div>
                        <div className="activity">
                          <div className="timeline">
                            <div className="time">14:00</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo3}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>宋中基</a>
                              <span>主持</span>
                              项目
                              <a>久光百货</a>
                              <span>第二次会议</span>
                            </div>
                          </div>
                        </div>
                        <div className="activity">
                          <div className="timeline">
                            <div className="time">11:00</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo2}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>张坚良</a>
                              <span>发起了</span>
                              项目
                              <a>久光百货</a>
                              <span>第二次会议</span>
                            </div>
                          </div>
                        </div>
                        <div className="activity not-bordered">
                          <div className="timeline">
                            <div className="time">09:30</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo1}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>宋中基</a>
                              <span>提交了</span>
                              项目
                              <a>久光百货</a>
                              <span>第二次会议的申请</span>
                            </div>
                          </div>
                        </div>
                        <div className="start-date" style={{paddingTop:'10px'}}>
                          <span>2016-05-31 周二</span>
                        </div>
                        <div className="activity">
                          <div className="timeline">
                            <div className="time">15:30</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo4}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>吉吉</a>
                              <span>下载了</span>
                              项目
                              <a>久光百货</a>
                              <span>第一次会议的所有资料</span>
                            </div>
                          </div>
                        </div>
                        <div className="activity">
                          <div className="timeline">
                            <div className="time">14:00</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo3}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>宋中基</a>
                              <span>主持</span>
                              项目
                              <a>久光百货</a>
                              <span>第一次会议</span>
                            </div>
                          </div>
                        </div>
                        <div className="activity">
                          <div className="timeline">
                            <div className="time">11:00</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo2}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>张坚良</a>
                              <span>发起了</span>
                              项目
                              <a>久光百货</a>
                              <span>第一次会议</span>
                            </div>
                          </div>
                        </div>
                        <div className="activity not-bordered">
                          <div className="timeline">
                            <div className="time">09:30</div>
                          </div>
                          <div className="avatar">
                            <a><img className="ui circular image" src={defaultAvatarLogo1}/></a>
                          </div>
                          <div className="content">
                            <div className="action">
                              <a>宋中基</a>
                              <span>提交了</span>
                              项目
                              <a>久光百货</a>
                              <span>第一次会议的申请</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="ui right aligned grid">
                          <div className="sixteen wide column">
                            <a className="">
                              更多
                              <i className="angle double right icon"></i>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="ui bottom attached tab segment" data-tab="two">
                      <div className="">                   
                        <div className="ui styled accordion">
                          <div className="title">
                            <i className="dropdown icon"></i>
                            所有任务(4/6)
                          </div>
                          <div className="content"> 
                            <div className="accordion transition hidden">
                              <div className="title">
                                <i className="dropdown icon"></i>
                                合同签订(2/3)
                              </div>
                              <div className="content"> 
                                <table className="ui single line table">
                                         
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="ui checkbox">
                                          <input type="checkbox"/>
                                          <label></label>
                                        </div>
                                      </td>
                                      <td>合同拟定</td>
                                      <td>
                                        <span className="ui avatar projectDetails">
                                          <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarLogo1}/>
                                        </span>
                                        <div className="ui flowing popup transition hidden">
                                          <div className="ui divided center aligned">
                                            <div className="card">
                                              <div className="content" style={{textAlign:'left'}}>
                                                <img className="right floated mini ui image" src={defaultAvatarLogo1} />
                                                <div className="header"><i className="icon user"></i> 刘军 </div>
                                                <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                                <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                              </div>
                                            </div>
                                          </div>  
                                        </div>
                                      </td>
                                      <td>2016-04-14</td>
                                      <td>2016-04-15</td>
                                      <td style={{color:'#21ba45'}}>完成</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="ui checkbox">
                                          <input type="checkbox"/>
                                          <label></label>
                                        </div>
                                      </td>
                                      <td>预约客户</td>
                                      <td>
                                        <span className="ui avatar projectDetails">
                                          <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarLogo2}/>
                                        </span>
                                        <div className="ui flowing popup transition hidden">
                                          <div className="ui divided center aligned">
                                            <div className="card">
                                              <div className="content" style={{textAlign:'left'}}>
                                                <img className="right floated mini ui image" src={defaultAvatarLogo2} />
                                                <div className="header"><i className="icon user"></i> 张建 </div>
                                                <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                                <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                              </div>
                                            </div>
                                          </div>  
                                        </div>
                                      </td>
                                      <td>2016-04-14</td>
                                      <td>2016-04-15</td>
                                      <td style={{color:'#21ba45'}}>完成</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="ui checkbox">
                                          <input type="checkbox"/>
                                          <label></label>
                                        </div>
                                      </td>
                                      <td>签订合同</td>
                                      <td>
                                        <span className="ui avatar projectDetails">
                                          <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarLogo3}/>
                                        </span>
                                        <div className="ui flowing popup transition hidden">
                                          <div className="ui divided center aligned">
                                            <div className="card">
                                              <div className="content" style={{textAlign:'left'}}>
                                                <img className="right floated mini ui image" src={defaultAvatarLogo3} />
                                                <div className="header"><i className="icon user"></i> 王丹 </div>
                                                <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                                <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                              </div>
                                            </div>
                                          </div>  
                                        </div>
                                      </td>
                                      <td>2016-04-14</td>
                                      <td>2016-04-15</td>
                                      <td style={{color:'#d01919'}}>未完成</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="title">
                                <i className="dropdown icon"></i>
                                
                                项目汇报(2/3)
                              </div>
                              <div className="content"> 
                                <table className="ui single line table">
                                         
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="ui checkbox">
                                          <input type="checkbox"/>
                                          <label></label>
                                        </div>
                                      </td>
                                      <td>资料准备</td>
                                      <td>
                                        <span className="ui avatar projectDetails">
                                          <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarLogo4}/>
                                        </span>
                                        <div className="ui flowing popup transition hidden">
                                          <div className="ui divided center aligned">
                                            <div className="card">
                                              <div className="content" style={{textAlign:'left'}}>
                                                <img className="right floated mini ui image" src={defaultAvatarLogo4} />
                                                <div className="header"><i className="icon user"></i> 李菊 </div>
                                                <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                                <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                              </div>
                                            </div>
                                          </div>  
                                        </div>
                                      </td>
                                      <td>2016-04-14</td>
                                      <td>2016-04-15</td>
                                      <td style={{color:'#21ba45'}}>完成</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="ui checkbox">
                                          <input type="checkbox"/>
                                          <label></label>
                                        </div>
                                      </td>
                                      <td>资料编写</td>
                                      <td>
                                        <span className="ui avatar projectDetails">
                                          <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarLogo1}/>
                                        </span>
                                        <div className="ui flowing popup transition hidden">
                                          <div className="ui divided center aligned">
                                            <div className="card">
                                              <div className="content" style={{textAlign:'left'}}>
                                                <img className="right floated mini ui image" src={defaultAvatarLogo1} />
                                                <div className="header"><i className="icon user"></i> 周建 </div>
                                                <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                                <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                              </div>
                                            </div>
                                          </div>  
                                        </div>
                                      </td>
                                      <td>2016-04-14</td>
                                      <td>2016-04-15</td>
                                      <td style={{color:'#21ba45'}}>完成</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="ui checkbox">
                                          <input type="checkbox"/>
                                          <label></label>
                                        </div>
                                      </td>
                                      <td>资料完成</td>
                                      <td>
                                        <span className="ui avatar projectDetails">
                                          <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarLogo2}/>
                                        </span>
                                        <div className="ui flowing popup transition hidden">
                                          <div className="ui divided center aligned">
                                            <div className="card">
                                              <div className="content" style={{textAlign:'left'}}>
                                                <img className="right floated mini ui image" src={defaultAvatarLogo2} />
                                                <div className="header"><i className="icon user"></i> 刘军 </div>
                                                <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                                <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                              </div>
                                            </div>
                                          </div>  
                                        </div>
                                      </td>
                                      <td>2016-04-14</td>
                                      <td>2016-04-15</td>
                                      <td style={{color:'#d01919'}}>未完成</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ui bottom attached tab segment" data-tab="three">
                      <h4 className="ui dividing header ">
                        <div className="ui mini icon input ">
                          <input type="text" placeholder="文件名..."/>
                          <i className="search icon"></i>
                        </div>
                        <button className="ui small basic button right floated" onClick={e=>this.handleAdd()}><i
                          className="icon plus"></i>新增
                        </button>
                      </h4>
                      <div className="ui segment">
                        <table className="ui single line table">
                          <thead>
                          <tr>
                            <th>会议名称</th>
                            <th>会议时间</th>
                            <th>会议地点</th>
                            <th>参与人员</th>
                            <th>状态</th>
                            <th>附件</th>            
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td onClick={this.modifyModal} style={{color:'#0099CC',cursor: 'pointer'}}>久光百货需求会议</td>
                            <td>2016-05-21</td>
                            <td>苏州园区</td>
                            <td>  
                              <span style={{cursor: 'pointer'}}>
                                <img className="ui image mini floated left projectDetails" src={defaultAvatarLogo1} />
                                <div className="ui flowing popup transition hidden">
                                  <div className="ui divided center aligned">
                                    <div className="card">
                                      <div className="content" style={{textAlign:'left'}}>
                                        <img className="right floated mini ui image" src={defaultAvatarLogo1} />
                                        <div className="header"><i className="icon user"></i> 范小华</div>
                                        <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                        <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </span>
                              <span style={{cursor: 'pointer'}}>
                                <img className="ui image mini floated left projectDetails" src={defaultAvatarLogo2} />
                                <div className="ui flowing popup transition hidden">
                                  <div className="ui divided center aligned">
                                    <div className="card">
                                      <div className="content" style={{textAlign:'left'}}>
                                        <img className="right floated mini ui image" src={defaultAvatarLogo2} />
                                        <div className="header"><i className="icon user"></i> 周建</div>
                                        <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                        <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </span>
                              <span style={{cursor: 'pointer'}}>
                                <img className="ui image mini floated left projectDetails" src={defaultAvatarLogo3} />
                                <div className="ui flowing popup transition hidden">
                                  <div className="ui divided center aligned">
                                    <div className="card">
                                      <div className="content" style={{textAlign:'left'}}>
                                        <img className="right floated mini ui image" src={defaultAvatarLogo3} />
                                        <div className="header"><i className="icon user"></i> 黄婷玉</div>
                                        <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                        <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </span>
                            </td>
                            <td><div className="ui tag label green mini">已完成</div></td>
                            <td style={{fontSize: 'large'}}>
                              <div className="ui viewFile" style={{color:'#2185d0',cursor: 'pointer'}}>
                                3
                              </div>
                              <div className="ui flowing popup transition hidden">
                                <div className="ui divided center aligned">
                                  <div className="">

                                    <div className="">
                                      <span className="">
                                        <img className="ui avatar image" width="30" src={defaultAvatarDoc}/>    
                                      </span>
                                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                                        久光百货需求文档一期.word
                                      </span>
                                      <span className="ui download" style={{marginLeft:15,color:'#2185d0',cursor:'pointer'}}>
                                        <i className="icon cloud download"></i> 
                                      </span>
                                      <div className="ui flowing popup transition hidden">
                                        <div className="ui divided center aligned">
                                          <div className="">
                                            下载
                                          </div>
                                        </div>  
                                      </div>
                                    </div>

                                     <div className="">
                                      <span className="">
                                        <img className="ui avatar image" width="30" src={defaultAvatarDoc}/>    
                                      </span>
                                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                                        久光百货需求文档二期.word
                                      </span>
                                      <span className="ui download" style={{marginLeft:15,color:'#2185d0',cursor:'pointer'}}>
                                        <i className="icon cloud download"></i> 
                                      </span>
                                      <div className="ui flowing popup transition hidden">
                                        <div className="ui divided center aligned">
                                          <div className="">
                                            下载
                                          </div>
                                        </div>  
                                      </div>
                                    </div>

                                    <div className="">
                                      <span className="">
                                        <img className="ui avatar image" width="30" src={defaultAvatarDoc}/>    
                                      </span>
                                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                                        久光百货需求文档三期.word
                                      </span>
                                      <span className="ui download" style={{marginLeft:15,color:'#2185d0',cursor:'pointer'}}>
                                        <i className="icon cloud download"></i> 
                                      </span>
                                      <div className="ui flowing popup transition hidden">
                                        <div className="ui divided center aligned">
                                          <div className="">
                                            下载
                                          </div>
                                        </div>  
                                      </div>
                                    </div>

                                  </div>
                                </div>  
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td onClick={this.modifyModal} style={{color:'#0099CC',cursor: 'pointer'}}>久光百货启动事项</td>
                            <td>2016-05-21</td>
                            <td>苏州园区</td>
                            <td>  
                              <span style={{cursor: 'pointer'}}>
                                <img className="ui image mini floated left projectDetails" src={defaultAvatarLogo1} />
                                <div className="ui flowing popup transition hidden">
                                  <div className="ui divided center aligned">
                                    <div className="card">
                                      <div className="content" style={{textAlign:'left'}}>
                                        <img className="right floated mini ui image" src={defaultAvatarLogo1} />
                                        <div className="header"><i className="icon user"></i> 范小华</div>
                                        <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                        <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </span>
                              <span style={{cursor: 'pointer'}}>
                                <img className="ui image mini floated left projectDetails" src={defaultAvatarLogo2} />
                                <div className="ui flowing popup transition hidden">
                                  <div className="ui divided center aligned">
                                    <div className="card">
                                      <div className="content" style={{textAlign:'left'}}>
                                        <img className="right floated mini ui image" src={defaultAvatarLogo2} />
                                        <div className="header"><i className="icon user"></i> 周建</div>
                                        <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                        <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </span>
                              <span style={{cursor: 'pointer'}}>
                                <img className="ui image mini floated left projectDetails" src={defaultAvatarLogo3} />
                                <div className="ui flowing popup transition hidden">
                                  <div className="ui divided center aligned">
                                    <div className="card">
                                      <div className="content" style={{textAlign:'left'}}>
                                        <img className="right floated mini ui image" src={defaultAvatarLogo3} />
                                        <div className="header"><i className="icon user"></i> 黄婷玉</div>
                                        <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                        <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </span>
                            </td>
                            <td><div className="ui tag label green mini">已完成</div></td>
                            <td style={{fontSize: 'large'}}>
                              <div className="ui viewFile" style={{color:'#2185d0',cursor: 'pointer'}}>
                                3
                              </div>
                              <div className="ui flowing popup transition hidden">
                                <div className="ui divided center aligned">
                                  <div className="">

                                    <div className="">
                                      <span className="">
                                        <img className="ui avatar image" width="30" src={defaultAvatarDoc}/>    
                                      </span>
                                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                                        久光百货启动事项文档一期.word
                                      </span>
                                      <span className="ui download" style={{marginLeft:15,color:'#2185d0',cursor:'pointer'}}>
                                        <i className="icon cloud download"></i> 
                                      </span>
                                      <div className="ui flowing popup transition hidden">
                                        <div className="ui divided center aligned">
                                          <div className="">
                                            下载
                                          </div>
                                        </div>  
                                      </div>
                                    </div>

                                     <div className="">
                                      <span className="">
                                        <img className="ui avatar image" width="30" src={defaultAvatarDoc}/>    
                                      </span>
                                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                                        久光百货启动事项文档二期.word
                                      </span>
                                      <span className="ui download" style={{marginLeft:15,color:'#2185d0',cursor:'pointer'}}>
                                        <i className="icon cloud download"></i> 
                                      </span>
                                      <div className="ui flowing popup transition hidden">
                                        <div className="ui divided center aligned">
                                          <div className="">
                                            下载
                                          </div>
                                        </div>  
                                      </div>
                                    </div>

                                    <div className="">
                                      <span className="">
                                        <img className="ui avatar image" width="30" src={defaultAvatarDoc}/>    
                                      </span>
                                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                                       久光百货启动事项文档三期.word
                                      </span>
                                      <span className="ui download" style={{marginLeft:15,color:'#2185d0',cursor:'pointer'}}>
                                        <i className="icon cloud download"></i> 
                                      </span>
                                      <div className="ui flowing popup transition hidden">
                                        <div className="ui divided center aligned">
                                          <div className="">
                                            下载
                                          </div>
                                        </div>  
                                      </div>
                                    </div>

                                  </div>
                                </div>  
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td onClick={this.modifyModal} style={{color:'#0099CC',cursor: 'pointer'}}>久光百货开发流程</td>
                            <td>2016-05-21</td>
                            <td>苏州园区</td>
                            <td>  
                              <span style={{cursor: 'pointer'}}>
                                <img className="ui image mini floated left projectDetails" src={defaultAvatarLogo1} />
                                <div className="ui flowing popup transition hidden">
                                  <div className="ui divided center aligned">
                                    <div className="card">
                                      <div className="content" style={{textAlign:'left'}}>
                                        <img className="right floated mini ui image" src={defaultAvatarLogo1} />
                                        <div className="header"><i className="icon user"></i> 范小华</div>
                                        <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                        <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </span>
                              <span style={{cursor: 'pointer'}}>
                                <img className="ui image mini floated left projectDetails" src={defaultAvatarLogo2} />
                                <div className="ui flowing popup transition hidden">
                                  <div className="ui divided center aligned">
                                    <div className="card">
                                      <div className="content" style={{textAlign:'left'}}>
                                        <img className="right floated mini ui image" src={defaultAvatarLogo2} />
                                        <div className="header"><i className="icon user"></i> 周建</div>
                                        <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                        <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </span>
                              <span style={{cursor: 'pointer'}}>
                                <img className="ui image mini floated left projectDetails" src={defaultAvatarLogo3} />
                                <div className="ui flowing popup transition hidden">
                                  <div className="ui divided center aligned">
                                    <div className="card">
                                      <div className="content" style={{textAlign:'left'}}>
                                        <img className="right floated mini ui image" src={defaultAvatarLogo3} />
                                        <div className="header"><i className="icon user"></i> 黄婷玉</div>
                                        <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                        <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                      </div>
                                    </div>
                                  </div>  
                                </div>
                              </span>
                            </td>
                            <td><div className="ui tag label green mini">已完成</div></td>
                            <td style={{fontSize: 'large'}}>
                              <div className="ui viewFile" style={{color:'#2185d0',cursor: 'pointer'}}>
                                3
                              </div>
                              <div className="ui flowing popup transition hidden">
                                <div className="ui divided center aligned">
                                  <div className="">

                                    <div className="">
                                      <span className="">
                                        <img className="ui avatar image" width="30" src={defaultAvatarDoc}/>    
                                      </span>
                                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                                        久光百货开发流程文档一期.word
                                      </span>
                                      <span className="ui download" style={{marginLeft:15,color:'#2185d0',cursor:'pointer'}}>
                                        <i className="icon cloud download"></i> 
                                      </span>
                                      <div className="ui flowing popup transition hidden">
                                        <div className="ui divided center aligned">
                                          <div className="">
                                            下载
                                          </div>
                                        </div>  
                                      </div>
                                    </div>

                                     <div className="">
                                      <span className="">
                                        <img className="ui avatar image" width="30" src={defaultAvatarDoc}/>    
                                      </span>
                                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                                        久光百货开发流程文档二期.word
                                      </span>
                                      <span className="ui download" style={{marginLeft:15,color:'#2185d0',cursor:'pointer'}}>
                                        <i className="icon cloud download"></i> 
                                      </span>
                                      <div className="ui flowing popup transition hidden">
                                        <div className="ui divided center aligned">
                                          <div className="">
                                            下载
                                          </div>
                                        </div>  
                                      </div>
                                    </div>

                                    <div className="">
                                      <span className="">
                                        <img className="ui avatar image" width="30" src={defaultAvatarDoc}/>    
                                      </span>
                                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                                        久光百货开发流程文档三期.word
                                      </span>
                                      <span className="ui download" style={{marginLeft:15,color:'#2185d0',cursor:'pointer'}}>
                                        <i className="icon cloud download"></i> 
                                      </span>
                                      <div className="ui flowing popup transition hidden">
                                        <div className="ui divided center aligned">
                                          <div className="">
                                            下载
                                          </div>
                                        </div>  
                                      </div>
                                    </div>

                                  </div>
                                </div>  
                              </div>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div style={{height:38}}>
                          <Pager pages={10} current={4} pageSize={5}/>
                        </div>
                      </div>
                    </div>  

                    <div className="ui bottom attached tab segment" data-tab="four">
                      <h4 className="ui dividing header ">
                        <div className="ui mini icon input ">
                          <input type="text" placeholder="风险..."/>
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
                                <input type="checkbox"/>
                                <label></label>
                              </div>
                            </th>
                            <th>类别</th>
                            <th>风险描述</th>
                            <th>级别</th>
                            <th>状态</th>
                            <th>措施</th>
                            <th>后果</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="ui checkbox">
                                <input type="checkbox"/>
                                <label></label>
                              </div>
                            </td>
                            <td>商业风险</td>
                            <td>资金将会流失</td>
                            <td>
                              <div className="ui star rating " data-rating="3">
                                <i className="icon active"></i>
                                <i className="icon active"></i>
                                <i className="icon active"></i>
                                <i className="icon active"></i>
                                <i className="icon active"></i>
                              </div>
                            </td>
                            <td><div className="ui tag label green mini">未发生</div></td>
                            <td>急需政府的救助</td>
                            <td>项目失败</td>    
                          </tr>
                          <tr>
                            <td>
                              <div className="ui checkbox">
                                <input type="checkbox"/>
                                <label></label>
                              </div>
                            </td>
                            <td>技术风险</td>
                            <td>技术达不到预期效果</td>
                            <td>
                              <div className="ui star rating " data-rating="3">
                                <i className="icon active"></i>
                                <i className="icon active"></i>
                                <i className="icon active"></i>
                                <i className="icon active"></i>
                                <i className="icon"></i>
                              </div>
                            </td>
                            <td><div className="ui tag label green mini">待观察</div></td>
                            <td>招聘技术牛人带队</td> 
                            <td>项目失败</td>      
                          </tr>
                          <tr>
                            <td>
                              <div className="ui checkbox">
                                <input type="checkbox"/>
                                <label></label>
                              </div>
                            </td>
                            <td>人员风险</td>
                            <td>人员流动频繁</td>
                            <td>
                              <div className="ui star rating " data-rating="3">
                                <i className="icon active"></i>
                                <i className="icon active"></i>
                                <i className="icon active"></i>
                                <i className="icon"></i>
                                <i className="icon"></i>
                              </div>
                            </td>
                            <td><div className="ui tag label red mini">已发生</div></td>
                            <td>提高员工的待遇</td> 
                            <td>项目失败</td>      
                          </tr>
                        </tbody>
                      </table>
                      <div style={{height:38}}>
                        <Pager pages={2} current={1} pageSize={5}/>
                      </div>
                    </div>

                    <div className="ui bottom attached tab segment" data-tab="five">
                      <div className="ui top pointing secondary menu">
                        <a className="active item" data-tab="first">我方人员</a>
                        <a className="item" data-tab="second">客户人员</a>
                      </div>
                      <div className="ui active tab segment" data-tab="first">
                        <ul className="fdd-member-list list-unstyled">
                          <li className="fdd=member-item">
                            <img className="avatar img-circle img-46 pull-left" src ={defaultAvatar}/>
                            <div className="info-digest"> 
                              <p className="name-block"> 
                                <span className="name hinted" data-title="范都都">范都都</span>
                              </p> 
                              <div className="pos"> 
                                <span className="hinted" data-title="拥有者">负责人</span>
                              </div> 
                            </div>
                            <p className="p1 phone">  
                              <span className="icon icon-phone">
                                <i className="phone icon"></i>
                              </span> 
                              <a href="tel:15851428879" className="hinted ban" data-title="15851428879">15951428879</a>  
                            </p>
                            <p className="p1">  
                              <span className="icon icon-envelope"><i className="mail icon"></i></span> 
                              <a href="mailto:915414241@qq.com" className="hinted ban" data-title="915414241@qq.com">915414241@qq.com</a> 
                            </p>
                            <div className="mem-opera pull-right">
                              <div className="mem-rm-wrapper"> 
                                <button type="button" className="ui small basic button blue" data-id="572abd01bae323ca498ad602">编辑</button> 
                                <button type="button" className="ui small basic button red" data-id="572abd01bae323ca498ad602">移除</button> 
                              </div> 
                            </div>
                            <p className="list-bottom-line"></p>
                          </li>
                          <li className="fdd=member-item">
                            <img className="avatar img-circle img-46 pull-left" src ={defaultAvatarLogo1}/>
                            <div className="info-digest"> 
                              <p className="name-block"> 
                                <span className="name hinted" data-title="范都都">范小华</span>
                              </p> 
                              <div className="pos"> 
                                <span className="hinted" data-title="监督人">监督人</span>
                              </div> 
                            </div>
                            <p className="p1 phone">  
                              <span className="icon icon-phone">
                                <i className="phone icon"></i>
                              </span> 
                              <a href="tel:15851428879" className="hinted ban" data-title="15851428879">15852426879</a>  
                            </p>
                            <p className="p1">  
                              <span className="icon icon-envelope"><i className="mail icon"></i></span> 
                              <a href="mailto:915414241@qq.com" className="hinted ban" data-title="915414241@qq.com">915614441@qq.com</a> 
                            </p>
                            <div className="mem-opera pull-right">
                              <div className="mem-rm-wrapper"> 
                                <button type="button" className="ui small basic button blue" data-id="572abd01bae323ca498ad602">编辑</button> 
                                <button type="button" className="ui small basic button red" data-id="572abd01bae323ca498ad602">移除</button> 
                              </div>  
                            </div>
                            <p className="list-bottom-line"></p>
                          </li> 
                        </ul>
                      </div>

                      <div className="ui tab segment" data-tab="second">
                        <ul className="fdd-member-list list-unstyled">
                          <li className="fdd=member-item">
                            <img className="avatar img-circle img-46 pull-left" src ={defaultAvatarLogo2}/>
                            <div className="info-digest"> 
                              <p className="name-block"> 
                                <span className="name hinted" data-title="范都都">张军</span>
                              </p> 
                              <div className="pos"> 
                                <span className="hinted" data-title="拥有者">董事长</span>
                              </div> 
                            </div>
                            <p className="p1 phone">  
                              <span className="icon icon-phone">
                                <i className="phone icon"></i>
                              </span> 
                              <a href="tel:15851428879" className="hinted ban" data-title="15851428879">15851427879</a>  
                            </p>
                            <p className="p1">  
                              <span className="icon icon-envelope"><i className="mail icon"></i></span> 
                              <a href="mailto:915414241@qq.com" className="hinted ban" data-title="915414241@qq.com">915414241@qq.com</a> 
                            </p>
                            <div className="mem-opera pull-right">
                              <div className="mem-rm-wrapper"> 
                                <button type="button" className="ui small basic button blue" data-id="572abd01bae323ca498ad602">编辑</button> 
                                <button type="button" className="ui small basic button red" data-id="572abd01bae323ca498ad602">移除</button> 
                              </div>  
                            </div>
                            <p className="list-bottom-line"></p>
                          </li>
                          <li className="fdd=member-item">
                            <img className="avatar img-circle img-46 pull-left" src ={defaultAvatarLogo3}/>
                            <div className="info-digest"> 
                              <p className="name-block"> 
                                <span className="name hinted" data-title="黄婷">黄婷</span>
                              </p> 
                              <div className="pos"> 
                                <span className="hinted" data-title="负责人">负责人</span>
                              </div> 
                            </div>
                            <p className="p1 phone">  
                              <span className="icon icon-phone">
                                <i className="phone icon"></i>
                              </span> 
                              <a href="tel:15851428879" className="hinted ban" data-title="15851428879">15851469879</a>  
                            </p>
                            <p className="p1">  
                              <span className="icon icon-envelope"><i className="mail icon"></i></span> 
                              <a href="mailto:915414241@qq.com" className="hinted ban" data-title="915414241@qq.com">915468441@qq.com</a> 
                            </p>
                            <div className="mem-opera pull-right">
                              <div className="mem-rm-wrapper"> 
                                <button type="button" className="ui small basic button blue" data-id="572abd01bae323ca498ad602">编辑</button> 
                                <button type="button" className="ui small basic button red" data-id="572abd01bae323ca498ad602">移除</button> 
                              </div>  
                            </div>
                            <p className="list-bottom-line"></p>
                          </li>
                          <li className="fdd=member-item">
                            <img className="avatar img-circle img-46 pull-left" src ={defaultAvatarLogo4}/>
                            <div className="info-digest"> 
                              <p className="name-block"> 
                                <span className="name hinted" data-title="周建">周建</span>
                              </p> 
                              <div className="pos"> 
                                <span className="hinted" data-title="拥有者">项目组长</span>
                              </div> 
                            </div>
                            <p className="p1 phone">  
                              <span className="icon icon-phone">
                                <i className="phone icon"></i>
                              </span> 
                              <a href="tel:15851428879" className="hinted ban" data-title="15851428879">15851728875</a>  
                            </p>
                            <p className="p1">  
                              <span className="icon icon-envelope"><i className="mail icon"></i></span> 
                              <a href="mailto:915414241@qq.com" className="hinted ban" data-title="915414241@qq.com">915418941@qq.com</a> 
                            </p>
                            <div className="mem-opera pull-right">
                              <div className="mem-rm-wrapper"> 
                                <button type="button" className="ui small basic button blue" data-id="572abd01bae323ca498ad602">编辑</button> 
                                <button type="button" className="ui small basic button red" data-id="572abd01bae323ca498ad602">移除</button> 
                              </div>  
                            </div>
                            <p className="list-bottom-line"></p>
                          </li>   
                        </ul>
                      </div>

                    </div>

                    <div className="ui bottom attached tab segment" data-tab="six">
                      <div className="ui top pointing secondary menu">
                        <a className="active item" data-tab="third">客户方</a>
                        <a className="item" data-tab="fourth">我方</a>
                      </div>
                      <div className="ui active tab segment" data-tab="third">
                        <div className="">
                          <table className="ui single line table">
                            <thead>
                            <tr>
                              <th>
                                <Checkbox className="examplecheckbox" init={true}>
                                  <input type="checkbox"/>
                                  <label></label>
                                </Checkbox>
                              </th>
                              <th>事项名称</th>
                              <th>开始时间</th>
                              <th>结束时间</th>
                              <th>状态</th>
                              <th>进展情况</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>
                                <Checkbox className="examplecheckbox" init={true}>
                                  <input type="checkbox"/>
                                  <label></label>
                                </Checkbox>
                              </td>
                              <td>公司规模发展至30人</td>
                              <td>2016-01-21</td>
                              <td>2017-01-21</td>
                              <td><div className="ui tag label green mini">正在执行</div></td>
                              <td>
                                <p className="list-top">
                                  <span className="time">
                                    <div className="ui indicating small progress" data-percent="60" id="example1">
                                      <div className="bar" style={{transitionDuration: '300ms',width: '60%'}}></div>
                                      <div className="label">进度 60%</div>
                                    </div>
                                  </span>
                                </p>          
                              </td> 
                            </tr>
                            <tr>
                              <td>
                                <Checkbox className="examplecheckbox" init={true}>
                                  <input type="checkbox"/>
                                  <label></label>
                                </Checkbox>
                              </td>
                              <td>二年内成为中小型公司</td>
                              <td>2016-01-21</td>
                              <td>2018-01-21</td>
                              <td><div className="ui tag label green mini">正在执行</div></td>
                              <td>
                                <p className="list-top">
                                  <span className="time">
                                    <div className="ui indicating small progress" data-percent="20" id="example1">
                                      <div className="bar" style={{transitionDuration: '300ms',width: '20%'}}></div>
                                      <div className="label">进度 20%</div>
                                    </div>
                                  </span>
                                </p>          
                              </td> 
                            </tr>
                             <tr>
                              <td>
                                <Checkbox className="examplecheckbox" init={true}>
                                  <input type="checkbox"/>
                                  <label></label>
                                </Checkbox>
                              </td>
                              <td>培训员工技能</td>
                              <td>2016-04-21</td>
                              <td>2016-08-21</td>
                              <td><div className="ui tag label green mini">正在执行</div></td>
                              <td>
                                <p className="list-top">
                                  <span className="time">
                                    <div className="ui indicating small progress" data-percent="80" id="example1">
                                      <div className="bar" style={{transitionDuration: '300ms',width: '80%'}}></div>
                                      <div className="label">进度 80%</div>
                                    </div>
                                  </span>
                                </p>          
                              </td> 
                            </tr>
                            </tbody>
                          </table>
                          <div style={{height:38}}>
                            <Pager pages={10} current={4} pageSize={5}/>
                          </div>
                        </div>
                      </div>

                      <div className="ui tab segment" data-tab="fourth">
                        <div className="">
                          <table className="ui single line table">
                            <thead>
                            <tr>
                              <th>
                                <Checkbox className="examplecheckbox" init={true}>
                                  <input type="checkbox"/>
                                  <label></label>
                                </Checkbox>
                              </th>
                              <th>事项名称</th>
                              <th>开始时间</th>
                              <th>结束时间</th>
                              <th>状态</th>
                              <th>进展情况</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>
                                <Checkbox className="examplecheckbox" init={true}>
                                  <input type="checkbox"/>
                                  <label></label>
                                </Checkbox>
                              </td>
                              <td>每年补助10万</td>
                              <td>2016-01-21</td>
                              <td>2017-01-21</td>
                              <td><div className="ui tag label green mini">正在执行</div></td>
                              <td>
                                <p className="list-top">
                                  <span className="time">
                                    <div className="ui indicating small progress" data-percent="50" id="example1">
                                      <div className="bar" style={{transitionDuration: '300ms',width: '50%'}}></div>
                                      <div className="label">进度 50%</div>
                                    </div>
                                  </span>
                                </p>          
                              </td> 
                            </tr>
                            <tr>
                              <td>
                                <Checkbox className="examplecheckbox" init={true}>
                                  <input type="checkbox"/>
                                  <label></label>
                                </Checkbox>
                              </td>
                              <td>新公司可以报销20%费用</td>
                              <td>2016-01-21</td>
                              <td>2017-01-21</td>
                              <td><div className="ui tag label green mini">正在执行</div></td>
                              <td>
                                <p className="list-top">
                                  <span className="time">
                                    <div className="ui indicating small progress" data-percent="60" id="example1">
                                      <div className="bar" style={{transitionDuration: '300ms',width: '60%'}}></div>
                                      <div className="label">进度 60%</div>
                                    </div>
                                  </span>
                                </p>          
                              </td> 
                            </tr>
                             <tr>
                              <td>
                                <Checkbox className="examplecheckbox" init={true}>
                                  <input type="checkbox"/>
                                  <label></label>
                                </Checkbox>
                              </td>
                              <td>提供公司办公的地方</td>
                              <td>2015-01-21</td>
                              <td>2016-01-21</td>
                              <td><div className="ui tag label green mini">正在执行</div></td>
                              <td>
                                <p className="list-top">
                                  <span className="time">
                                    <div className="ui indicating small progress" data-percent="100" id="example1">
                                      <div className="bar" style={{transitionDuration: '300ms',width: '100%'}}></div>
                                      <div className="label">进度 100%</div>
                                    </div>
                                  </span>
                                </p>          
                              </td> 
                            </tr>
                            </tbody>
                          </table>
                          <div style={{height:38}}>
                            <Pager pages={10} current={4} pageSize={5}/>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="ui bottom attached tab segment" data-tab="seven">
                      <div className="">
                        <div className="ui styled accordion">
                          <div className="title">
                            <i className="dropdown icon"></i>
                            <i className="folder icon"></i>
                            久光百货项目
                          </div>
                          <div className="content"> 
                            <div className="accordion transition hidden">
                              <div className="active title">
                                <i className="dropdown icon"></i>
                                <i className="folder icon"></i>
                                关于合同方面的文档
                              </div>
                              <div className="active content">
                                <div className="accordion">
                                  <div className="title">
                                    <i className="dropdown icon"></i>
                                    <i className="folder icon"></i>
                                    园区资金补助文档
                                  </div>
                                  <div className="content">
                                    <table className="ui single line table">
                                      <thead>
                                        <tr>
                                          <th>
                                            <div className="ui checkbox">
                                              <input type="checkbox"/>
                                              <label></label>
                                            </div>
                                          </th>
                                          <th>文件名称</th>
                                          <th>文件编号</th>
                                          <th>上传者</th>
                                          <th>更新时间</th>
                                          <th>操作</th>
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
                                          <td>
                                            <div className="file_icon doc">doc</div>
                                            <a className="fdd_file_name" href="http://120.26.201.213:8889/inv/file.do?_platform=pc&type=1&filePath=20160609.docx" target="_blank">园区调查问卷.word</a></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                            <i className="share alternate icon link operate" data-content="分享" data-variation="mini"></i>
                                            <i className="external share icon link operate" data-content="推送" data-variation="mini"></i>
                                            <i className="unhide icon link operate" data-content="查看" data-variation="mini"></i>
                                            <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                                            <i className="minus square icon link operate red" data-content="删除" data-variation="mini"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <Checkbox init={true}>
                                              <input type="checkbox"/>
                                              <label></label>
                                            </Checkbox>
                                          </td>
                                          <td>
                                            <div className="file_icon xlsx">xlsx</div>
                                            <a className="fdd_file_name" href="http://120.26.201.213:8889/inv/file.do?_platform=pc&type=1&filePath=20160607001.xlsx" target="_blank">2016年招商完成情况报表.xlsx</a></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                            <i className="share alternate icon link operate" data-content="分享" data-variation="mini"></i>
                                            <i className="external share icon link operate" data-content="推送" data-variation="mini"></i>
                                            <i className="unhide icon link operate" data-content="查看" data-variation="mini"></i>
                                            <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                                            <i className="minus square icon link operate red" data-content="删除" data-variation="mini"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <Checkbox init={true}>
                                              <input type="checkbox"/>
                                              <label></label>
                                            </Checkbox>
                                          </td>
                                          <td>
                                            <div className="file_icon ppt">ppt</div>
                                            <a className="fdd_file_name" href="http://120.26.201.213:8889/inv/file.do?_platform=pc&type=1&filePath=20160610.pptx" target="_blank">招商系统建设方案.ppt</a></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                            <i className="share alternate icon link operate" data-content="分享" data-variation="mini"></i>
                                            <i className="external share icon link operate" data-content="推送" data-variation="mini"></i>
                                            <i className="unhide icon link operate" data-content="查看" data-variation="mini"></i>
                                            <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                                            <i className="minus square icon link operate red" data-content="删除" data-variation="mini"></i>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>

                              <div className="active title">
                                <i className="dropdown icon"></i>
                                <i className="folder icon"></i>
                                实施方案说明文档
                              </div>
                              <div className="active content">
                                <div className="accordion">
                                  <div className="title">
                                    <i className="dropdown icon"></i>
                                    <i className="folder icon"></i>
                                    建设权限管理平台
                                  </div>
                                  <div className="content">
                                    <table className="ui single line table">
                                      <thead>
                                        <tr>
                                          <th>
                                            <div className="ui checkbox">
                                              <input type="checkbox"/>
                                              <label></label>
                                            </div>
                                          </th>
                                          <th>文件名称</th>
                                          <th>文件编号</th>
                                          <th>上传者</th>
                                          <th>更新时间</th>
                                          <th>操作</th>
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
                                          <td>
                                            <div className="file_icon doc">doc</div>
                                            <span className="fdd_file_name">建设权限管理角色权限的文档.word</span></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                            <i className="share alternate icon link operate" data-content="分享" data-variation="mini"></i>
                                            <i className="external share icon link operate" data-content="推送" data-variation="mini"></i>
                                            <i className="unhide icon link operate" data-content="查看" data-variation="mini"></i>
                                            <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                                            <i className="minus square icon link operate red" data-content="删除" data-variation="mini"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <Checkbox init={true}>
                                              <input type="checkbox"/>
                                              <label></label>
                                            </Checkbox>
                                          </td>
                                          <td>
                                            <div className="file_icon doc">doc</div>
                                            <span className="fdd_file_name">建设权限管理菜单权限的文档.word</span></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                            <i className="share alternate icon link operate" data-content="分享" data-variation="mini"></i>
                                            <i className="external share icon link operate" data-content="推送" data-variation="mini"></i>
                                            <i className="unhide icon link operate" data-content="查看" data-variation="mini"></i>
                                            <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                                            <i className="minus square icon link operate red" data-content="删除" data-variation="mini"></i>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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