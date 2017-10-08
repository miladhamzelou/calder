import React, { Component } from 'react'
import { connect } from 'react-redux'
import echarts from 'echarts'
import Chart from 'rc-echarts'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import $ from 'jquery'
import Sidebar from './sidebar'
import SuzhouJson from './320500.json'

const mapStateToProps = state =>{
  return {  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class Area extends Component {
  ready(echart) {
    echarts.registerMap('SZ', SuzhouJson)
  }
  constructor(props){
    super(props)
    this.state={
      options :''
    }
  }

  static propTypes = {
  }

  static fetchData(params){
    return [Actions.getArticleList(),Actions.getTagList()]
  }
  componentWillMount() {
    echarts.registerMap('SZ', SuzhouJson)
  }
  componentDidMount() {
    const self = this
    self.setData()
    $('.menu .item').tab({'onLoad' :function () {
      self.setData()
    }}) 
  }

  setData () {
    this.setState({
      options : {
        title: {
          text: '苏州市土地使用情况概览'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>面积(/平方米)：1000<br/>已招企业(/家)：{c}<br/>租借情况：20%'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          data:['大部分可租','部分可租','接近饱满']
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        geo: {
          map: 'SZ',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        visualMap: {
          min: 100,
          max: 300,
          text:['密集度高','密集度低'],
          realtime: false,
          calculable: true,
          color: ['#c23531','#61a0a8','#91c7ae']
        },
        series: [
          {
            name: '接近饱满',
            type: 'map',
            mapType: 'SZ', // 自定义扩展图表类型
            itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
            },
            data:[ 
              {name: '独墅湖邻里中心', value: 300},
              {name: '生物纳米园', value: 300}
            ]  
          },    
          {
            name: '部分可租',
            type: 'map',
            mapType: 'SZ', // 自定义扩展图表类型
            itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
            },
            data:[ 
              {name: '海德公园', value: 200},
              {name: '创意创意产业园', value: 200} 
            ]  
          },
          {
            name: '大部分可租',
            type: 'map',
            mapType: 'SZ', // 自定义扩展图表类型
            itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
            },
            data:[
              {name: '松泽区', value: 100},
              {name: '莲花区', value: 100},
              {name: '体育公园', value: 100},
              {name: '国际科技园', value: 100},
              {name: '白鹭园', value: 100}
            ]  
          }
        ]
      }
    })
  }

  handleChange(e,option,isAdd=false){
    e.preventDefault()
  }

  render() {
    return (
      <div className='ui grid right_content'>
        <Sidebar />
          <div className='sixteen wide column right_content'>
            <div className='stretched column content'>
              
              <div className="ui secondary menu e right">
                <a className="active item" data-tab="first" style={{marginLeft:'87%'}}>表格</a>
                <a className="item" data-tab="second">平面图</a>
              </div>
              <div className="ui active tab segment" data-tab="first">
                <h4 className="ui center aligned header">2016年3月苏州土地资源情况</h4>
                <table className="ui small celled striped table center">
                  <thead>
                    <tr>
                      <th className="center "></th>
                      <th className="center ">区域</th>
                      <th className="center ">面积(平方米)</th>
                      <th className="center ">价格(万元)</th>
                      <th className="center ">最多容纳数(家)</th>
                      <th className="center ">已招企业(家)</th>
                      <th className="center ">负责人</th>
                      <th className="center ">租借情况</th>
                    </tr>                   
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>松泽区</td>
                      <td>900</td>
                      <td>2000</td>
                      <td>300</td>
                      <td>150</td>
                      <td>张军</td>
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
                    <tr>
                      <td>2</td>
                      <td>莲花区</td>
                      <td>1200</td>
                      <td>2500</td>
                      <td>400</td>
                      <td>100</td>
                      <td>王丹</td>
                      <td>
                        <p className="list-top">
                          <span className="time">
                            <div className="ui indicating small progress" data-percent="25" id="example1">
                              <div className="bar" style={{transitionDuration: '300ms',width: '25%'}}></div>
                              <div className="label">25%</div>
                            </div>
                          </span>
                        </p>   
                      </td>  
                    </tr> 
                    <tr>
                      <td>3</td>
                      <td>生物纳米园</td>
                      <td>1500</td>
                      <td>4000</td>
                      <td>500</td>
                      <td>400</td>
                      <td>李健</td>
                      <td>
                        <p className="list-top">
                          <span className="time">
                            <div className="ui indicating small progress" data-percent="80" id="example1">
                              <div className="bar" style={{transitionDuration: '300ms',width: '80%'}}></div>
                              <div className="label">80%</div>
                            </div>
                          </span>
                        </p>   
                      </td>  
                    </tr> 
                    
                  </tbody>
                </table>
                <div style ={{height:38}}>
                  <Pager pages='4' current={this.state.current} onChange={this.pageChange} pageSize={5}/>
                </div>      
              </div>
              <div className='ui segment tab' data-tab="second">
                <Chart options={ this.state.options } onReady={this.ready} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}