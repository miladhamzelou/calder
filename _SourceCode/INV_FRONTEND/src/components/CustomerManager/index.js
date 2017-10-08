import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import Sidebar from './sidebar'
import { bindActionCreators } from 'redux'
import {Dropdown} from 'react-semantify'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import WarningModal from '../Common/warningModal'
import { Link } from 'react-router'
import Formsy from 'formsy-react'
import $ from 'jquery'

const mapStateToProps = state =>{
  return {  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class CustomerManager extends Component {
  constructor(props){
    super(props)
    this.addModal = this.addModal.bind(this)
    this.modifyModal = this.modifyModal.bind(this)
    this.deleteModal = this.deleteModal.bind(this)
    this.uploadFn = this.uploadFn.bind(this)
    this.state={
      title:'新增会议',
      current:1,
      list:[
        {
          name:'云购信息有限公司',
          country:'中国',
          meetingAddress:'张坚良',
          meetingType:'15850982913',
          attachment:3
        },
        {
          name:'罗盘信息科技有限公司',
          country:'中国',
          meetingAddress:'张坚良',
          meetingType:'15850982913',
          attachment:3
        },
        {
          name:'美嘉信息有限公司',
          country:'中国',
          meetingAddress:'张坚良',
          meetingType:'15850982913',
          attachment:3
        },
        {
          name:'联谊婷服装有限公司',
          country:'中国',
          meetingAddress:'张坚良',
          meetingType:'15850982913',
          attachment:3
        },
        {
          name:'云购信息有限公司',
          country:'中国',
          meetingAddress:'张坚良',
          meetingType:'15850982913',
          attachment:3
        },
        {
          name:'罗盘信息科技有限公司',
          country:'中国',
          meetingAddress:'张坚良',
          meetingType:'15850982913',
          attachment:3
        },
        {
          name:'美嘉信息有限公司',
          country:'中国',
          meetingAddress:'张坚良',
          meetingType:'15850982913',
          attachment:3
        },
        {
          name:'联谊婷服装有限公司',
          country:'中国',
          meetingAddress:'张坚良',
          meetingType:'15850982913',
          attachment:3
        },
        {
          name:'美嘉信息有限公司',
          country:'中国',
          meetingAddress:'张坚良',
          meetingType:'15850982913',
          attachment:3
        },
        {
          name:'联谊婷服装有限公司',
          country:'中国',
          meetingAddress:'张坚良',
          meetingType:'15850982913',
          attachment:3
        }
      ],
      config2:{
        chart: {
          type: 'spline'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: ['2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
          title: {
            text: '营业额'
          },
          min: 0
        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 4,
              lineColor: '#666666',
              lineWidth: 1
            }
          }
        },
        series: [{
          data: [7.0, 6.9, 9.5, 14.5, 18.2]
        }]
      }
    }
  }

  static propTypes = {

  }

  static fetchData(params){
  }

  componentDidMount() {
    $('.card .image').dimmer({
      on: 'hover'
    })
  }

  addModal(){
    $('#meetModal').modal('show')
  }

  modifyModal(){
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
    $('.exactSearchList').transition({
      animation  : 'scale'
    })
  }

  uploadFn(){
    $('.meetFileUpLoad').click()
  }

  //改变页数
  pageChange(){   
    
  }

  render() {
    const _this = this
    return (
      <div className="ui grid right_content">
        <WarningModal id='deleteModal'
                    title='删除'
                    content='确认要删除?'
      />  
        <Sidebar />
        <div className="sixteen wide column right_content">
          <div className="stretched column content">
            <h4 className="ui dividing header " style={{clear:'both'}}>
              <div className="title">客户管理</div>
              
              <a className="ui modify small basic button blue floated right" onClick={this.exactSearchModal}>
                高级搜索
              </a>
              <div className="ui left icon mini input"> 
                <i className="search icon"></i>                  
                <input type="text" placeholder="搜索..."/>
              </div>
              <button className="ui small basic button right floated blue" onClick={this.addModal}><i
                className="icon plus"></i>新增
              </button>
            </h4>
            
            <div className="exactSearchList" style={{height:60}}>
                <Formsy.Form className="ui form" ref="searchForm" onChange={this.getSearchFormData}>
                
                  <div className="inline fields">
                    <div className="field">
                      <Dropdown className="item ui selection dropdown mini right" init={true}>
                          <input name="states" type="hidden"/>
                            <i className="dropdown icon"></i>
                            <div className="default text">国别</div>
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
                    <th>客户名称</th>
                    <th>国别</th>
                    <th>行业</th>
                    <th>联系人</th> 
                    <th>联系方式</th>
                    <th>年度纳税</th>
                    <th>合作项目</th> 
                    <th>客户评分</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.list != null&&
                    this.state.list.map((item,i)=>
                      <tr key={i}>
                        <td >
                          <Link className="header" to="/customerManager/customerDetails">
                            {item.name}
                          </Link>
                        </td>
                        <td>{item.country}</td>
                        <td>私企</td>
                        <td>{item.meetingAddress}</td>
                        <td>{item.meetingType}</td>
                        <td>$30000</td>
                        <td>
                          <Link className="ui viewFile" to="/customerManager/customerDetails">
                            {item.attachment}
                          </Link>
                        </td>
                        <td>
                          <div className="ui star rating" data-rating="3">
                            <i className="icon active"></i><i className="icon active"></i><i className="icon active"></i><i className="icon active"></i><i className="icon active"></i>
                          </div>  
                        </td>
                        <td>
                          <Link className="ui modify small basic button blue left floated" to="/customerManager/customerDetails">
                            <i className="eye icon"></i>预览
                          </Link>
                          <div className="ui delete small basic button red left floated" onClick={_this.deleteModal}>
                            <i className="delete icon"></i>删除
                          </div>
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