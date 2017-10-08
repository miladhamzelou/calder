import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Checkbox} from 'react-semantify'
import Sidebar from '../Common/addressSidebar'
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
export default class KnowLedgeBase extends Component {
  constructor(props){
    super(props)
  }

  static propTypes = {
  }

  static fetchData(params){
    return [Actions.getArticleList(),Actions.getTagList()]
  }

  componentDidMount() {
    $('.ui.accordion').accordion()
    $('.operate').popup({
      position : 'top center',
      inline: true
    })   
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
                <div className="title"><i className="share alternate icon"></i>知识库</div>
                <div className="ui mini icon input ">
                  <input type="text" placeholder="名称..."/>
                  <i className="search icon"></i>
                  </div>
                  <button className="ui small basic button right floated" onClick={this.handleAdd}><i
                    className="icon cloud upload"></i>上传
                  </button>
            </h3>
            <div className="ui segment">
              <div className="ui styled accordion">
  <div className="title">
    <i className="dropdown icon"></i>
     <i className="folder icon" ></i>项目文件夹
  </div>
  <div className="content">
    以往历史项目的资料和总结
    <div className="accordion transition hidden">
      <div className="active title">
          <i className="dropdown icon"></i>
          <i className="folder icon" ></i>三星项目
      </div>
      <div className="active content">
        <div className="accordion">
          <div className="title">
              <i className="dropdown icon"></i>
             <i className="folder icon" ></i>三星项目1
          </div>
          <div className="content">
              <table className="ui single line table">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="ui checkbox">
                                                <input type="checkbox" />
                                                <label></label>
                                            </div>
                                        </th>
                                        <th>文件名称</th>
                                        <th>文件编号</th>
                                        <th>上传者</th>
                                        <th>更新时间</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td><div className="file_icon doc">doc</div><span className="fdd_file_name">招商系统需求文档.word</span></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                           <span className="font_thirteen"><i className="heart icon link operate red" data-content="喜欢(99)" data-variation="mini"></i>(99)</span>
                                            <span className="font_thirteen"><i className="unhide icon link operate" data-content="阅读(12)" data-variation="mini"></i>(12)</span>
                                            <span className="font_thirteen"><i className="cloud download icon link operate" data-content="下载(209)" data-variation="mini"></i>(209)</span>  
                                          </td>
                                      </tr>
                                       <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td><div className="file_icon txt">txt</div><span className="fdd_file_name">新建文本文档.txt</span></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                             <span className="font_thirteen"><i className="heart icon link operate red" data-content="喜欢(99)" data-variation="mini"></i>(99)</span>
                                            <span className="font_thirteen"><i className="unhide icon link operate" data-content="阅读(12)" data-variation="mini"></i>(12)</span>
                                            <span className="font_thirteen"><i className="cloud download icon link operate" data-content="下载(209)" data-variation="mini"></i>(209)</span>
                                          </td>
                                      </tr> <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td><div className="file_icon">svg</div><span className="fdd_file_name">xxxxxxxx.svg</span></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                             <span className="font_thirteen"><i className="heart icon link operate red" data-content="喜欢(99)" data-variation="mini"></i>(99)</span>
                                            <span className="font_thirteen"><i className="unhide icon link operate" data-content="阅读(12)" data-variation="mini"></i>(12)</span>
                                            <span className="font_thirteen"><i className="cloud download icon link operate" data-content="下载(209)" data-variation="mini"></i>(209)</span>
                                          </td>
                                      </tr> <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td><div className="file_icon doc">doc</div><span className="fdd_file_name">钢铁是怎样炼成的.word</span></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                             <span className="font_thirteen"><i className="heart icon link operate red" data-content="喜欢(99)" data-variation="mini"></i>(99)</span>
                                            <span className="font_thirteen"><i className="unhide icon link operate" data-content="阅读(12)" data-variation="mini"></i>(12)</span>
                                            <span className="font_thirteen"><i className="cloud download icon link operate" data-content="下载(209)" data-variation="mini"></i>(209)</span>
                                          </td>
                                      </tr>
                                </tbody>
                            </table>
          </div>
          <div className="title">
              <i className="dropdown icon"></i>
             <i className="folder icon" ></i>政策法规
          </div>
          <div className="content">
              <i className="folder icon" ></i>松下集团2
          </div>
        </div>
      </div>
      <div className="title">
          <i className="dropdown icon"></i>
          <i className="folder icon" ></i>松下集团
      </div>
      <div className="content">
      </div>
      <div className="title">
          <i className="dropdown icon"></i>
          <i className="folder icon" ></i>五指山项目
      </div>
      <div className="content">
      </div>
    </div>
  </div>
  <div className="title">
    <i className="dropdown icon"></i>
    <i className="folder icon" ></i>政策法规（99）
  </div>
  <div className="content">
    <p>最新最全的政策法规查看</p>
    <div className="accordion">
      <div className="active title">
        <i className="dropdown icon"></i>
        <i className="folder icon" ></i>发改委(39)
      </div>
      <div className="active content">
        <div className="scroll_table scroll_table_900">
        <table className="ui single line table">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="ui checkbox">
                                                <input type="checkbox" />
                                                <label></label>
                                            </div>
                                        </th>
                                        <th>文件名称</th>
                                        <th>文件编号</th>
                                        <th>上传者</th>
                                        <th>更新时间</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td><div className="file_icon doc">doc</div><span className="fdd_file_name"> 关于进一步共同做好政府和社会资本合作（PPP）有关工作的通知(财金[2016]32号).doc</span></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                             <span className="font_thirteen"><i className="heart icon link operate red" data-content="喜欢(99)" data-variation="mini"></i>(99)</span>
                                            <span className="font_thirteen"><i className="unhide icon link operate" data-content="阅读(12)" data-variation="mini"></i>(12)</span>
                                            <span className="font_thirteen"><i className="cloud download icon link operate" data-content="下载(209)" data-variation="mini"></i>(209)</span>
                                          </td>
                                      </tr>
                                       <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td><div className="file_icon txt">txt</div><span className="fdd_file_name">关于浙江省淳安县新安江开发总公司发行养老产业专项债券核准的批复(发改企业债券[2016]195号).txt</span></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                            <span className="font_thirteen"><i className="heart icon link operate red" data-content="喜欢(99)" data-variation="mini"></i>(99)</span>
                                            <span className="font_thirteen"><i className="unhide icon link operate" data-content="阅读(12)" data-variation="mini"></i>(12)</span>
                                            <span className="font_thirteen"><i className="cloud download icon link operate" data-content="下载(209)" data-variation="mini"></i>(209)</span>
                                          </td>
                                      </tr> <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td><div className="file_icon">svg</div><span className="fdd_file_name">关于云南省昆明东骏置业有限公司非公开发行东旭骏城项目收益债券核准的批复信息概要.svg</span></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                             <span className="font_thirteen"><i className="heart icon link operate red" data-content="喜欢(99)" data-variation="mini"></i>(99)</span>
                                            <span className="font_thirteen"><i className="unhide icon link operate" data-content="阅读(12)" data-variation="mini"></i>(12)</span>
                                            <span className="font_thirteen"><i className="cloud download icon link operate" data-content="下载(209)" data-variation="mini"></i>(209)</span>
                                          </td>
                                      </tr> <tr>
                                          <td>
                                              <Checkbox init={true}>
                                                  <input type="checkbox" />
                                                  <label></label>
                                              </Checkbox>
                                          </td>
                                          <td><div className="file_icon doc">doc</div><span className="fdd_file_name">关于江苏省镇江市港城供水有限公司项目收益债券核准的批复信息概要.doc</span></td>
                                          <td>#3333</td>
                                          <td>范副局</td>
                                          <td>2015-02-14</td>
                                          <td>
                                            <span className="font_thirteen"><i className="heart icon link operate red" data-content="喜欢(99)" data-variation="mini"></i>(99)</span>
                                            <span className="font_thirteen"><i className="unhide icon link operate" data-content="阅读(12)" data-variation="mini"></i>(12)</span>
                                            <span className="font_thirteen"><i className="cloud download icon link operate" data-content="下载(209)" data-variation="mini"></i>(209)</span>
                                          </td>
                                      </tr>
                                </tbody>
                            </table>
                            </div>
      </div>
      <div className="title">
          <i className="dropdown icon"></i>
          <i className="folder icon" ></i>工商局
      </div>
      <div className="content">工商局文件
      </div>
      <div className="title">
          <i className="dropdown icon"></i>
          <i className="folder icon" ></i>教育局
      </div>
      <div className="content">
         教育局文件
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