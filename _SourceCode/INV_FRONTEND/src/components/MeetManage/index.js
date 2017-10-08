import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Checkbox,Dropdown} from 'react-semantify'
import Input from '../Common/form/input'
import Textarea from '../Common/form/textarea'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import ConfirmModal from '../Common/confirmModal'
import WarningModal from '../Common/warningModal'
import defaultAvatar from '../../assets/images/doc.png'
import personIng1 from '../../assets/images/elyse.png'
import personIng2 from '../../assets/images/kristy.png'
import personIng3 from '../../assets/images/helen.jpg'
import personIng4 from '../../assets/images/jenny.jpg'
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
export default class MeetManage extends Component {
  constructor(props){
    super(props)
    this.addModal = this.addModal.bind(this)
    this.modifyModal = this.modifyModal.bind(this)
    this.deleteModal = this.deleteModal.bind(this)
    this.uploadFn = this.uploadFn.bind(this)
    this.state={
      title:'新增会议',
      current:1,
      meetingList:[
        {
          uploadDate:'今天 上午10:30',
          meetNumber:'20160524',
          meetName:'安全生产专题会议',
          meetTheme:'119号专题会议纪要',
          meetAdress:'昆山',
          hoster:[
            {
              personName:'陈局',
              personImg:personIng1
            }
          ],
          recorder:[
            {
              personName:'张宇',
              personImg:personIng2
            }
          ],
          meetPerson:[
            {
              personName:'陈局',
              personImg:personIng1
            },
            {
              personName:'张宇',
              personImg:personIng2
            },
            {
              personName:'黄颜婷',
              personImg:personIng3
            }
          ],
          project:'倍斯特食品',
          emailState:'已结束',
          attachment:3
        },
        {
          uploadDate:'今天 下午14:30',
          meetNumber:'20160524',
          meetName:'服务业专心资金会议',
          meetTheme:'105号专题会议纪要',
          meetAdress:'苏州园区',
          hoster:[
            {
              personName:'杜局',
              personImg:personIng2
            }
          ],
          recorder:[
            {
              personName:'陈柳颖',
              personImg:personIng1
            }
          ],
          meetPerson:[
            {
              personName:'杜局',
              personImg:personIng2
            },
            {
              personName:'陈柳颖',
              personImg:personIng1
            },
            {
              personName:'张苏',
              personImg:personIng3
            }
          ],
          project:'宝时得机械',
          emailState:'未上传',
          attachment:3
        },
        {
          uploadDate:'明天 上午11:00',
          meetNumber:'20160524',
          meetName:'园区发展规划启动',
          meetTheme:'90号专题会议纪要',
          meetAdress:'苏州园区',
          hoster:[
            {
              personName:'张局',
              personImg:personIng4
            }
          ],
          recorder:[
            {
              personName:'黄艳婷',
              personImg:personIng3
            }
          ],
          meetPerson:[
            {
              personName:'张局',
              personImg:personIng4
            },
            {
              personName:'黄艳婷',
              personImg:personIng3
            },
            {
              personName:'黄玉婷',
              personImg:personIng2
            }
          ],
          project:'苏州久光',
          emailState:'未上传',
          attachment:3
        },
        {
          uploadDate:'后天 上午09:30',
          meetNumber:'20160524',
          meetName:'服务业租金补贴会议',
          meetTheme:'81号专题会议纪要',
          meetAdress:'苏州新区',
          hoster:[
            {
              personName:'王局',
              personImg:personIng3
            }
          ],
          recorder:[
            {
              personName:'陈颜',
              personImg:personIng2
            }
          ],
          meetPerson:[
            {
              personName:'王局',
              personImg:personIng3
            },
            {
              personName:'陈颜',
              personImg:personIng2
            },
            {
              personName:'黄颜婷',
              personImg:personIng1
            }
          ],
          project:'久光电商贸易',
          emailState:'未上传',
          attachment:3
        }
      ]
    }
  }

  static propTypes = {
  }

  static fetchData(params){
  }

  componentDidMount() {
    $('.ui.viewFile').popup({
      hoverable:true
    })
    $('.ui.download').popup({
      hoverable:true
    })
    $('.ui.activityDetails').popup({
      hoverable:true
    })
    $('.ui.projectDetails').popup({
      hoverable:true
    })
    $('.ui.modify').popup({
      hoverable:true
    })
    $('.ui.delete').popup({
      hoverable:true
    })
    $('.ui.emailState').popup({
      hoverable:true
    })
  }

  addModal(){
    // this.setState({
    //   title:'新增会议'         
    // })
    $('#meetModal').modal('show')
  }

  modifyModal(){
    // this.setState({
    //   title:'修改会议'            
    // })
    $('#meetModal').modal('show')
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
    $('#meetModal').modal('hide')
  }

