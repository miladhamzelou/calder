import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import jennyAvatar from '../../assets/images/jenny.jpg'
import elliotAvatar from '../../assets/images/elliot.jpg'
import helenAvatar from '../../assets/images/helen.jpg'
import defaultAvatar from '../../assets/images/elyse.png'
import ConfirmModal from '../Common/confirmModal'
import $ from 'jquery'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

moment.locale('zh-cn')
BigCalendar.momentLocalizer(moment)
const message = {
  allDay: '全天',
  previous: '前',
  next: '后',
  today: '今天',
  month: '月',
  week: '周',
  day: '天',
  agenda: '列表',
  showMore: total => `+${total} 更多`
}
const myEventsList = [
  {
    'title': '开会',
    'allDay': true,
    'start': new Date(2016, 3, 0),
    'end': new Date(2016, 3, 0)
  },
  {
    'title': '吃饭',
    'start': new Date(2016, 3, 7),
    'end': new Date(2016, 3, 10)
  },

  {
    'title': '欧洲出差',
    'start': new Date(2016, 2, 13, 0, 0, 0),
    'end': new Date(2016, 2, 20, 0, 0, 0)
  },

  {
    'title': '香港出差',
    'start': new Date(2016, 10, 6, 0, 0, 0),
    'end': new Date(2016, 10, 13, 0, 0, 0)
  },

  {
    'title': '提交报告',
    'start': new Date(2016, 3, 9, 0, 0, 0),
    'end': new Date(2016, 3, 9, 0, 0, 0)
  },
  {
    'title': '出差报告',
    'start': new Date(2016, 3, 11),
    'end': new Date(2016, 3, 13),
    desc: '关于久光百货的出差报告'
  },
  {
    'title': '贝斯特食品开会',
    'start': new Date(2016, 3, 12, 10, 30, 0, 0),
    'end': new Date(2016, 3, 12, 12, 30, 0, 0),
    desc: '贝斯特食品第三次会议'
  },
  {
    'title': '陪王力宏吃饭',
    'start':new Date(2016, 3, 12, 12, 0, 0, 0),
    'end': new Date(2016, 3, 12, 13, 0, 0, 0),
    desc: '下午和同事一起吃饭'
  },
  {
    'title': '久光百货来访',
    'start':new Date(2016, 3, 12,14, 0, 0, 0),
    'end': new Date(2016, 3, 12,15, 0, 0, 0)
  },
  {
    'title': '娱乐时间',
    'start':new Date(2016, 3, 12, 17, 0, 0, 0),
    'end': new Date(2016, 3, 12, 17, 30, 0, 0)
  },
  {
    'title': '吃饭',
    'start':new Date(2016, 3, 12, 20, 0, 0, 0),
    'end': new Date(2016, 3, 12, 21, 0, 0, 0)
  },
  {
    'title': '我的生日',
    'start':new Date(2016, 3, 13, 7, 0, 0),
    'end': new Date(2016, 3, 13, 10, 30, 0)
  }
]

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
      isShow:false
    }
    this.onSelect = this.onSelect.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
    this.openAddUser = this.openAddUser.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  static propTypes = {
  }

  static fetchData(params){
    return [Actions.getArticleList(),Actions.getTagList()]
  }

  componentDidMount() {
    $('.menu .item').tab({})
    $('#example1').progress('increment')
    $('#example2').progress('increment')
    $('#example3').progress('increment')
    $('#example4').progress('increment')
    $('#example5').progress('increment')
    $('.add.user').popup({
      hoverable:true
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
        <div className="ui success message">
          <i className="close icon"></i>
          <div className="header">
            您成功上传了会议记录，完成了一个任务.
          </div>
        </div>
        <div className="ui stackable grid">
          <div className="ten wide column">
            <div className="wrapper">
              <div className="ui items">
                <div className="item">
                  <a className="ui tiny image" style={{width: 100}}>
                    <div className="ui card">
                      <div className="image">
                        <img src={defaultAvatar} />
                      </div>
                      <div className="content">
                        <div className="description">
                          超级管理员
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="middle aligned content">
                    <div className="ui three cards">
                      <a className="card">
                        <div className="content">
                          <div className="header">完成任务数量</div>
                          <div className="meta">
                            <span className="ui basic green label">88</span>
                          </div>
                        </div>
                      </a>
                      <a className="card">
                        <div className="content">
                          <div className="header">逾期任务数量</div>
                          <div className="meta red">
                            <span className="ui basic red label">2</span>
                          </div>
                        </div>
                      </a>
                      <a className="card">
                        <div className="content">
                          <div className="header">新增任务数量</div>
                          <div className="meta">
                            <span className="ui basic blue label">10</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="ui dividing header">
                待办事项
                <div className="right floated author">
                  <a className="add user" onClick={this.openAddUser} data-content="添加关注的人" data-variation="inverted">
                    <i className="add user icon"></i>
                  </a>
                </div>
                <div className="right floated author">
                  ...
                </div>
                <div className="right floated author">
                  <a className="btn-delete">
                    <i className="icon remove circle"></i>
                  </a>
                  <img className="ui avatar image" src={jennyAvatar} /> 王力宏
                </div>
                <div className="right floated author">
                  <img className="ui avatar image" src={elliotAvatar} /> 黄渤
                </div>
                <div className="right floated author">
                  <img className="ui avatar image" src={helenAvatar} /> 周杰伦
                </div>
              </div>
              <div className="ui top pointing secondary menu e">
                <a className="active item" data-tab="first">日历</a>
                <a className="item" data-tab="second">表格</a>
              </div>
              <div className="ui active tab segment" data-tab="first">
                <BigCalendar
                  events={myEventsList}
                  messages={message}
                  defaultDate={new Date(2016, 3, 1)}
                />
              </div>
              <div className="ui tab segment" data-tab="second">
                <h3 className="ui dividing header ">
                  <div className="title"><i className="calendar alternate icon"></i>所有待办（10）</div>
                  <div className="ui mini icon input">
                    <input type="text" placeholder="事项或人员..."/>
                    <i className="search icon"></i>
                  </div>
                </h3>
                <table className="ui single line table">
                  <thead>
                    <tr>
                      <th >事项名</th>
                      <th >类型</th>
                      <th >相关项目</th>
                      <th >时间</th>
                      <th >操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><div className="file_icon xlsx">完成</div><span className="fdd_file_name">会议纪要上传</span></td>
                      <td>报告</td>
                      <td>久光百货</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="edit alternate icon link shareop green" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td><div className="file_icon txt">紧急</div><span className="fdd_file_name">出差</span></td>
                      <td>出差</td>
                      <td>贝斯特食品</td>
                      <td>今天12:39</td>
                      <td>
                        <i className="edit alternate icon link operate green" data-content="分享" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td><div className="file_icon">一般</div><span className="fdd_file_name">出差报告</span></td>
                      <td>报告</td>
                      <td>贝斯特食品</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="edit alternate icon link operate green" data-content="分享" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td><div className="file_icon doc">重要</div><span className="fdd_file_name">来访预报</span></td>
                      <td>来访</td>
                      <td>久光百货</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="edit alternate icon link operate green" data-content="分享" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td><div className="file_icon doc">重要</div><span className="fdd_file_name">会议预报</span></td>
                      <td>会议</td>
                      <td>久光 </td>
                      <td>今天11:39</td>
                      <td>
                        <i className="edit alternate icon link operate green" data-content="分享" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style ={{height:38}}>               
                  <Pager pages={10} current={4} pageSize={5}/>
                </div>
              </div>
            </div>
          </div>
          <div className="six wide column">
            <div className="wrapper">
              <div className="ui dividing header">项目进度</div>
              <div className="ui indicating small progress" data-percent="72" id="example1">
                <div className="bar"></div>
                <div className="label">久光百货 72%</div>
              </div>
              <div className="ui indicating small progress" data-percent="25" id="example2">
                <div className="bar"></div>
                <div className="label">贝斯特食品 25%</div>
              </div>
              <div className="ui indicating small progress" data-percent="60" id="example3">
                <div className="bar"></div>
                <div className="label">宝时得机械 60%</div>
              </div>
              <div className="ui indicating small progress" data-percent="20" id="example4">
                <div className="bar"></div>
                <div className="label">圆融星座 20%</div>
              </div>
              <div className="ui indicating small progress" data-percent="100" id="example5">
                <div className="bar"></div>
                <div className="label">新光天地 100%</div>
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
              <div className="ui dividing header">动态</div>
              <div className="ui basic segment" id="project-activities">
                <div className="start-date"> 
                  <span>2016-6-3 周五</span>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={jennyAvatar}/></a>
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
                    <div className="time">16:00</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src="http://semantic-ui.com/images/avatar/large/daniel.jpg"/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>王力宏</a>
                      <span>上传了</span>
                      项目
                      <a>贝斯特食品</a>
                      <span>会议报告</span>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">15:30</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={elliotAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>黄渤</a>
                      <span>发起了</span>
                      项目
                      <a>宝时得机械</a>
                      <span>出差预报</span>
                    </div>
                  </div>
                </div>
                <div className="activity not-bordered">
                  <div className="timeline">
                    <div className="time">14:10</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={helenAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>邓超</a>
                      <span>下载了</span>
                      知识库
                      <a>久光百货</a>
                      <span>会议报告</span>
                    </div>
                  </div>
                </div>
                <div className="start-date"> 
                  <span>2016-6-2 周四</span>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:00</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={defaultAvatar}/></a>
                  </div>
                  <div className="content">
                    <div className="action">
                      <a>邓超</a>
                      <span>下载了</span>
                      知识库
                      <a>久光百货</a>
                      <span>会议报告</span>
                    </div>
                  </div>
                </div>
                <div className="activity">
                  <div className="timeline">
                    <div className="time">17:12</div>
                  </div>
                  <div className="avatar">
                    <a><img className="ui circular image" src={elliotAvatar}/></a>
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
                    <a><img className="ui circular image" src={jennyAvatar}/></a>
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
                    <a><img className="ui circular image" src={helenAvatar}/></a>
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
          </div>
        </div>
      </div>
    )
  }
}