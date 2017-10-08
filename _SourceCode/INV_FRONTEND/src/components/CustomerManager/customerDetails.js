import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import WarningModal from '../Common/warningModal'
const ReactHighcharts = require('react-highcharts')
import profile from '../../assets/images/sam.jpg'
import defaultAvatar from '../../assets/images/pro1.jpg'
import defaultAvatarPerson1 from '../../assets/images/helen.jpg'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
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
export default class CustomerDetails extends Component {
  constructor(props){
    super(props)
    this.addModal = this.addModal.bind(this)
    this.modifyModal = this.modifyModal.bind(this)
    this.deleteModal = this.deleteModal.bind(this)
    this.uploadFn = this.uploadFn.bind(this)
    this.state = {
      config:{
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: '图一、2016年一季度全区外资项目产业结构'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'black'
              }
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: '电子信息',
            y: 29
          }, {
            name: '机械装备',
            y: 3,
            sliced: true,
            selected: true
          }, {
            name: '医药医疗',
            y: 10.38
          }, {
            name: '金融',
            y: 4.77
          }, {
            name: '其他服务行业',
            y: 0.91
          }, {
            name: '新材料',
            y: 0.2
          }]
        }]
      },
      config1:{
        chart: {
          type: 'area',
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#2a2a2b'],
              [1, '#3e3e40']
            ]
          }
        },
        title: {
          text: '销售统计',
          style: {
            color: '#A0A0A3'
          }
        },
        xAxis: {
          categories: ['2015第一季度', '2015第二季度', '2015第三季度', '2015第四季度', '2016第一季度', '2016第二季度'],
          tickmarkPlacement: 'on',
          title: {
            enabled: false
          }
        },
        yAxis: {
          title: {
            text: '销售额'
          }
        },
        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
          shared: true
        },
        plotOptions: {
          area: {
            stacking: 'percent',
            lineColor: '#ffffff',
            lineWidth: 1,
            marker: {
              lineWidth: 1,
              lineColor: '#ffffff'
            }
          }
        },
        series: [{
          name: '手机',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
          name: '电脑',
          data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
          name: '冰箱',
          data: [163, 203, 276, 408, 547, 729, 628]
        }, {
          name: '天线',
          data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
          name: '路由器',
          data: [2, 2, 2, 6, 13, 30, 46]
        }]
      },
      config2:{
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: '纳税统计'
        },
        xAxis: [{
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          crosshair: true
        }],
        yAxis: [{ // Primary yAxis
          labels: {
            format: '{value}万'
          },
          title: {
            text: '交税金额'
          }
        },{ // Secondary yAxis
          title: {
            text: '纳税金额'
          },
          labels: {
            format: '{value} 万'
          },
          opposite: true
        }],
        tooltip: {
          shared: true
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          x: 120,
          verticalAlign: 'top',
          y: 100,
          floating: true,
          backgroundColor: '#FFFFFF'
        },
        series: [{
          name: 'Rainfall',
          type: 'column',
          yAxis: 1,
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          tooltip: {
            valueSuffix: '万'
          }

        }, {
          name: '纳税金额',
          type: 'spline',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          tooltip: {
            valueSuffix: '万'
          }
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
    $('.menu .item').tab()
    $('#example1').progress('increment')
    $('.ui.projectDetails').popup({
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
    //$('.exactSearchList').slideToggle()
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
    return (
      <div>
        <WarningModal id='deleteModal'
                      title='删除'
                      content='确认要删除?'
        />  

        <div className="ui grid right_content">
          <div className="stretched column content">
            <div>

              <h2 className="ui dividing header " style={{clear:'both'}}>
                <div className="title">三星集团</div>
              </h2>
              <div className="ui stackable grid">
                <div className="four wide column">
                  <div className="wrapper">
                    <img className="circular ui image user-avatar avatar208" src={profile}/>
                    <div className="ui aligned center user-name ng-binding ng-scope">
                        三星集团
                    </div>
                    <div className="ui divider"></div>
                    <div className="ui aligned center">客户评分：8.8
                          <div className="ui star rating " data-rating="3">
                            <i className="icon active"></i><i className="icon active"></i><i className="icon active"></i><i className="icon active"></i><i className="icon active"></i>
                          </div>  </div>
                    
                    <div className="ui divider"></div>
                    <div className="user-created-at ng-scope">
                        行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业：<span>电子信息</span>
                    </div>
                    <div className="user-created-at ng-scope">
                        合作项目：<span>88</span>
                    </div>
                    <div className="user-created-at ng-scope">
                        招商时间：<span>2016-03-08</span>
                    </div>
                    <div className="user-created-at ng-scope">
                        联&nbsp;&nbsp;系&nbsp;&nbsp;人：<span>张坚良</span>
                    </div>
                    <div className="user-created-at ng-scope">
                        联系方式：<span>130-2252-1686</span>
                    </div>
                    <div className="user-created-at ng-scope">
                        法&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人：<span>张坚良</span>
                    </div>
                    <div className="user-created-at ng-scope">
                        企业编号：<span>459349587349875934734</span>
                    </div>
                    <div className="user-created-at ng-scope">
                        企业性质：<span>优质客户</span>
                    </div>
                    <div className="user-created-at ng-scope">
                        备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：<span>优质客户需要特殊招商，对社会发展有利</span>
                    </div>
                  </div>
                </div>
                <div className="twelve wide column">
                <div className="wrapper">
                      <div className="ui top attached tabular menu">
                        <a className="active item" data-tab="first">沟通记录</a>
                        <a className="item" data-tab="second">项目</a>
                        <a className="item" data-tab="third">组织架构</a>
                        <a className="item" data-tab="fourth">礼品记录</a>
                        <a className="item" data-tab="fifth">经营分析</a>
                      </div>
                      <div className="ui bottom attached active tab segment" data-tab="first">
                <div className="ui basic segment" id="project-activities">
                <div className="start-date"> 
                  <span>2016-6-3 周五</span>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>吉吉</a>
                      <span>下载了</span>
                      项目
                      <a>五指山项目</a>
                      <span>第三次会议的所有资料</span>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>宋中基</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>张坚良</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity not-bordered">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>宋中基</a>
                      <span>提交了</span>
                      项目
                      <a>久光百货资料</a>
                      <span>关于三星项目的会议记录</span>
                    </div>
                  </div>
                </div>
                <div className="start-date"> 
                  <span>2016-6-2 周四</span>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>小嘟嘟</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>小尤</a>
                      <span>发起了</span>
                      项目
                      <a>五指山项目</a>
                      <span>第一次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>小亮亮</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity not-bordered">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>大明</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="start-date"> 
                  <span>2016-6-3 周五</span>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>许老板</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>吉吉</a>
                      <span>发起了</span>
                      项目
                      <a></a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>宋中基</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity not-bordered">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>宋中基</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="start-date"> 
                  <span>2016-6-3 周五</span>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>宋中基</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>宋中基</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>宋中基</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
                    </div>
                  </div>
                </div>
                <div className="activity not-bordered">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>宋中基</a>
                      <span>发起了</span>
                      项目
                      <a>久光百货</a>
                      <span>第三次会议</span>
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
            <div className="ui bottom attached tab segment" data-tab="second">
                      <h4 className="ui dividing header ">
                <div className="ui mini icon input ">
                  <input type="text" placeholder="项目名/公司名..."/>
                  <i className="search icon"></i>
                  </div>
                  <button className="ui small basic button right floated" onClick={e=>this.handleAdd()}><i
                    className="icon plus"></i>新增
                  </button>
                </h4>
              <ul className="article-list list-unstyled clearfix">
                  <li className='article-item'>
                  <img className="wrap-img" src={defaultAvatar}/>
                    <div className="article-content">
                      <p className="list-top">               
                      <span className="time">
                        <div className="ui indicating small progress" data-percent="72" id="example1" style ={{width:360}}>
                        <div className="bar"></div>
                        <div className="label">进行中 72%</div>
                      </div>
                      </span>
                      </p>
                      <h4 className="title">
                        <a className="link-title">五指山项目</a>
                      </h4>
                      <div className="list-footer">
                        <span>负责人&nbsp; 
                          <span className="ui avatar projectDetails">
                            <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarPerson1}/>
                          </span>
                          <div className="ui flowing popup transition hidden">
                            <div className="ui divided center aligned">
                              <div className="card">
                                <div className="content" style={{textAlign:'left'}}>
                                  <img className="right floated mini ui image" src={defaultAvatarPerson1} />
                                  <div className="header"><i className="icon user"></i> 李华 </div>
                                  <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                  <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                </div>
                              </div>
                            </div>  
                          </div>
                          </span>
                        <span> · 投资金额  <span style={{color:'#d01919',fontSize:20}}>$200,000</span></span>        
                        <span> · 项目周期 2年</span>
                      </div>
                    </div>
                  </li>
                                    <li className='article-item'>
                  <img className="wrap-img" src={defaultAvatar}/>
                    <div className="article-content">
                      <p className="list-top">               
                      <span className="time">
                        <div className="ui indicating small progress" data-percent="72" id="example1" style ={{width:360}}>
                        <div className="bar"></div>
                        <div className="label">进行中 72%</div>
                      </div>
                      </span>
                      </p>
                      <h4 className="title">
                        <a className="link-title">五指山项目</a>
                      </h4>
                      <div className="list-footer">
                        <span>负责人&nbsp; 
                          <span className="ui avatar projectDetails">
                            <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarPerson1}/>
                          </span>
                          <div className="ui flowing popup transition hidden">
                            <div className="ui divided center aligned">
                              <div className="card">
                                <div className="content" style={{textAlign:'left'}}>
                                  <img className="right floated mini ui image" src={defaultAvatarPerson1} />
                                  <div className="header"><i className="icon user"></i> 李华 </div>
                                  <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                  <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                </div>
                              </div>
                            </div>  
                          </div>
                          </span>
                        <span> · 投资金额  <span style={{color:'#d01919',fontSize:20}}>$200,000</span></span>        
                        <span> · 项目周期 2年</span>
                      </div>
                    </div>
                  </li>
                                    <li className='article-item'>
                  <img className="wrap-img" src={defaultAvatar}/>
                    <div className="article-content">
                      <p className="list-top">               
                      <span className="time">
                        <div className="ui indicating small progress" data-percent="72" id="example1" style ={{width:360}}>
                        <div className="bar"></div>
                        <div className="label">进行中 72%</div>
                      </div>
                      </span>
                      </p>
                      <h4 className="title">
                        <a className="link-title">五指山项目</a>
                      </h4>
                      <div className="list-footer">
                        <span>负责人&nbsp; 
                          <span className="ui avatar projectDetails">
                            <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarPerson1}/>
                          </span>
                          <div className="ui flowing popup transition hidden">
                            <div className="ui divided center aligned">
                              <div className="card">
                                <div className="content" style={{textAlign:'left'}}>
                                  <img className="right floated mini ui image" src={defaultAvatarPerson1} />
                                  <div className="header"><i className="icon user"></i> 李华 </div>
                                  <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                  <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                </div>
                              </div>
                            </div>  
                          </div>
                          </span>
                        <span> · 投资金额  <span style={{color:'#d01919',fontSize:20}}>$200,000</span></span>        
                        <span> · 项目周期 2年</span>
                      </div>
                    </div>
                  </li>
                                    <li className='article-item'>
                  <img className="wrap-img" src={defaultAvatar}/>
                    <div className="article-content">
                      <p className="list-top">               
                      <span className="time">
                        <div className="ui indicating small progress" data-percent="72" id="example1" style ={{width:360}}>
                        <div className="bar"></div>
                        <div className="label">进行中 72%</div>
                      </div>
                      </span>
                      </p>
                      <h4 className="title">
                        <a className="link-title">五指山项目</a>
                      </h4>
                      <div className="list-footer">
                        <span>负责人&nbsp; 
                          <span className="ui avatar projectDetails">
                            <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarPerson1}/>
                          </span>
                          <div className="ui flowing popup transition hidden">
                            <div className="ui divided center aligned">
                              <div className="card">
                                <div className="content" style={{textAlign:'left'}}>
                                  <img className="right floated mini ui image" src={defaultAvatarPerson1} />
                                  <div className="header"><i className="icon user"></i> 李华 </div>
                                  <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                  <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                </div>
                              </div>
                            </div>  
                          </div>
                          </span>
                        <span> · 投资金额  <span style={{color:'#d01919',fontSize:20}}>$200,000</span></span>        
                        <span> · 项目周期 2年</span>
                      </div>
                    </div>
                  </li>
                                    <li className='article-item'>
                  <img className="wrap-img" src={defaultAvatar}/>
                    <div className="article-content">
                      <p className="list-top">               
                      <span className="time">
                        <div className="ui indicating small progress" data-percent="72" id="example1" style ={{width:360}}>
                        <div className="bar"></div>
                        <div className="label">进行中 72%</div>
                      </div>
                      </span>
                      </p>
                      <h4 className="title">
                        <a className="link-title">五指山项目</a>
                      </h4>
                      <div className="list-footer">
                        <span>负责人&nbsp; 
                          <span className="ui avatar projectDetails">
                            <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarPerson1}/>
                          </span>
                          <div className="ui flowing popup transition hidden">
                            <div className="ui divided center aligned">
                              <div className="card">
                                <div className="content" style={{textAlign:'left'}}>
                                  <img className="right floated mini ui image" src={defaultAvatarPerson1} />
                                  <div className="header"><i className="icon user"></i> 李华 </div>
                                  <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                  <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                </div>
                              </div>
                            </div>  
                          </div>
                          </span>
                        <span> · 投资金额  <span style={{color:'#d01919',fontSize:20}}>$200,000</span></span>        
                        <span> · 项目周期 2年</span>
                      </div>
                    </div>
                  </li>
                                    <li className='article-item'>
                  <img className="wrap-img" src={defaultAvatar}/>
                    <div className="article-content">
                      <p className="list-top">               
                      <span className="time">
                        <div className="ui indicating small progress" data-percent="72" id="example1" style ={{width:360}}>
                        <div className="bar"></div>
                        <div className="label">进行中 72%</div>
                      </div>
                      </span>
                      </p>
                      <h4 className="title">
                        <a className="link-title">五指山项目</a>
                      </h4>
                      <div className="list-footer">
                        <span>负责人&nbsp; 
                          <span className="ui avatar projectDetails">
                            <img className="ui circular image" style={{display:'inline'}} src={defaultAvatarPerson1}/>
                          </span>
                          <div className="ui flowing popup transition hidden">
                            <div className="ui divided center aligned">
                              <div className="card">
                                <div className="content" style={{textAlign:'left'}}>
                                  <img className="right floated mini ui image" src={defaultAvatarPerson1} />
                                  <div className="header"><i className="icon user"></i> 李华 </div>
                                  <div className="meta"><i className="icon call"></i> 130-2252-1687</div>
                                  <div className="description"><i className="icon protect"></i> 主要研发三星手机、三星电脑等电子产品</div>
                                </div>
                              </div>
                            </div>  
                          </div>
                          </span>
                        <span> · 投资金额  <span style={{color:'#d01919',fontSize:20}}>$200,000</span></span>        
                        <span> · 项目周期 2年</span>
                      </div>
                    </div>
                  </li>
            </ul>
            <div className="load-more">
              <button className="ladda-button">
                <span className="ladda-label">点击查看更多</span>
              </button>
            
          </div>
            <div className="clearDiv"></div>
         </div>
         <div className="ui bottom attached tab segment" data-tab="fourth">
          <h4 className="ui dividing header ">
                <div className="ui mini icon input ">
                  <input type="text" placeholder="搜索..."/>
                  <i className="search icon"></i>
                </div>
                  <button className="ui small basic button right floated" onClick={e=>this.handleAdd()}>
                  <i className="icon plus"></i>新增
                  </button>
          </h4>
          <table className="ui single line table">
                                <thead>
                                    <tr>
                                        <th>礼物名称</th>
                                        <th>赠送人</th>
                                        <th>赠送时间</th>
                                        <th>接收人</th>
                                        <th>接收公司</th>
                                        <th>接收原因</th>
                                        <th>备注</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                          <td>香蕉一根</td>
                                          <td>小尤</td>
                                          <td>2015-03-02</td>
                                          <td>小嘟嘟</td>
                                          <td>五指山公司</td>   
                                          <td>喂猴子</td>
                                          <td>合作愉快</td>
                                      </tr>
                                      <tr>
                                          <td>iPhone</td>
                                          <td>小尤</td>
                                          <td>2015-11-32</td>
                                          <td>小肚肚</td>
                                          <td>五指山公司</td>   
                                          <td>测试机器</td>
                                          <td>合作愉快</td>
                                      </tr>
                                      <tr>
                                          <td>香蕉一根</td>
                                          <td>小尤</td>
                                          <td>2015-03-02</td>
                                          <td>贾吉吉</td>
                                          <td>五指山公司</td>   
                                          <td>喂猴子</td>
                                          <td>合作愉快</td>
                                      </tr>
                                      <tr>
                                          <td>香蕉一根</td>
                                          <td>小尤</td>
                                          <td>2015-03-02</td>
                                          <td>明明</td>
                                          <td>五指山公司</td>   
                                          <td>喂猴子</td>
                                          <td>合作愉快</td>
                                      </tr>
                                      <tr>
                                          <td>香蕉一根</td>
                                          <td>小尤</td>
                                          <td>2015-03-02</td>
                                          <td>小肚肚</td>
                                          <td>五指山公司</td>   
                                          <td>推荐环节</td>
                                          <td>合作愉快</td>
                                      </tr>
                                </tbody>
                            </table>
                            <div style ={{height:38}}>               
                      <Pager pages={2} current={1}  pageSize={5}/>
                  </div>
         </div>
          <div className="ui bottom attached tab segment" data-tab="fifth">
            <ReactHighcharts className="hundrad" config ={this.state.config1}></ReactHighcharts>
            <ReactHighcharts className="hundrad" config ={this.state.config2}></ReactHighcharts>
         </div>
          <div className="ui bottom attached tab segment" data-tab="third">
                  <h4 className="ui dividing header ">
                <div className="ui mini icon input ">
                  <input type="text" placeholder="职位/姓名..."/>
                  <i className="search icon"></i>
                  </div>
                  <button className="ui small basic button right floated" onClick={e=>this.handleAdd()}><i
                    className="icon plus"></i>新增
                  </button>
                </h4>
                  <ul className="fdd-member-list list-unstyled">
                    <li className="fdd=member-item">
                      <img className="avatar img-circle img-46 pull-left" src ={defaultAvatar}/>
                      <div className="info-digest"> 
                        <p className="name-block"> <span className="name hinted" data-title="范都都">范都都</span></p> 
                        <div className="pos"> <span className="hinted" data-title="拥有者">局长</span>
                        </div> 
                      </div>
                      <p className="p1 phone">  
                      <span className="icon icon-phone"><i className="phone icon"></i></span> 
                      <a href="tel:15851428879" className="hinted ban" data-title="15851428879">15851428879</a>  
                      </p>
                      <p className="p1">  
                      <span className="icon icon-envelope"><i className="mail icon"></i></span> 
                      <a href="mailto:915414241@qq.com" className="hinted ban" data-title="915414241@qq.com">915414241@qq.com</a> 
                      </p>
                      <div className="mem-opera pull-right">
                       <div className="mem-rm-wrapper"> 
                       <button type="button" className="btn mem-remove btn-hover-danger" data-id="572abd01bae323ca498ad602">编辑</button> 
                       <button type="button" className="btn mem-remove btn-hover-danger" data-id="572abd01bae323ca498ad602">移除</button> 
                       </div> 
                      </div>
                      <p className="list-bottom-line"></p>
                    </li>
                    <li className="fdd=member-item">
                      <img className="avatar img-circle img-46 pull-left" src ={defaultAvatar}/>
                      <div className="info-digest"> 
                        <p className="name-block"> <span className="name hinted" data-title="范都都">范都都</span></p> 
                        <div className="pos"> <span className="hinted" data-title="拥有者">局长</span>
                        </div> 
                      </div>
                      <p className="p1 phone">  
                      <span className="icon icon-phone"><i className="phone icon"></i></span> 
                      <a href="tel:15851428879" className="hinted ban" data-title="15851428879">15851428879</a>  
                      </p>
                      <p className="p1">  
                      <span className="icon icon-envelope"><i className="mail icon"></i></span> 
                      <a href="mailto:915414241@qq.com" className="hinted ban" data-title="915414241@qq.com">915414241@qq.com</a> 
                      </p>
                      <div className="mem-opera pull-right">
                       <div className="mem-rm-wrapper"> 
                       <button type="button" className="btn mem-remove btn-hover-danger" data-id="572abd01bae323ca498ad602">编辑</button> 
                       <button type="button" className="btn mem-remove btn-hover-danger" data-id="572abd01bae323ca498ad602">移除</button> 
                       </div> 
                      </div>
                      <p className="list-bottom-line"></p>
                    </li>
                    <li className="fdd=member-item">
                      <img className="avatar img-circle img-46 pull-left" src ={defaultAvatar}/>
                      <div className="info-digest"> 
                        <p className="name-block"> <span className="name hinted" data-title="范都都">范都都</span></p> 
                        <div className="pos"> <span className="hinted" data-title="拥有者">局长</span>
                        </div> 
                      </div>
                      <p className="p1 phone">  
                      <span className="icon icon-phone"><i className="phone icon"></i></span> 
                      <a href="tel:15851428879" className="hinted ban" data-title="15851428879">15851428879</a>  
                      </p>
                      <p className="p1">  
                      <span className="icon icon-envelope"><i className="mail icon"></i></span> 
                      <a href="mailto:915414241@qq.com" className="hinted ban" data-title="915414241@qq.com">915414241@qq.com</a> 
                      </p>
                      <div className="mem-opera pull-right">
                       <div className="mem-rm-wrapper"> 
                       <button type="button" className="btn mem-remove btn-hover-danger" data-id="572abd01bae323ca498ad602">编辑</button> 
                       <button type="button" className="btn mem-remove btn-hover-danger" data-id="572abd01bae323ca498ad602">移除</button> 
                       </div> 
                      </div>
                      <p className="list-bottom-line"></p>
                    </li>
                    <li className="fdd=member-item">
                      <img className="avatar img-circle img-46 pull-left" src ={defaultAvatar}/>
                      <div className="info-digest"> 
                        <p className="name-block"> <span className="name hinted" data-title="范都都">范都都</span></p> 
                        <div className="pos"> <span className="hinted" data-title="拥有者">局长</span>
                        </div> 
                      </div>
                      <p className="p1 phone">  
                      <span className="icon icon-phone"><i className="phone icon"></i></span> 
                      <a href="tel:15851428879" className="hinted ban" data-title="15851428879">15851428879</a>  
                      </p>
                      <p className="p1">  
                      <span className="icon icon-envelope"><i className="mail icon"></i></span> 
                      <a href="mailto:915414241@qq.com" className="hinted ban" data-title="915414241@qq.com">915414241@qq.com</a> 
                      </p>
                      <div className="mem-opera pull-right">
                       <div className="mem-rm-wrapper"> 
                       <button type="button" className="btn mem-remove btn-hover-danger" data-id="572abd01bae323ca498ad602">编辑</button> 
                       <button type="button" className="btn mem-remove btn-hover-danger" data-id="572abd01bae323ca498ad602">移除</button> 
                       </div> 
                      </div>
                      <p className="list-bottom-line"></p>
                    </li>
                    <li className="fdd=member-item">
                      <img className="avatar img-circle img-46 pull-left" src ={defaultAvatar}/>
                      <div className="info-digest"> 
                        <p className="name-block"> <span className="name hinted" data-title="范都都">范都都</span></p> 
                        <div className="pos"> <span className="hinted" data-title="拥有者">局长</span>
                        </div> 
                      </div>
                      <p className="p1 phone">  
                      <span className="icon icon-phone"><i className="phone icon"></i></span> 
                      <a href="tel:15851428879" className="hinted ban" data-title="15851428879">15851428879</a>  
                      </p>
                      <p className="p1">  
                      <span className="icon icon-envelope"><i className="mail icon"></i></span> 
                      <a href="mailto:915414241@qq.com" className="hinted ban" data-title="915414241@qq.com">915414241@qq.com</a> 
                      </p>
                      <div className="mem-opera pull-right">
                       <div className="mem-rm-wrapper"> 
                       <button type="button" className="btn mem-remove btn-hover-danger" data-id="572abd01bae323ca498ad602">编辑</button> 
                       <button type="button" className="btn mem-remove btn-hover-danger" data-id="572abd01bae323ca498ad602">移除</button> 
                       </div> 
                      </div>
                      <p className="list-bottom-line"></p>
                    </li>
                  </ul>
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