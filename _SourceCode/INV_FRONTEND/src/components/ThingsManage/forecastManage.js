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
import Sidebar from './sidebar'
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
export default class ForecastManage extends Component {
  constructor(props){
    super(props)
    this.addModal = this.addModal.bind(this)
    this.editModal = this.editModal.bind(this)
    this.deleteModal = this.deleteModal.bind(this)    
    this.getFormData = this.getFormData.bind(this)
    this.submitData = this.submitData.bind(this)
    this.submitDeleteData = this.submitDeleteData.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.closeDeleteModal = this.closeDeleteModal.bind(this)
    this.addPersonModal = this.addPersonModal.bind(this)
    this.uploadFn = this.uploadFn.bind(this)

    this.state={
      isShow:false,
      isShow2:false,
      isDeleteShow: false,
      activeNote:'0',
      title:'新增预报',
      current:1,
      meetingList:[
        {
          meetingActivity:'社情民意活动',
          receptionTime:'今天 上午10:12',
          receptionDays:'2.0',
          meetingPerson:[
            {
              personName:'周华',
              personImg:personIng1,
              address:'1234'
            },
            {
              personName:'陈柳颖',
              personImg:personIng2,
              address:'1234'
            }
          ],
          meetingAddress:'莆田社区',
          meetingType:'会议',
          meetingState:'',
          project:'宝时得机械',
          emailState:'已发送',
          attachment:3
        },
        {
          meetingActivity:'送温暖活动',
          receptionTime:'明天 上午09:30',
          receptionDays:'2.0',
          meetingPerson:[
            {
              personName:'刘华',
              personImg:personIng1,
              address:'1234'
            },
            {
              personName:'张凡玉',
              personImg:personIng2,
              address:'1234'
            }
          ],
          meetingAddress:'四季新社区',
          meetingType:'来访',
          meetingState:'',
          project:'苏州久光',
          emailState:'已发送',
          attachment:3
        },
        {
          meetingActivity:'疯狂电器抢购',
          receptionTime:'明天 上午11:00',
          receptionDays:'2.0',
          meetingPerson:[
            {
              personName:'黄敏燕',
              personImg:personIng1,
              address:'1234'
            },
            {
              personName:'黄艳婷',
              personImg:personIng2,
              address:'1234'
            }
          ],
          meetingAddress:'湖滨社区',
          meetingType:'来访',
          meetingState:'',
          project:'久光电商贸易',
          emailState:'未发送',
          attachment:3
        },
        {
          meetingActivity:'美食促销',
          receptionTime:'后天 下午14:30',
          receptionDays:'2.0',
          meetingPerson:[
            {
              personName:'黄艳婷',
              personImg:personIng1,
              address:'1234'
            },
            {
              personName:'周华',
              personImg:personIng2,
              address:'1234'
            }
          ],
          meetingAddress:'湖东社工委',
          meetingType:'出差',
          meetingState:'',
          project:'倍斯特食品',
          emailState:'未发送',
          attachment:3
        }
      ]
    }
  }

  static propTypes = {
  }

  componentDidMount() {
    $('.ui.viewFile').popup({
      hoverable:true
    })
    $('.ui.download').popup({
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
    $('.modal').modal({
      allowMultiple: true
    })
    $('.ui.dropdown.forecastType').dropdown({
      onChange: function(value, text, $selectedItem) {
        if(value=='1'||value=='3'||value=='4'){
          $('.comingPerson').hide()
        }else if (value=='2'){
          $('.comingPerson').show()
        }
      }
    })
  }

  addModal(){
    this.setState({
      isShow:true
    })
  }

  editModal(){
    this.setState({
      isShow:true
    })
  }

  deleteModal(){
    this.setState({
      isDeleteShow:true
    })
  }

  //提交增加或修改的数据功能
  submitData(){
    this.closeModal()
  }

  //提交删除的数据
  submitDeleteData(){ 
    this.closeDeleteModal() 
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
      activeNote: '1'
    })
  }

  exactSearchModal(){
    // if($('.exactSearch i').hasClass('down')){
    //   $('.exactSearch i').removeClass('down').addClass('up')
    // }else if($('.exactSearch i').hasClass('up')){
    //   $('.exactSearch i').removeClass('up').addClass('down')
    // }
    // $('.exactSearchList').slideToggle()
    $('.exactSearchList').transition({
      animation  : 'scale'
    })
  }

  uploadFn(){
    $('.forecastFileUpLoad').click()
  }

  //改变页数
  pageChange(){   
    
  }

  addPersonModal(){
    this.setState({
      isShow2:true
    })
  }

