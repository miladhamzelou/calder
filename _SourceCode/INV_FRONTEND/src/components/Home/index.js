import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import jennyAvatar from '../../assets/images/jenny.jpg'
import elliotAvatar from '../../assets/images/elliot.jpg'
import helenAvatar from '../../assets/images/helen.jpg'
import ConfirmModal from '../Common/confirmModal'
import MyDate from '../Common/form/date'
import Formsy from 'formsy-react'
import Chart from 'rc-echarts'
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
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state ={
      type: 'date',
      isShow:false,
      defaultDate:'',
      options :'',
      list:[{
        time:'今天11:39',
        name:'久光会议纪要上传',
        personList:[
          { 
            name:'王思聪'
          }
        ],
        address:'-',
        type:'报告',
        project:'久光项目',
        urgency: 1
      },{
        time:'明天11:39',
        name:'贝斯特食品出差',
        personList:[
          { 
            name:'王局'
          },{
            name: '李局'
          }
        ],
        address:'上海',
        type:'出差',
        project:'贝斯特食品',
        urgency: 1
      },{
        time:'今天11:39',
        name:'久光会议纪要上传',
        personList:[
          { 
            name:'王局'
          },{
            name: '李易峰'
          }
        ],
        address:'第一会议室',
        type:'来访',
        project:'久光项目',
        urgency: 1
      },
      {
        time:'今天11:39',
        name:'久光会议',
        personList:[
          { 
            name:'王'
          },{
            name: '李'
          }
          ,{
            name: '张'
          }
        ],
        address:'第二会议室',
        type:'预报',
        project:'久光项目',
        urgency: 2
      },
      {
        time:'今天11:39',
        name:'久光会议纪要上传',
        personList:[
          { 
            name:'王思聪'
          }
        ],
        address:'-',
        type:'报告',
        project:'久光项目',
        urgency: 1
      },{
        time:'今天11:39',
        name:'久光会议纪要上传',
        personList:[
          { 
            name:'王思聪'
          }
        ],
        address:'-',
        type:'报告',
        project:'久光项目',
        urgency: 3
      }]
    }
    this.onSelect = this.onSelect.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
    this.openAddUser = this.openAddUser.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }
  ready(echart) {
    
  }
  static propTypes = {
  }

  static fetchData(params){
    return [Actions.getArticleList(),Actions.getTagList()]
  }

  componentDidMount() {
    $('.menu .item').tab({})
    $('.add.user').popup({
      hoverable:true
    })
    this.setData()
  }

  setData() {
    this.setState({
      options : {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['我的','所有人']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          name:'月',
          type: 'category',
          boundaryGap: false,
          data: ['1','2','3','4','5','6','7','8','9','10','11','12']
        },
        yAxis: {
          name:'接待数量',
          type: 'value'
        },
        series: [
          {
            name:'我的',
            type:'line',
            stack: '总量',
            data:[12, 13, 10, 13, 9, 23, 21, 19, 23, 29, 33, 31]
          },
          {
            name:'所有人',
            type:'line',
            stack: '总量',
            data:[22, 18, 19, 23, 29, 33, 31, 10, 13, 9, 23, 21]
          }
        ]
      }
    })
  }

  handleChange(e,option,isAdd=false){
    e.preventDefault()
  }
  onTypeChange(type) {
    this.setState({
      type
    })
  }
  onSelect(){
    alert('点击了我')
  }
  openAddUser(){
    this.setState({isShow:true})
  }
  onCloseModal(){
    this.setState({isShow:false})
  }
  monthCellRender() {
    return (
        <a>久光百货第三次会议</a>
      )
  }
  dateCellRender() {
    return (
        <a>久光百货第二次会议</a>
      )
  }
  render() {
    return (
      <div id="home">
        <ConfirmModal 
          onClose={this.onCloseModal}
          onSave={this.onSave}
          isOpened={this.state.isShow}                
          title="添加关注的人"
          id="addUser"
          >
            <div className="field">
              <div className="ui search icon input">
                <i className="search icon"></i>
                <input type="text" name="search" placeholder="搜索成员或者团队..." />
              </div>
            </div>
            <div className="field">
              <div className="header">
                <i className="user icon"></i>
                成员
              </div>
            </div>
            <div className="ui items">
              <div className="item">
                <img className="ui avatar image" src={jennyAvatar}/>
                <div className="middle aligned content">
                  <div className="description">
                    <p>王力宏</p>
                  </div>
                </div>
                <div className="ui right floated button blue basic">
                  添加
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" src={elliotAvatar}/>
                <div className="middle aligned content">
                  <div className="description">
                    <p>黄渤</p>
                  </div>
                </div>
                <div className="ui right floated button blue basic">
                  添加
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" src={helenAvatar}/>
                <div className="middle aligned content">
                  <div className="description">
                    <p>邓超</p>
                  </div>
                </div>
                <div className="ui right floated button blue basic">
                  添加
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" src={jennyAvatar}/>
                <div className="middle aligned content">
                  <div className="description">
                    <p>王力宏</p>
                  </div>
                </div>
                <div className="ui right floated button blue basic">
                  添加
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" src={elliotAvatar}/>
                <div className="middle aligned content">
                  <div className="description">
                    <p>黄渤</p>
                  </div>
                </div>
                <div className="ui right floated button blue basic">
                  添加
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" src={helenAvatar}/>
                <div className="middle aligned content">
                  <div className="description">
                    <p>邓超</p>
                  </div>
                </div>
                <div className="ui right floated button blue basic">
                  添加
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" src={jennyAvatar}/>
                <div className="middle aligned content">
                  <div className="description">
                    <p>王力宏</p>
                  </div>
                </div>
                <div className="ui right floated button blue basic">
                  添加
                </div>
              </div>
            </div>
        </ConfirmModal> 
        <div className="ui stackable grid">
          <div className="eleven wide column">
            <div className="wrapper">
              <div className="ui grid">
                <div className="tab-item three wide column">
                    <div className="tab-inner client">
                        <div className="title">接待量</div>
                        <div className="quantity">10</div>
                    </div>
                </div>
                <div className="tab-item three wide column">
                    <div className="tab-inner contract" >
                        <div className="title">出差数</div>
                        <div className="quantity">2</div>
                    </div>
                </div>
                <div className="tab-item three wide column">
                    <div className="tab-inner equip">
                        <div className="title">会议出席数</div>
                        <div className="quantity">3</div>
                    </div>
                </div>
                <div className="tab-item three wide column">
                    <div className="tab-inner building">
                        <div className="title">资源共享数</div>
                        <div className="quantity">3</div>
                    </div>
                </div>
                <div className="tab-item three wide column">
                    <div className="tab-inner month-patrol-process">
                        <div className="title">参与项目数</div>
                        <div className="quantity">5</div>
                    </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="ui dividing header">
                <i className="ui mini calendar alternate icon"></i>待办事项
              </div>
              <div className="ui top pointing secondary menu e">
                <a className="active item" data-tab="first">我的(13)</a>
                <a className="item" data-tab="second">所有(23)</a>
              </div>
              <div className="ui active tab" data-tab="first">
                <h3 className="ui dividing header">
                  <Formsy.Form className="ui form" ref="searchForm" onChange={this.getSearchFormData}>
                    <MyDate
                      name="from"
                      label =""
                      placeholder="从"
                      width = "154"
                      fieldClassName ="ui mini left icon input"
                      value ={this.state.defaultDate}
                    />
                    <MyDate
                      name="from"
                      label =""
                      placeholder="到"
                      width = "154"
                      fieldClassName ="ui mini left icon input"
                      value ={this.state.defaultDate}
                    />
                    <div className="ui mini left icon input">
                      <label></label>
                      <div className="ui icon input">
                      <input type="text" placeholder="事件名称..."/>
                      <i className="search icon"></i>
                      </div>
                    </div>
                    <button className="ui small basic button right floated blue" onClick={this.addModal}><i
                      className="icon plus"></i>新增
                    </button>
                    <button className="ui small basic button right floated blue" onClick={this.addModal}><i
                      className="icon search"></i>查询
                    </button>
                  </Formsy.Form>
                </h3>
                <table className="ui single line table selectable">
                  <thead>
                    <tr>
                      <th >时间</th>
                      <th >事件名称</th>
                      <th >参与人</th>
                      <th >地点</th>
                      <th >类型</th>
                      <th >相关项目</th>
                      <th >操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list != null&&
                    this.state.list.map((item,i)=>
                      <tr key={i}>
                        <td>
                          {(() => {
                            if(item.urgency==1){
                              return <div><a className="ui ribbon label">一般</a>{item.time}</div>
                            }else if(item.urgency==2){
                              return <div><a className="ui orange ribbon label">重要</a>{item.time}</div>
                            }else if(item.urgency==3){
                              return <div><a className="ui red ribbon label">紧急</a>{item.time}</div>
                            }
                          })()}
                        </td>
                        <td>
                          {item.name}
                        </td>
                        <td>
                          {(() => {
                            const personInformation = item.personList.map(function(personItem, i){
                              return(
                                <Link className="ui item link" style={{marginRight:'5px'}} to="/">{personItem.name}</Link>
                              )
                            })
                            return personInformation
                          })()}
                        </td>
                        <td>{item.address}</td>
                        <td>{item.type}</td>
                        <td>{item.project}</td>
                        <td>
                          <i className="edit alternate icon link shareop" data-variation="mini"></i>
                          <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                        </td>
                      </tr>   
                    )} 
                  </tbody>
                </table>
                <div style ={{height:38}}>               
                  <Pager pages={10} current={4} pageSize={5}/>
                </div>
              </div>
              <div className="ui tab" data-tab="second">
                <h3 className="ui dividing header ">
                  <Formsy.Form className="ui form" ref="searchForm" onChange={this.getSearchFormData}>
                    <MyDate
                      name="from"
                      label =""
                      placeholder="从"
                      width = "154"
                      fieldClassName ="ui mini left icon input"
                      value ={this.state.defaultDate}
                    />
                    <MyDate
                      name="from"
                      label =""
                      placeholder="到"
                      width = "154"
                      fieldClassName ="ui mini left icon input"
                      value ={this.state.defaultDate}
                    />
                    <div className="ui mini left icon input">
                      <label></label>
                      <div className="ui icon input">
                        <input type="text" placeholder="事件名称或人员..."/>
                        <i className="search icon"></i>
                      </div>
                    </div>
                    <button className="ui small basic button right floated blue" onClick={this.addModal}><i
                      className="icon search"></i>查询
                    </button>
                  </Formsy.Form>
                </h3>
                <table className="ui single line table selectable">
                  <thead>
                    <tr>
                      <th >时间</th>
                      <th >事件名称</th>
                      <th >参与人</th>
                      <th >地点</th>
                      <th >类型</th>
                      <th >相关项目</th>
                      <th >操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list != null&&
                    this.state.list.map((item,i)=>
                      <tr key={i}>
                        <td>
                          {(() => {
                            if(item.urgency==1){
                              return <div><a className="ui ribbon label">一般</a>{item.time}</div>
                            }else if(item.urgency==2){
                              return <div><a className="ui orange ribbon label">重要</a>{item.time}</div>
                            }else if(item.urgency==3){
                              return <div><a className="ui red ribbon label">紧急</a>{item.time}</div>
                            }
                          })()}
                        </td>
                        <td>
                          {item.name}
                        </td>
                        <td>
                          {(() => {
                            const personInformation = item.personList.map(function(personItem, i){
                              return(
                                <Link className="ui item link" style={{marginRight:'5px'}} to="/">{personItem.name}</Link>
                              )
                            })
                            return personInformation
                          })()}
                        </td>
                        <td>{item.address}</td>
                        <td>{item.type}</td>
                        <td>{item.project}</td>
                        <td>
                          <i className="edit alternate icon link shareop" data-variation="mini"></i>
                          <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                        </td>
                      </tr>   
                    )} 
                  </tbody>
                </table>
                <div style ={{height:38}}>               
                  <Pager pages={10} current={4} pageSize={5}/>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="ui dividing header">招商工作统计</div>
              <Chart options={ this.state.options } onReady={this.ready} />
            </div>
          </div>
          <div className="five wide column">
            <div className="wrapper">
              <div className="ui dividing header">公告信息</div>
              <div className="ui divided selection list">
                <div className="item">
                  <div className="content">
                    <div className="header">关于开展社会组织2015年度检查工作的通知</div>
                    05-19 14:01
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header">关于举行第七届高技能大赛项目说明会的通知</div>
                    05-19 14:01
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header">2016年政府补贴人才培训项目采购公告第2号</div>
                    05-19 14:01
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header">2016年政府补贴人才培训项目采购公告第2号</div>
                    05-19 14:01
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header">2016年政府补贴人才培训项目采购公告第2号</div>
                    05-19 14:01
                  </div>
                </div>
              </div>
              <div className="ui right aligned grid">
                  <div className="sixteen wide column">
                    <Link className="" to="/projectManage">
                      更多
                      <i className="angle double right icon"></i>
                    </Link>
                  </div>
                </div>
            </div>
            <div className="wrapper">
              <div className="ui dividing header">月排行榜</div>
              <div className="ui top pointing secondary menu e">
                <a className="active item" data-tab="three">接待率</a>
                <a className="item" data-tab="four">上传率</a>
              </div>
              <div className="ui active tab" data-tab="three">
                <div className="ui divided selection list">
                  <a className="item">
                    <div className="ui orange circular horizontal label">1</div>
                    王思聪(30)
                    <label className="ui label basic horizontal right floated"><i className="heart red alternate icon link shareop right floated" data-variation="mini"></i> 11</label>
                  </a>
                  <a className="item">
                    <div className="ui orange circular horizontal label">2</div>
                    高圆圆(25)
                    <label className="ui label basic horizontal right floated"><i className="heart red alternate icon link shareop right floated" data-variation="mini"></i> 22</label>
                  </a>
                  <a className="item">
                    <div className="ui orange circular horizontal label">3</div>
                    汪峰(20)
                    <label className="ui label basic horizontal right floated"><i className="heart red alternate icon link shareop right floated" data-variation="mini"></i> 1</label>
                  </a>
                  <a className="item">
                    <div className="ui blue circular horizontal label">4</div>
                    张艺馨(18)
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i> 12</label>
                  </a>
                  <a className="item">
                    <div className="ui blue circular horizontal label">5</div>
                    李少峰(15)
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i> 1</label>
                  </a>
                  <a className="item">
                    <div className="ui blue circular horizontal label">6</div>
                    刘德华(13)
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i> 11</label>
                  </a>
                </div>
                <div className="ui right aligned grid">
                  <div className="sixteen wide column">
                    <Link className="" to="/projectManage">
                      更多
                      <i className="angle double right icon"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="ui tab" data-tab="four">
                <div className="ui divided selection list">
                  <a className="item">
                    <div className="ui orange circular horizontal label">1</div>
                    刘德华(12)
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i> 1</label>
                  </a>
                  <a className="item">
                    <div className="ui orange circular horizontal label">2</div>
                    张艺馨(10)
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i> 11</label>
                  </a>
                  <a className="item">
                    <div className="ui orange circular horizontal label">3</div>
                    汪峰(11)
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i> 2</label>
                  </a>
                  <a className="item">
                    <div className="ui blue circular horizontal label">4</div>
                    高圆圆(13)
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i> 3</label>
                  </a>
                  <a className="item">
                    <div className="ui blue circular horizontal label">5</div>
                    李少峰(12)
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i> 0</label>
                  </a>
                </div>
                <div className="ui right aligned grid">
                  <div className="sixteen wide column">
                    <Link className="" to="/projectManage">
                      更多
                      <i className="angle double right icon"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="ui dividing header">热门资源</div>
              <div className="ui middle aligned divided list selection">
                <div className="item">
                  <div className="right floated content">
                    <label className="ui label basic horizontal right floated"><i className="download alternate icon link shareop right floated" data-variation="mini"></i> 2</label>
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i>5</label>
                  </div>
                  <div className="content">
                    <div className="file_icon doc">doc</div>
                    谁的青春不迷茫.word<br/>
                    备注描述哈哈哈哈哈
                  </div>
                </div>
                <div className="item">
                  <div className="right floated content">
                    <label className="ui label basic horizontal right floated"><i className="download alternate icon link shareop right floated" data-variation="mini"></i> 0</label>
                    <label className="ui label basic horizontal right floated"><i className="heart red alternate icon link shareop right floated" data-variation="mini"></i>10</label>
                  </div>
                  <div className="content">
                    <div className="file_icon xlsx">xlsx</div>
                    表格模板.xlsx<br/>
                    这是备注描述哈哈
                  </div>
                </div>
                <div className="item">
                  <div className="right floated content">
                    <label className="ui label basic horizontal right floated"><i className="download alternate icon link shareop right floated" data-variation="mini"></i> 10</label>
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i>0</label>
                  </div>
                  <div className="content">
                    <div className="file_icon txt">txt</div>
                    新建文本文档.txt<br/>
                    这是备注描述哈哈
                  </div>
                </div>
                <div className="item">
                  <div className="right floated content">
                    <label className="ui label basic horizontal right floated"><i className="download alternate icon link shareop right floated" data-variation="mini"></i> 0</label>
                    <label className="ui label basic horizontal right floated"><i className="heart red alternate icon link shareop right floated" data-variation="mini"></i>0</label>
                  </div>
                  <div className="content">
                    <div className="file_icon txt">txt</div>
                    新建文本文档1.txt<br/>
                    这是备注描述
                  </div>
                </div>
                <div className="item">
                  <div className="right floated content">
                    <label className="ui label basic horizontal right floated"><i className="download alternate icon link shareop right floated" data-variation="mini"></i> 0</label>
                    <label className="ui label basic horizontal right floated"><i className="empty heart red alternate icon link shareop right floated" data-variation="mini"></i>0</label>
                  </div>
                  <div className="content">
                    <div className="file_icon">svg</div>
                    会议报告.svg<br/>
                    这是备注描述哈
                  </div>
                </div>
              </div>
              <div className="ui right aligned grid">
                  <div className="sixteen wide column">
                    <Link className="" to="/projectManage">
                      更多
                      <i className="angle double right icon"></i>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}