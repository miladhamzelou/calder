import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
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
export default class SharedFiles extends Component {
  constructor(props){
    super(props)
  }

  static propTypes = {
  }

  static fetchData(params){
    return [Actions.getArticleList(),Actions.getTagList()]
  }

  componentDidMount() {
    //设置popup
    $('.menu .item').tab()
    
  }
  addModal(){
    
  }

  modifyModal(){
   
  }

  deleteModal(){
   
  }
  onSave(){  
   
  }

   //关闭弹出框
  onCloseModal(){
    
  }

  exactSearchModal(){
    
  }

  handleChange(){
    
  }
  render() {
    return (
      <div className="ui grid right_content">
        <div className="two wide column"></div>
        <div className="twelve wide column">
          <div className="ui fluid action input">
            <input type="text" placeholder="输入搜索关键字..." />
            <div className="ui button teal">搜索</div>
          </div>
          <div className="wrapper">
            <div className="ui top attached tabular menu">
              <a className="active item" data-tab="one">全部</a>
              <a className="item" data-tab="two">项目(20)</a>
              <a className="item" data-tab="three">文件(1)</a>
              <a className="item" data-tab="four">消息(3)</a>
              <a className="item" data-tab="five">任务(5)</a>
              <a className="item" data-tab="six">事项(50)</a>
              <a className="item" data-tab="seven">资料(2)</a>
            </div>

            <div className="ui bottom attached active tab segment" data-tab="one">
              <div className="ui relaxed selection list">
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
              </div>
            </div>
            <div className="ui bottom attached tab segment" data-tab="two">
              <div className="ui relaxed selection list">
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
              </div>
            </div>
            <div className="ui bottom attached tab segment" data-tab="three">
              <div className="ui relaxed selection list">
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
              </div>
            </div>  
            <div className="ui bottom attached tab segment" data-tab="four">
              <div className="ui relaxed selection list">
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
              </div>
            </div>
            <div className="ui bottom attached tab segment" data-tab="five">
              <div className="ui relaxed selection list">
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
              </div>
            </div>
            <div className="ui bottom attached tab segment" data-tab="six">
              <div className="ui relaxed selection list">
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
              </div>
            </div>
            <div className="ui bottom attached tab segment" data-tab="seven">
              <div className="ui relaxed selection list">
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">久光百货年终总结...</a>
                    <div className="description">这是一个丰收的季节，麦子熟了，农民们三三两两在地里收割麦穗...</div>
                  </div>
                  <div className="extra">来自:项目</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">李易峰上传了久光百货会议报告</a>
                    <div className="description">李易峰上传了久光百货会议报告</div>
                  </div>
                  <div className="extra">来自:文件</div>
                </div>
                <div className="item">
                  <div className="content">
                    <a className="header">出差预告</a>
                    <div className="description">周三下午五点十分，会议大厅集合出发...</div>
                  </div>
                  <div className="extra">来自:消息</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="two wide column"></div>
      </div>
    )
  }
}