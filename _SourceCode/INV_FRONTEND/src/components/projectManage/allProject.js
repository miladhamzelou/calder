import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import Sidebar from './sidebar'
import { Link } from 'react-router'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import {Dropdown} from 'react-semantify'
import ConfirmModal from '../Common/confirmModal'
import Input from '../Common/form/input'
import $ from 'jquery'
import MyDate from '../Common/form/date'
import Formsy from 'formsy-react'
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
export default class AllProject extends Component {
  constructor(props){ 
    super(props)
    this.addModal = this.addModal.bind(this)  
    this.getFormData = this.getFormData.bind(this)
    this.submitData = this.submitData.bind(this)
    this.closeModal = this.closeModal.bind(this)

    this.state ={
      isShow:false,
      isDeleteShow: false,
      activeNote:'0',
      model:{
        name:''
      },
      list:[
        {
          person:'周局长',
          create:'张局长',
          status:'已完成',
          name:'久光百货',
          time:'一周',
          moneny:10000,
          from:'2015-02-20',
          to:'2015-02-21'
        },
        {
          person:'周局长',
          create:'张局长',
          status:'已完成',
          name:'贝斯特食品',
          company:'罗盘信息科技有限公司',
          time:'两年',
          moneny:200000,
          from:'2015-02-20',
          to:'2015-02-21'
        },
        {
          person:'周局长',
          create:'张局长',
          status:'已完成',
          name:'宝时得机械',
          company:'美嘉信息有限公司',
          time:'一年',
          moneny:30000,
          from:'2015-02-20',
          to:'2015-02-21'
        },
        {
          person:'周局长',
          name:'新世纪服装',
          status:'已完成',
          create:'张局长',
          company:'联谊婷服装有限公司',
          time:'三个月',
          moneny:10000,
          from:'2015-02-20',
          to:'2015-02-21'
        },
        {
          person:'周局长',
          status:'已完成',
          create:'张局长',
          company:'云购信息有限公司',
          name:'久光百货',
          time:'一周',
          moneny:10000,
          from:'2015-02-20',
          to:'2015-02-21'
        },
        {
          person:'周局长',
          create:'张局长',
          status:'已完成',
          name:'贝斯特食品',
          company:'罗盘信息科技有限公司',
          time:'两年',
          moneny:200000,
          from:'2015-02-20',
          to:'2015-02-21'
        },
        {
          person:'周局长',
          create:'张局长',
          status:'已完成',
          name:'宝时得机械',
          company:'美嘉信息有限公司',
          time:'一年',
          moneny:30000,
          from:'2015-02-20',
          to:'2015-02-21'
        },
        {
          person:'周局长',
          create:'张局长',
          status:'已完成',
          name:'新世纪服装',
          company:'联谊婷服装有限公司',
          time:'三个月',
          moneny:10000,
          from:'2015-02-20',
          to:'2015-02-21'
        },
        {
          person:'周局长',
          create:'张局长',
          status:'已完成',
          name:'宝时得机械',
          company:'美嘉信息有限公司',
          time:'一年',
          moneny:30000,
          from:'2015-02-20',
          to:'2015-02-21'
        },
        {
          person:'周局长',
          create:'张局长',
          status:'已完成',
          name:'新世纪服装',
          company:'联谊婷服装有限公司',
          time:'三个月',
          moneny:10000,
          from:'2015-02-20',
          to:'2015-02-21'
        }
      ]
    }
  }

  componentDidMount() {
    $('.list .master.checkbox')
      .checkbox({
        onChecked: function() {
          $(this).closest('.checkbox').siblings('.list').find('.checkbox').checkbox('check')
        },
        onUnchecked: function() {
          $(this).closest('.checkbox').siblings('.list').find('.checkbox').checkbox('uncheck')
        }
      })

    $('.ui.projectDetails').popup({
      hoverable:true
    })  

    $('#example1,#example2,#example3,#example4').progress('increment')

  }

  addModal(){
    this.setState({
      isShow:true
    })
  }

  //提交增加或修改的数据功能
  submitData(){
    const self=this
    self.closeModal()
  }

  //关闭增加或修改的弹出框
  closeModal(){
    this.setState({
      isShow:false
    })
  }
  exactSearchModal(){
    $('.exactSearchList').transition({
      animation  : 'scale'
    })
  }

  getFormData(data) {
    this.setState({ 
      activeNote: '1'
    })
  }

