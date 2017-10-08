import React, { Component } from 'react'
import { connect } from 'react-redux'
const ReactHighcharts = require('react-highcharts')
import * as Actions from '../../actions'
import ConfirmModal from '../Common/confirmModal'
import Input from '../Common/form/input'
import { bindActionCreators } from 'redux'
import {Dropdown} from 'react-semantify'
import $ from 'jquery'

import Sidebar from '../Common/reportsSidebar'
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
export default class Reports extends Component {
  constructor(props){
    super(props)
    this.state ={
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
          renderTo: 'container',
          type: 'column',
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          }
        },
        title: {
          text: '统计分析'
        },
        plotOptions: {
          column: {
            depth: 25
          }
        },
        series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
      },
      config2:{
        chart: {
          type: 'spline'
        },
        title: {
          text: '项目跟踪分析表'
        },
        xAxis: {
          categories: ['一月', '二月', '三月', '四月', '五月', '六月',
           '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
          title: {
            text: '项目满意度'
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
          name: '三星集团',
          marker: {
            symbol: 'square'
          },
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,23.3, 18.3, 13.9, 9.6]
        }, {
          name: '欧莱雅公司',
          marker: {
            symbol: 'diamond'
          },
          data: [ 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
      },
      config3:{
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          type: '类型'
        },
        yAxis: {
          title: {
            text: '占据比例'
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
            }
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: '日本',
            y: 56.33,
            drilldown: '日本'
          }, 
          {
            name: '瑞士',
            y: 24.03,
            drilldown: '瑞士'
          }, 
          {
            name: '国内',
            y: 10.38,
            drilldown: '国内'
          }, 
          {
            name: '上海',
            y: 4.77,
            drilldown: '上海'
          },
          {  
            name: '美国',
            y: 0.91,
            drilldown: '美国'
          },
          {
            name: '韩国',
            y: 0.2,
            drilldown: null
          }]
        }],
        drilldown: {
          series: [{
            name: '日本',
            id: '日本',
            data: [
              [
                'v11.0',
                24.13
              ],
              [
                'v8.0',
                17.2
              ],
              [
                'v9.0',
                8.11
              ],
              [
                'v10.0',
                5.33
              ],
              [
                'v6.0',
                1.06
              ],
              [
                'v7.0',
                0.5
              ]
            ]
          }, {
            name: '上海',
            id: '上海',
            data: [
              [
                'v40.0',
                5
              ],
              [
                'v41.0',
                4.32
              ],
              [
                'v42.0',
                3.68
              ],
              [
                'v39.0',
                2.96
              ],
              [
                'v36.0',
                2.53
              ],
              [
                'v43.0',
                1.45
              ],
              [
                'v31.0',
                1.24
              ],
              [
                'v35.0',
                0.85
              ],
              [
                'v38.0',
                0.6
              ],
              [
                'v32.0',
                0.55
              ],
              [
                'v37.0',
                0.38
              ],
              [
                'v33.0',
                0.19
              ],
              [
                'v34.0',
                0.14
              ],
              [
                'v30.0',
                0.14
              ]
            ]
          }, {
            name: '国内',
            id: '国内',
            data: [
              [
                'v35',
                2.76
              ],
              [
                'v36',
                2.32
              ],
              [
                'v37',
                2.31
              ],
              [
                'v34',
                1.27
              ],
              [
                'v38',
                1.02
              ],
              [
                'v31',
                0.33
              ],
              [
                'v33',
                0.22
              ],
              [
                'v32',
                0.15
              ]
            ]
          }, {
            name: '韩国',
            id: '韩国',
            data: [
              [
                'v8.0',
                2.56
              ],
              [
                'v7.1',
                0.77
              ],
              [
                'v5.1',
                0.42
              ],
              [
                'v5.0',
                0.3
              ],
              [
                'v6.1',
                0.29
              ],
              [
                'v7.0',
                0.26
              ],
              [
                'v6.2',
                0.17
              ]
            ]
          }, {
            name: '瑞士',
            id: '瑞士',
            data: [
              [
                'v12.x',
                0.34
              ],
              [
                'v28',
                0.24
              ],
              [
                'v27',
                0.17
              ],
              [
                'v29',
                0.16
              ]
            ]
          }]
        }
      }
    }
  }

  static propTypes = {
  }

  static fetchData(params){
    return [Actions.getArticleList(),Actions.getTagList()]
  }

  componentDidMount() {
    $('.menu .item').tab({
    })
    $('.ui.modify').popup({
      hoverable:true
    })
  }
  advancedSearch(){
    $('#filePanel').modal('show')
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
                <div className="title">招商完成情况表</div>
                <div className="ui modify" style={{float:'right',color:'#2185d0',height:35,lineHeight:'35px',cursor: 'pointer',marginLeft:'5px'}} onClick={this.exactSearchModal}>
                  <i className="find icon" onClick={e=>this.advancedSearch()}></i>
                </div>
                <div className="ui flowing popup transition hidden">
                  <div className="ui divided center aligned">
                    <div className="">
                      高级搜索
                    </div>
                  </div>  
                </div>
                <div className="ui mini icon input ">
                  <input type="text" placeholder="搜索..."/>
                  <i className="search icon"></i>
                  </div>

            </h3>
            <div className="ui segment">

                <h4 className="ui center aligned header">2016年招商局完成情况</h4>
                <div className="ui secondary menu e right">
                  <a className="active item" data-tab="first" style={{marginLeft:'87%'}}>表格</a>
                  <a className="item" data-tab="second">统计</a>
                </div>
                <div className="ui active tab segment" data-tab="first">
                <div className="scroll_table">
                  <table className="ui small celled striped table center">
                    <thead>
                      <tr>
                        <th className="center aligned">序号</th>
                        <th className="center aligned">新立/增资/减资</th>
                        <th className="center aligned">公司名称</th>
                        <th className="center aligned">国别<br/>(母公司注册地)</th>
                        <th className="center aligned">州别</th>
                        <th className="center aligned">总投资<br/>(万美元)</th>
                        <th className="center aligned">注册外资<br/>(万美元)</th>
                        <th className="center aligned">人民币<br/>(万美)</th>
                        <th className="center aligned">行业</th>
                        <th className="center aligned">产品分类</th>
                        <th className="center aligned">所在分类</th>
                        <th className="center aligned">所在区域</th>
                        <th className="center aligned">是否加入IOS</th>
                        <th className="center aligned">是否500强</th>
                        <th className="center aligned">处别</th>
                      </tr>
                      <tr>
                        <th colSpan="15">4月份</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>增资</td>
                        <td>AAA</td>
                        <td>瑞士</td>
                        <td>瑞士</td>
                        <td>60000.0</td>
                        <td>2000.0</td>
                        <td></td>
                        <td>服务业</td>
                        <td>商业</td>
                        <td>中心区</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>日本处</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>增资</td>
                        <td>AA</td>
                        <td>日本</td>
                        <td>日本</td>
                        <td>60000.0</td>
                        <td>2000.0</td>
                        <td></td>
                        <td>服务业</td>
                        <td>商业</td>
                        <td>中心区</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>日本处</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>增资</td>
                        <td>AAAAAA</td>
                        <td>上海</td>
                        <td>上海</td>
                        <td>60000.0</td>
                        <td>2000.0</td>
                        <td></td>
                        <td>服务业</td>
                        <td>商业</td>
                        <td>中心区</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>日本处</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>增资</td>
                        <td>AAAAA</td>
                        <td>美国</td>
                        <td>美国</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>服务业</td>
                        <td>商业</td>
                        <td>中心区</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>日本处</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>增资</td>
                        <td>AAA</td>
                        <td>瑞士</td>
                        <td>瑞士</td>
                        <td>60000.0</td>
                        <td>2000.0</td>
                        <td></td>
                        <td>服务业</td>
                        <td>商业</td>
                        <td>中心区</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>日本处</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>增资</td>
                        <td>AA</td>
                        <td>日本</td>
                        <td>日本</td>
                        <td>60000.0</td>
                        <td>2000.0</td>
                        <td></td>
                        <td>服务业</td>
                        <td>商业</td>
                        <td>中心区</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>日本处</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>增资</td>
                        <td>AAAAAA</td>
                        <td>上海</td>
                        <td>上海</td>
                        <td>60000.0</td>
                        <td>2000.0</td>
                        <td></td>
                        <td>服务业</td>
                        <td>商业</td>
                        <td>中心区</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>日本处</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>增资</td>
                        <td>AAAAA</td>
                        <td>美国</td>
                        <td>美国</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>服务业</td>
                        <td>商业</td>
                        <td>中心区</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>日本处</td>
                      </tr>
                      <tr className="active">
                        <td></td>
                        <td></td>
                        <td>新立</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="active">
                        <td></td>
                        <td></td>
                        <td>增资</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="active">
                        <td></td>
                        <td></td>
                        <td>合计</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colSpan="15"></td>
                      </tr>
                      <tr className="ui red tr">
                        <td colSpan="15"></td>
                      </tr>
                      <tr className="active">
                        <td></td>
                        <td></td>
                        <td>16年新立项目</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="active">
                        <td></td>
                        <td></td>
                        <td>16年新增项目</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr className="active">
                        <td></td>
                        <td></td>
                        <td>合计</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>     
                </div>


                </div>
                <div className="ui tab segment" data-tab="second"> 
                <div className="scroll_table">
                   <ReactHighcharts className="fdd_charts" config ={this.state.config3}></ReactHighcharts>    
                </div>                                  
                </div>
            </div>
          </div>
        </div>
        <ConfirmModal
           onClose={this.onCloseModal}
           onSave={this.onSave}
           getFormData={this.getFormData}
           title="搜索条件"
           id="filePanel"
           ref="form"
        >
          <Input 
            name="departName"
            label="公司名称"
            placeholder="公司名称"
            fieldClassName="field"
            value="公司名称"
            validations={{
              minLength: 1,
              maxLength: 50
            }}
            validationErrors={{
              minLength: '不能为空',
              maxLength: '不能超过50字'
            }}
            required/>
             <div className="three fields">
              <label>行业</label>
              <Dropdown className="item ui selection dropdown mini right search" init={true}>
                  <input name="states" type="hidden"/>
                    <i className="dropdown icon"></i>
                    <div className="default text">行业</div>
                      <div className="menu">
                        <a className="item" data-value="1">服务业</a>
                        <a className="item" data-value="2">电子信息</a>
                        <a className="item" data-value="3">商业</a>
                      </div>
              </Dropdown>
            </div>
        </ConfirmModal>
      </div>
    )
  }
}