import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import $ from 'jquery'
import Sidebar from '../Common/shareFilesSidebar'
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
                <div className="title"><i className="share alternate icon"></i>正在分享的文件（10）</div>
                <div className="ui mini icon input">
                  <input type="text" placeholder="文件名..."/>
                  <i className="search icon"></i>
                </div>
            </h3>
            <div className="ui segment">
                <table className="ui single line table">
                  <tbody>
                    <tr>
                      <td><div className="file_icon xlsx">xlsx</div><span className="fdd_file_name">表格模板.xlsx</span></td>
                      <td>#323</td>
                      <td>45.45 KB</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="share alternate icon link shareop green" data-variation="mini"></i>
                        <i className="external share icon link operate" data-content="查看" data-variation="mini"></i>
                        <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini" onClick={e=>this.deleteFile()}></i>  
                        <div>
                            <div className="ui custom popup top center transition hidden inline switchShare">
                              <div className="ui toggle checkbox">
                                <label>开启分享</label>
                                <input type="checkbox" tableIndex="0" className="hidden"/>                    
                              </div>
                            </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><div className="file_icon txt">txt</div><span className="fdd_file_name">新建文本文档.txt</span></td>
                      <td>#323323</td>
                      <td>45.45 M</td>
                      <td>今天12:39</td>
                      <td>
                        <i className="share alternate icon link operate green" data-content="分享" data-variation="mini"></i>
                        <i className="external share icon link operate" data-content="查看" data-variation="mini"></i>
                        <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td><div className="file_icon">svg</div><span className="fdd_file_name">xxxxxxxx.svg</span></td>
                      <td>#323</td>
                      <td>45.45 B</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="share alternate icon link operate green" data-content="分享" data-variation="mini"></i>
                        <i className="external share icon link operate" data-content="查看" data-variation="mini"></i>
                        <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td><div className="file_icon doc">doc</div><span className="fdd_file_name">谁的青春不迷茫.word</span></td>
                      <td>#323</td>
                      <td>45.45 KB</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="share alternate icon link operate green" data-content="分享" data-variation="mini"></i>
                        <i className="external share icon link operate" data-content="查看" data-variation="mini"></i>
                        <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                      </td>
                    </tr>
                    <tr>
                      <td><div className="file_icon doc">doc</div><span className="fdd_file_name">钢铁是怎样炼成的.word</span></td>
                      <td>#323</td>
                      <td>45.45 KB</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="share alternate icon link operate green" data-content="分享" data-variation="mini"></i>
                        <i className="external share icon link operate" data-content="查看" data-variation="mini"></i>
                        <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
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
      </div>
    )
  }
}