  render() {
    const _this = this
    const meetingListView = this.state.meetingList.map(function(item,index){ 
      const personInformation = item.meetingPerson.map(function(personItem){
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
            <td onClick={_this.editModal} style={{color:'#0099CC',cursor: 'pointer'}}>
              {item.meetingActivity}
            </td>
            <td>{item.receptionTime}</td>
            <td>{item.receptionDays}</td>
            <td>{personInformation}</td>
            <td>{item.meetingAddress}</td>
            <td>{item.meetingType}</td>
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
                if(item.emailState=='已发送'){
                  return <div className="ui tag label green mini">{item.emailState}</div>
                }else if(item.emailState=='未发送'){
                  return <div className="ui tag label red mini">{item.emailState}</div>
                }
              })()}

              <div className="ui flowing popup transition hidden">
                <div className="ui divided center aligned">
                  <div className="">
                    <div className="">  
                      <span className="">
                        再次发送
                      </span>
                      <span className="" style={{marginLeft:15,color:'#2185d0',cursor:'pointer'}}>
                        <i className="icon send"></i> 
                      </span>   
                    </div>
                  </div>
                </div>  
              </div>
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
              <div className="ui emailState" style={{float:'left',color:'#2185d0',cursor: 'pointer'}}>
                <i className="send icon"></i>
              </div>
              <div className="ui flowing popup transition hidden">
                <div className="ui divided center aligned">
                  <div className="">
                    发送
                  </div>
                </div>  
              </div>

              <div className="ui modify" style={{float:'left',color:'#2185d0',cursor: 'pointer'}} onClick={_this.editModal}>
                <i className="edit icon"></i>
              </div>
              <div className="ui flowing popup transition hidden">
                <div className="ui divided center aligned">
                  <div className="">
                    修改
                  </div>
                </div>  
              </div>
              
              <div className="ui delete" style={{float:'left',color:'#d01919',cursor: 'pointer'}} onClick={_this.deleteModal}>
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

        <ConfirmModal 
           onClose={this.closeModal}
           onSave={this.submitData}
           getFormData={this.getFormData}
           title='新增预报'
           isOpened={this.state.isShow}
          >
   
            <div className="fields three">
              <div className="field">
                <label>预报类型</label>
                <Dropdown className="item ui selection dropdown mini right forecastType" onChange={this.onChangeType} init={true}>
                    <input name="states" type="hidden" onChange={this.onChangeType}/>
                      <i className="dropdown icon"></i>
                      <div className="default text">预报类型</div>
                      <div className="menu" onChange={this.onChangeType}>
                        <a className="item" data-value="1">会议</a>
                        <a className="item" data-value="2">来访</a>
                        <a className="item" data-value="3">出差</a>
                        <a className="item" data-value="4">其他</a>
                      </div>
                </Dropdown>
              </div>

               

              <Input  fieldClassName="field required"
                      type="text" 
                      name="receptionObj" 
                      label="事项"
                      placeholder="事项" 
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
              <div className="field required">
                <label>开始时间</label>
                  <input type="datetime-local" placeholder="接待开始时间" />                               
              </div>
              <div className="field required">
                <label>结束时间</label>
                  <input type="datetime-local" placeholder="接待开始时间" />                               
              </div>
              
              
              <Input  fieldClassName="field required"
                      type="text" 
                      name="meetingAddress" 
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

            </div>

            <div className="fields three">
              <div className="field">
                <label>领导</label>
                <Dropdown className="item ui multiple selection dropdown mini right search" init={true}>
                    <input name="states" type="hidden"/>
                      <i className="dropdown icon"></i>
                      <div className="default text">领导</div>
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
              <div className="field">
                <label>我方人员</label>
                <Dropdown className="item ui multiple selection dropdown mini right search" init={true} style={{height:'auto'}}>
                    <input name="states" type="hidden"/>
                      <i className="dropdown icon"></i>
                      <div className="default text">我方人员</div>
                        <div className="menu">
                          <a className="item" data-value="1">陈柳颖</a>
                          <a className="item" data-value="2">黄艳婷</a>
                          <a className="item" data-value="3">高婷婷</a>
                          <a className="item" data-value="4">王小强</a>
                          <a className="item" data-value="5">张安</a>
                          <a className="item" data-value="6">王敏燕</a>
                          <a className="item" data-value="7">王文</a>
                          <a className="item" data-value="8">张苏</a>
                          <a className="item" data-value="9">李俊</a>
                          <a className="item" data-value="10">张伟</a>
                          <a className="item" data-value="11">王燕</a>
                          <a className="item" data-value="12">李昊</a>
                        </div>
                </Dropdown>
              </div>
            </div> 

            <div className="fields three comingPerson" style={{display:'none'}}>
              <div className="field">
                <label>所属公司</label>
                <Dropdown className="item ui selection dropdown mini right search" init={true}>
                    <input name="states" type="hidden"/>
                      <i className="dropdown icon"></i>
                      <div className="default text">所属公司</div>
                        <div className="menu">
                          <a className="item" data-value="1">三星</a>
                          <a className="item" data-value="2">华为</a>
                          <a className="item" data-value="3">小米</a>
                          <a className="item" data-value="4">腾讯</a>
                          <a className="item" data-value="5">新浪</a>
                          <a className="item" data-value="6">百度</a>
                        </div>
                </Dropdown>
              </div>

              <div className="field">
                <label>对方人员</label>
                <span style={{paddingLeft:'10px',color:'#2185d0',cursor:'pointer'}} onClick={this.addPersonModal}>新增</span>
                <Dropdown className="item ui multiple selection dropdown mini right search" init={true} style={{height:'auto'}}>
                    <input name="states" type="hidden"/>
                      <i className="dropdown icon"></i>
                      <div className="default text">对方人员</div>
                        <div className="menu">
                          <a className="item" data-value="1">陈柳颖</a>
                          <a className="item" data-value="2">黄艳婷</a>
                          <a className="item" data-value="3">高婷婷</a>
                          <a className="item" data-value="4">王小强</a>
                          <a className="item" data-value="5">张安</a>
                          <a className="item" data-value="6">王敏燕</a>
                          <a className="item" data-value="7">王文</a>
                          <a className="item" data-value="8">张苏</a>
                          <a className="item" data-value="9">李俊</a>
                          <a className="item" data-value="10">张伟</a>
                          <a className="item" data-value="11">王燕</a>
                          <a className="item" data-value="12">李昊</a>
                        </div>
                </Dropdown>
              </div>

            </div>

            <Textarea fieldClassName="field"
                        name="description" 
                        label="备注"
                        placeholder="备注" 
                        rows="2" 
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

        <ConfirmModal 
          onClose={this.closeModal}
          onSave={this.submitData}
          getFormData={this.getFormData}
          title='新增人员'
          isOpened={this.state.isShow2}
        >
          <div className="fields two">
            <Input  fieldClassName="field required"
                        type="text" 
                        name="meetingAddress" 
                        label="姓名"
                        placeholder="姓名" 
                        validations={{
                          minLength: 1,
                          maxLength: 10
                        }}
                        validationErrors={{
                          minLength: '不能为空',
                          maxLength: '不能超过10字'
                        }}
            /> 
            <Input  fieldClassName="field required"
                        type="text" 
                        name="meetingAddress" 
                        label="联系方式"
                        placeholder="联系方式" 
                        validations={{
                          minLength: 1,
                          maxLength: 10
                        }}
                        validationErrors={{
                          minLength: '不能为空',
                          maxLength: '不能超过10字'
                        }}
            /> 

          </div>
          <div className="fields two">
            <div className="field">
              <label>所属公司</label>
              <Dropdown className="item ui selection dropdown mini right search" init={true}>
                  <input name="states" type="hidden"/>
                    <i className="dropdown icon"></i>
                    <div className="default text">所属公司</div>
                      <div className="menu">
                        <a className="item" data-value="1">三星</a>
                        <a className="item" data-value="2">华为</a>
                        <a className="item" data-value="3">小米</a>
                        <a className="item" data-value="4">腾讯</a>
                        <a className="item" data-value="5">新浪</a>
                        <a className="item" data-value="6">百度</a>
                      </div>
              </Dropdown>
            </div>
            <Input  fieldClassName="field required"
                        type="text" 
                        name="meetingAddress" 
                        label="职务"
                        placeholder="职务" 
                        validations={{
                          minLength: 1,
                          maxLength: 10
                        }}
                        validationErrors={{
                          minLength: '不能为空',
                          maxLength: '不能超过10字'
                        }}
            /> 
  
          </div>
        </ConfirmModal>  

        <WarningModal 
          onClose={this.closeDeleteModal}
          onSave={this.submitDeleteData}
          isOpened={this.state.isDeleteShow}
          title='删除'
          content='确认要删除?'
        />  

        <div className="ui grid right_content">
          <Sidebar />
          <div className="sixteen wide column right_content">
            <div className="stretched column content">
              <div>

                <h4 className="ui dividing header " style={{clear:'both'}}>
                  <div className="title">预报管理</div>
                  
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
                    className="icon user"></i>新增
                  </button>
                </h4>
    
                <div className="exactSearchList" style={{height:60,display:'none'}}>
                  <div className="ui form">
                    <div className="inline fields">
                      <div className="field">
                        <label style={{height:38,lineHeight:'38px'}}>日期</label>
                        <input type="date" placeholder="日期" />
                      </div>
                      <div className="field">
                        <label style={{height:38,lineHeight:'38px'}}>地点</label>
                        <input type="text" placeholder="地点" />
                      </div>

                      <div className="field">
                        <label style={{height:38,lineHeight:'38px'}}>类型</label>
                        <Dropdown className="item ui selection dropdown mini right" init={true}>
                            <input name="states" type="hidden"/>
                              <i className="dropdown icon"></i>
                              <div className="default text">类型</div>
                              <div className="menu">
                                <a className="item" data-value="1">会议</a>
                                <a className="item" data-value="2">来访</a>
                                <a className="item" data-value="3">出差</a>
                                <a className="item" data-value="4">其他</a>
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
                      <th>事项</th>
                      <th>时间</th>
                      <th>天数</th> 
                      <th>人员</th>
                      <th>地点</th>
                      <th>预报类型</th>
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
      </div>
    )
  }
}