  render() {
    return (
      <div className="ui grid right_content">
        <Sidebar />
          <div className="sixteen wide column right_content">
            <div className="stretched column content">
              <ConfirmModal 
                onClose={this.closeModal}
                onSave={this.submitData}
                getFormData={this.getFormData}
                isOpened={this.state.isShow}                    
                title='新增项目'     
              >
                <div className="fields two">
                  <div className="field">
                    <label>项目类型</label>
                    <Dropdown className="item ui selection dropdown mini right forecastType" onChange={this.onChangeType} init={true}>
                        <input name="states" type="hidden" onChange={this.onChangeType}/>
                          <i className="dropdown icon"></i>
                          <div className="default text">项目类型</div>
                          <div className="menu">
                            <a className="item" data-value="1">信息项目</a>
                            <a className="item" data-value="2">工程项目</a>
                            <a className="item" data-value="3">其他</a>
                          </div>
                    </Dropdown>
                  </div>
                  <Input  fieldClassName="field required"
                          type="text" 
                          name="receptionObj" 
                          label="项目名称"
                          placeholder="项目名称" 
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
                  <div className="field required">
                    <label>合作公司</label>
                    <span style={{paddingLeft:'10px',color:'#2185d0',cursor:'pointer'}}>新增</span>
                    <Dropdown className="item ui selection dropdown mini right forecastType" init={true} style={{height:'auto'}}>
                        <input name="states" type="hidden"/>
                          <i className="dropdown icon"></i>
                          <div className="default text">合作公司</div>
                          <div className="menu">
                            <a className="item" data-value="1">云购信息有限公司</a>
                            <a className="item" data-value="2">罗盘信息技术有限公司</a>
                            <a className="item" data-value="3">其他</a>
                          </div>
                    </Dropdown>
                  </div>
                  <div className="field required">
                    <label>负责人</label>
                    <span style={{paddingLeft:'10px',color:'#2185d0',cursor:'pointer'}}>新增</span>
                    <Dropdown className="item ui selection dropdown mini right forecastType" init={true} style={{height:'auto'}}>
                        <input name="states" type="hidden"/>
                          <i className="dropdown icon"></i>
                          <div className="default text">负责人</div>
                          <div className="menu">
                            <a className="item" data-value="1">刘军</a>
                            <a className="item" data-value="2">张华</a>
                            <a className="item" data-value="3">陈金</a>
                          </div>
                    </Dropdown>
                  </div>    
                </div>  
                <div className="fields two">
                  <Input  fieldClassName="field"
                          type="text" 
                          name="receptionObj" 
                          label="投资金额"
                          placeholder="投资金额" 
                          validations={{
                            minLength: 1,
                            maxLength: 10
                          }}
                          validationErrors={{
                            minLength: '不能为空',
                            maxLength: '不能超过10字'
                          }}
                  />    
                  <Input  fieldClassName="field"
                          type="text" 
                          name="receptionObj" 
                          label="项目评分"
                          placeholder="项目评分" 
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
                  <div className="field required">
                    <label>开始时间</label>
                      <input type="datetime-local" placeholder="接待开始时间" />                               
                  </div>
                  <div className="field required">
                    <label>结束时间</label>
                      <input type="datetime-local" placeholder="接待开始时间" />                               
                  </div>
                </div>
              </ConfirmModal> 
              <h4 className="ui dividing header ">
                <div className="title">所有的项目(4)</div>
                <a className="ui modify small basic button blue floated right" onClick={this.exactSearchModal}>
                  高级搜索
                </a> 
                <div className="ui left icon mini input"> 
                  <i className="search icon"></i>                  
                  <input type="text" placeholder="项目名称..."/>
                </div>
                <button className="ui small basic button right floated blue" onClick={this.addModal}>
                  <i className="icon plus"></i>新增
                </button>
              </h4>
              <div className="exactSearchList" style={{height:130}}>
                <Formsy.Form className="ui form" ref="searchForm" onChange={this.getSearchFormData}>
                  <div className="inline fields">
                    <MyDate
                      name="from"
                      label =""
                      placeholder="从"
                      width = "182"
                      fieldClassName ="field"
                      value ={this.state.defaultDate}
                    />
                    <MyDate
                      name="from"
                      label =""
                      placeholder="到"
                      width = "182"
                      fieldClassName ="field"
                      value ={this.state.defaultDate}
                    />
                    <div className="field">
                      <Dropdown className="item ui selection dropdown mini right" init={true}>
                          <input name="states" type="hidden"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">项目状态</div>
                            <div className="menu">
                              <a className="item" data-value="1">全部</a>
                              <a className="item" data-value="2">已完成</a>
                              <a className="item" data-value="3">进行中</a>
                              <a className="item" data-value="4">其他</a>
                            </div>
                      </Dropdown>
                    </div>
                    <div className="field">
                      <Dropdown className="item ui selection dropdown mini right" init={true}>
                          <input name="states" type="hidden"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">项目类型</div>
                            <div className="menu">
                              <a className="item" data-value="1">国企</a>
                              <a className="item" data-value="2">外企</a>
                              <a className="item" data-value="3">进行中</a>
                              <a className="item" data-value="4">其他</a>
                            </div>
                      </Dropdown>
                    </div>
                    <div className="field">
                      <Dropdown className="item ui selection dropdown mini right" init={true}>
                          <input name="states" type="hidden"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">项目负责人</div>
                            <div className="menu">
                              <a className="item" data-value="1">张三</a>
                              <a className="item" data-value="2">李四</a>
                              <a className="item" data-value="3">王二妈</a>
                              <a className="item" data-value="4">其他</a>
                            </div>
                      </Dropdown>
                    </div>
                    
                  </div>
                  <div className="inline fields">
                    <div className="field">
                      <Dropdown className="item ui selection dropdown mini right" init={true}>
                          <input name="states" type="hidden"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">国家</div>
                            <div className="menu">
                              <a className="item" data-value="1">全部</a>
                              <a className="item" data-value="2">中国</a>
                              <a className="item" data-value="3">美国</a>
                              <a className="item" data-value="4">其他</a>
                            </div>
                      </Dropdown>
                    </div>
                    <div className="field">
                      <Dropdown className="item ui selection dropdown mini right" init={true}>
                          <input name="states" type="hidden"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">行业</div>
                            <div className="menu">
                              <a className="item" data-value="1">全部</a>
                              <a className="item" data-value="2">服务业</a>
                              <a className="item" data-value="3">制造业</a>
                              <a className="item" data-value="4">其他</a>
                            </div>
                      </Dropdown>
                    </div>
                    <div className="field">
                      <Dropdown className="item ui selection dropdown mini right" init={true}>
                          <input name="states" type="hidden"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">注册资本</div>
                            <div className="menu">
                              <a className="item" data-value="1">1000-2000万</a>
                              <a className="item" data-value="2">2000-3000万</a>
                              <a className="item" data-value="3">3000万以上</a>
                              <a className="item" data-value="4">其他</a>
                            </div>
                      </Dropdown>
                    </div>
                    <button className="ui small basic button right floated blue" onClick={this.addModal}><i
                      className="icon search"></i>查询
                    </button>
                  </div>
                </Formsy.Form>
              </div>
              <div className="" style={{marginTop:0}}>  
                <table className="ui  single line  table selectable ">
                  <thead>
                  <tr>
                    <th>项目编号</th>
                    <th>项目名称</th>
                    <th>负责人</th>
                    <th>项目周期</th> 
                    <th>项目金额</th>
                    <th>创建人</th>
                    <th>项目状态</th>
                    <th>是否重点项目</th>  
                    <th>项目进度</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.list != null&&
                    this.state.list.map((item,i)=>
                      <tr key={i}>
                        <td>2016030001</td>
                        <td >
                          <Link className="header" to="/projectManage/projectDetails">
                            {item.name}
                          </Link>
                        </td>
                        <td>{item.person}</td>
                        <td>{item.time}</td>
                        <td>${item.moneny}</td>
                        <td>
                          {item.create}
                        </td>
                        <td>
                          {item.status}
                        </td>
                        <td>否</td>
                        <td>
                          <p className="list-top">
                            <span className="time">
                              <div className="ui indicating small progress" data-percent="50" id="example1">
                                <div className="bar" style={{transitionDuration: '300ms',width: '50%'}}></div>
                                <div className="label">50%</div>
                              </div>
                            </span>
                          </p>   
                        </td>
                      </tr>   
                    )} 
                  </tbody>
                </table>
                <div style ={{height:38}}>
                  <Pager pages='4' current={this.state.current} onChange={this.pageChange} pageSize={5}/>
                </div>
            </div>
            </div>
          </div>
      </div>      
    )
  }
}