   //关闭弹出框
  onCloseModal(){
    $('#meetModal').modal('hide')
  }

  exactSearchModal(){
    // if($('.exactSearch i').hasClass('down')){
    //   $('.exactSearch i').removeClass('down').addClass('up')
    // }else if($('.exactSearch i').hasClass('up')){
    //   $('.exactSearch i').removeClass('up').addClass('down')
    // }
    $('.exactSearchList').slideToggle()
  }

  uploadFn(){
    $('.meetFileUpLoad').click()
  }

  //改变页数
  pageChange(){   
    
  }

  render() {
    const _this=this
    const meetingListView=this.state.meetingList.map(function(item,index){
      const hosterInformation = item.hoster.map(function(personItem){
        return (
          <span style={{color:'#0099CC',cursor: 'pointer',paddingRight:'5px'}}>
            <img className="ui image mini floated left projectDetails" src={personItem.personImg} />
            <div className="ui flowing popup transition hidden">
              <div className="ui divided center aligned">
                
                <div className="card">
                  <div className="content" style={{textAlign:'left'}}>
                    <img className="right floated mini ui image" src={personItem.personImg} />
                    <div className="header"><i className="icon user"></i> {personItem.personName}</div>
                    <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                    <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                  </div>
                </div>
              </div>  
            </div>
          </span>
        )
      })

      const recorderInformation = item.recorder.map(function(personItem){
        return (
          <span style={{color:'#0099CC',cursor: 'pointer',paddingRight:'5px'}}>
            <img className="ui image mini floated left projectDetails" src={personItem.personImg} />
            <div className="ui flowing popup transition hidden">
              <div className="ui divided center aligned">
                
                <div className="card">
                  <div className="content" style={{textAlign:'left'}}>
                    <img className="right floated mini ui image" src={personItem.personImg} />
                    <div className="header"><i className="icon user"></i> {personItem.personName}</div>
                    <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                    <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                  </div>
                </div>
              </div>  
            </div>
          </span>
        )
      })

      const personInformation = item.meetPerson.map(function(personItem){
        return (
          <span style={{color:'#0099CC',cursor: 'pointer',paddingRight:'5px'}}>
            <img className="ui image mini floated left projectDetails" src={personItem.personImg} />
            <div className="ui flowing popup transition hidden">
              <div className="ui divided center aligned">
                
                <div className="card">
                  <div className="content" style={{textAlign:'left'}}>
                    <img className="right floated mini ui image" src={personItem.personImg} />
                    <div className="header"><i className="icon user"></i> {personItem.personName}</div>
                    <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                    <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                  </div>
                </div>
              </div>  
            </div>
          </span>
        )
      })  

      return(
        <tr>
            <td>
              <Checkbox init={true}>
                <input type="checkbox"/>
                <label></label>
              </Checkbox>
            </td>
            <td onClick={_this.modifyModal} style={{color:'#0099CC',cursor: 'pointer'}}>
              {item.meetName}
            </td>
            <td>{item.uploadDate}</td>
            <td>{item.meetTheme}</td>
            <td>{item.meetAdress}</td>
            <td>{hosterInformation}</td>
            <td>{recorderInformation}</td>
            <td>{personInformation}</td> 
            <td style={{color:'#0099CC',cursor: 'pointer'}}>
              <div className="ui projectDetails">{item.project}</div>
              <div className="ui flowing popup transition hidden">
                <div className="ui divided center aligned">
                  <div className="">
                    查看项目具体信息
                  </div>
                </div>  
              </div>
            </td>

            <td>
              {(() => {
                if(item.emailState=='已结束'){
                  return <div className="ui tag label green mini">{item.emailState}</div>
                }else if(item.emailState=='未上传'){
                  return <div className="ui tag label red mini">{item.emailState}</div>
                }
              })()}
            </td>  

            <td style={{fontSize: 'large'}}>
              <div className="ui viewFile" style={{color:'#2185d0',cursor: 'pointer'}}>
                {item.attachment}
              </div>
              <div className="ui flowing popup transition hidden">
                <div className="ui divided center aligned">
                  <div className="">

                    <div className="">
                      <span className="">
                        <img className="ui avatar image" width="30" src={defaultAvatar}/>    
                      </span>
                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                        招商系统需求文档一期.word
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
                        <img className="ui avatar image" width="30" src={defaultAvatar}/>    
                      </span>
                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                        招商系统需求文档二期.word
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
                        <img className="ui avatar image" width="30" src={defaultAvatar}/>    
                      </span>
                      <span className="" style={{borderBottom: '1px solid #0099CC',paddingTop:5,color:'#0099CC',cursor: 'pointer'}}>
                        招商系统需求文档三期.word
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

            <td> 
              <div className="ui modify" style={{float:'left',color:'#2185d0'}} onClick={_this.modifyModal}>
                <i className="edit icon"></i>
              </div>
              <div className="ui flowing popup transition hidden">
                <div className="ui divided center aligned">
                  <div className="">
                    修改
                  </div>
                </div>  
              </div>
              
              <div className="ui delete" style={{float:'left',color:'#d01919'}} onClick={_this.deleteModal}>
                <i className="delete icon"></i>
              </div>
              <div className="ui flowing popup transition hidden">
                <div className="ui divided center aligned">
                  <div className="">
                    删除
                  </div>
                </div>  
              </div>
            </td>
          </tr>    
        )
    })
    return (
      <div>
        <ConfirmModal onClose={this.onCloseModal}
                      onSave={this.onSave}                    
                      title={this.state.title}
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

                <div className="field">
                  <label>相关项目</label>
                  <span style={{paddingLeft:'10px',color:'#2185d0',cursor:'pointer'}}>新建</span>
                  <Dropdown className="item ui selection dropdown mini right" init={true}>
                      <input name="states" type="hidden"/>
                        <i className="dropdown icon"></i>
                        <div className="default text">相关项目</div>
                        <div className="menu">
                          <a className="item" data-value="1">宝时得机械</a>
                          <a className="item" data-value="2">久光电商贸易</a>
                          <a className="item" data-value="3">倍斯特食品</a>
                          <a className="item" data-value="4">其他</a>
                        </div>
                  </Dropdown>
                </div>

              </div>

              <div className="fields three">
                <Input fieldClassName="field required"
                        type="datetime-local" 
                        name="receptionObj" 
                        label="时间"
                        placeholder="时间" 
                        
                  />
                
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
              </div>

              <div className="fields three">
                
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

              <h4 className="ui dividing header " style={{clear:'both'}}>
                <div className="title">会议管理</div>
                
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

                <button className="ui small basic button right floated blue" onClick={this.exportModal}><i
                  className="icon external"></i>导出
                </button>
                <button className="ui small basic button right floated red" onClick={this.deleteModal}><i
                  className="icon delete"></i>删除
                </button>
                <button className="ui small basic button right floated blue" onClick={this.addModal}><i
                  className="icon plus"></i>新增
                </button>
              </h4>
              
              <div className="exactSearchList" style={{height:60,display:'none'}}>
                <div className="ui form">
                  <div className="inline fields">
                    <div className="field">
                      <label style={{height:38,lineHeight:'38px'}}>名称</label>
                      <Dropdown className="item ui selection dropdown right" init={true} style={{height:'auto'}}>
                        <input name="states" type="hidden"/>
                          <i className="dropdown icon"></i>
                          <div className="default text">名称</div>
                          <div className="menu">
                            <a className="item" data-value="1">参加技术交流会</a>
                            <a className="item" data-value="2">社会民意活动</a>
                          </div>
                      </Dropdown>
                    </div>
                    <div className="field">
                      <label style={{height:38,lineHeight:'38px'}}>时间</label>
                      <input type="date" placeholder="时间" />
                    </div>
                    
                    <div className="field">
                      <label style={{height:38,lineHeight:'38px'}}>主持人</label>
                      <Dropdown className="ui multiple selection dropdown" init={true} style={{height:'auto'}}>
                        <input name="states" type="hidden"/>
                          <i className="dropdown icon"></i>
                          <div className="default text">主持人</div>
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
                    <div className="field">
                      <label style={{height:38,lineHeight:'38px'}}>相关项目</label>
                      <Dropdown className="item ui selection dropdown mini right" init={true}>
                          <input name="states" type="hidden"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">相关项目</div>
                            <div className="menu">
                              <a className="item" data-value="1">宝时得机械</a>
                              <a className="item" data-value="2">久光电商贸易</a>
                              <a className="item" data-value="3">倍斯特食品</a>
                              <a className="item" data-value="4">其他</a>
                            </div>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui segment" style={{marginTop:0}}>  
                <table className="ui single line table">
                  <thead>
                  <tr>
                    <th>
                      <div className="ui checkbox">
                        <input type="checkbox"/>
                        <label></label>
                      </div>
                    </th>
                    <th>会议名称</th>
                    <th>会议时间</th>
                    <th>会议主题</th>
                    <th>会议地点</th>
                    <th>主持人</th>
                    <th>记录人</th>
                    <th>参与人员</th>
                    <th>相关项目</th> 
                    <th>状态</th> 
                    <th>附件</th>            
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                  {meetingListView}
                  </tbody>
                </table>
                <div style ={{height:38}}>
                  <Pager pages='4' current={this.state.current} onChange={this.pageChange} pageSize={5}/>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}