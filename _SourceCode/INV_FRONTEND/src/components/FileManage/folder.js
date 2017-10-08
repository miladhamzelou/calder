import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Checkbox,Dropdown} from 'react-semantify'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
import WarningModal from '../Common/warningModal'
import ConfirmModal from '../Common/confirmModal'
import Input from '../Common/form/input'
import Sidebar from '../Common/shareFilesSidebar'
import $ from 'jquery'
global.$ = global.jQuery = $

const mapStateToProps = state =>{
  return { 
    departmentList: state.departmentList.toJS()
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class Folder extends Component {
  constructor(props){
    super(props)
    this.state = {
      isDeleteShow:false,
      isShow:false
    }
    this.submitDeleteFile = this.submitDeleteFile.bind(this)
    this.colseDeleteModal = this.colseDeleteModal.bind(this)
    this.deleteFile = this.deleteFile.bind(this)
    this.editFile = this.editFile.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    departmentList: PropTypes.object.isRequired
  }

  componentDidMount() {
    //设置popup
    $('.operate').popup({
      position : 'top center',
      inline: true
    })   
    $('.shareop').popup({
      popup : $('.custom.popup'),
      on    : 'click'
    })
    $('.haha').dropdown({
      allowCategorySelection: true
    })
    $('.fdd_switch').checkbox({
      onChecked: function() {
        $('.fdd_switch_content_title').html('<div>选择分享目录，默认至公共空间的根目录。</div>')
        $('.fdd_switch_content_select').show()
        
      },
      onUnchecked: function() {
        $('.fdd_switch_content_title').html('<div>当前未开启分享，开启将分享至公共空间。</div>')
        $('.fdd_switch_content_select').hide()
      }
    })

  }
  colseDeleteModal=() => {
    this.setState({
      isDeleteShow:false
    })
  }
  submitDeleteFile() {
    this.colseDeleteModal()
  }
  editFile(){
    this.setState({isShow:true})
  }
  deleteFile(){
    this.setState({
      isDeleteShow:true
    })
  }
  onCloseModal(){
    this.setState({isShow:false})
  }
  onSave(){
    this.setState({isShow:true})
  }
  getFormData(data) {
  }
  render() {
    return (
      <div className="ui grid right_content">
        <Sidebar />
          <div className="sixteen wide column right_content">
          <div className="">
            <h3 className="ui dividing header ">
                <div className="title">默认文件夹（10）</div>
                <div className="ui mini icon input">
                  <input type="text" placeholder="文件名..."/>
                  <i className="search icon"></i>
                </div>
                <input className="ui small basic button right floated file" type="file" data-value="上传文件"/>
                </h3>
            <div className="ui segment">
                <table className="ui single line table">
                  <thead>
                  <tr>
                      <th>
                          <Checkbox className="examplecheckbox" init={true}>
                            <input type="checkbox" />
                              <label></label>
                          </Checkbox>
                      </th>
                      <th>文件名</th>
                      <th>文件ID</th>
                      <th>大小</th>
                      <th>更新时间</th>
                      <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Checkbox className="examplecheckbox" init={true}>
                            <input type="checkbox" />
                              <label></label>
                        </Checkbox>
                      </td>
                      <td><div className="file_icon doc">doc</div><span className="fdd_file_name">招商系统需求文档.word</span></td>
                      <td>#323</td>
                      <td>45.45 KB</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="edit icon link operate " data-content="编辑" data-variation="mini" onClick={e=>this.editFile()}></i>
                        <i className="share alternate icon link shareop green" data-variation="mini"></i>
                        <i className="external share icon link operate" data-content="查看" data-variation="mini"></i>
                        <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini" onClick={e=>this.deleteFile()}></i>  
                        <div>
                            <div className="ui custom popup right center transition hidden inline switchShare">
                              <div>
                                  <h3 className="ui header">分享文件
                                    <div className="ui toggle checkbox fdd_switch">
                                      <input type="checkbox" tableIndex="0" className="hidden"/>                    
                                    </div>
                                  </h3>
                                
                              </div>
                              <div className="fdd_switch_content">
                                <div className="fdd_switch_content_title">当前未开启分享，开启将分享至公共空间。</div>
                                <div style ={{clear:'both'}} className="fdd_switch_content_select">
                                <Dropdown className="ui dropdown button basic haha">
                                <span className="text">公共空间根目录</span>
                                <i className="dropdown icon"></i>
                                <div className="menu">
                                  <div className="item">
                                    <i className="dropdown icon"></i>
                                    <span className="item">报表资料</span>
                                    <div className="menu">
                                      <div className="item">
                                        <i className="dropdown icon"></i>
                                        <span className="item">统计情况</span>
                                        <div className="menu">
                                          <div className="item">国外</div>
                                          <div className="item">国内</div>
                                          <div className="item">海外</div>
                                        </div>
                                      </div>
                                      <div className="item">2017年报表资料</div>
                                      <div className="item">最新政策资料</div>
                                    </div>
                                  </div>
                                </div>

                              </Dropdown>
                            </div>
                              </div>
                            </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Checkbox className="examplecheckbox" init={true}>
                            <input type="checkbox" />
                              <label></label>
                        </Checkbox>
                      </td>
                      <td><div className="file_icon txt">txt</div><span className="fdd_file_name">新建文本文档.txt</span></td>
                      <td>#323323</td>
                      <td>45.45 M</td>
                      <td>今天12:39</td>
                      <td>
                        <i className="edit icon link operate" data-content="编辑" data-variation="mini"></i>
                        <i className="share alternate icon link operate" data-content="分享" data-variation="mini"></i>
                        <i className="external share icon link operate" data-content="查看" data-variation="mini"></i>
                        <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i> 
                      </td>
                    </tr>
                                        <tr>
                      <td>
                        <Checkbox className="examplecheckbox" init={true}>
                            <input type="checkbox" />
                              <label></label>
                        </Checkbox>
                      </td>
                      <td><div className="file_icon">svg</div><span className="fdd_file_name">xxxxxxxx.svg</span></td>
                      <td>#323</td>
                      <td>45.45 B</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="edit icon link operate" data-content="编辑" data-variation="mini"></i>
                        <i className="share alternate icon link operate" data-content="分享" data-variation="mini"></i>
                        <i className="external share icon link operate" data-content="查看" data-variation="mini"></i>
                        <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                      </td>
                    </tr>
                                        <tr>
                      <td>
                        <Checkbox className="examplecheckbox" init={true}>
                            <input type="checkbox" />
                              <label></label>
                        </Checkbox>
                      </td>
                      <td><div className="file_icon doc">doc</div><span className="fdd_file_name">谁的青春不迷茫.word</span></td>
                      <td>#323</td>
                      <td>45.45 KB</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="edit icon link operate" data-content="编辑" data-variation="mini"></i>
                        <i className="share alternate icon link operate" data-content="分享" data-variation="mini"></i>
                        <i className="external share icon link operate" data-content="查看" data-variation="mini"></i>
                        <i className="cloud download icon link operate" data-content="下载" data-variation="mini"></i>
                        <i className="minus red square icon link operate" data-content="删除" data-variation="mini"></i>  
                      </td>
                    </tr>
                                        <tr>
                      <td>
                        <Checkbox className="examplecheckbox" init={true}>
                            <input type="checkbox" />
                              <label></label>
                        </Checkbox>
                      </td>
                      <td><div className="file_icon doc">doc</div><span className="fdd_file_name">钢铁是怎样炼成的.word</span></td>
                      <td>#323</td>
                      <td>45.45 KB</td>
                      <td>今天11:39</td>
                      <td>
                        <i className="edit icon link operate" data-content="编辑" data-variation="mini"></i>
                        <i className="share alternate icon link operate" data-content="分享" data-variation="mini"></i>
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
      <ConfirmModal
           onClose={this.onCloseModal}
           onSave={this.onSave}
           getFormData={this.getFormData}
           isOpened={this.state.isShow}
           title="修改文件名名称"
           id="filePanel"
           ref="form"
        >
          <Input 
            name="departName"
            label="文件名称"
            placeholder="文件名称"
            fieldClassName="field required"
            value="招商系统需求文档"
            validations={{
              minLength: 1,
              maxLength: 50
            }}
            validationErrors={{
              minLength: '不能为空',
              maxLength: '不能超过50字'
            }}
            required/>
        </ConfirmModal>
        <WarningModal onClose={this.colseDeleteModal}
                      onSave={this.submitDeleteFile}
                      isOpened={this.state.isDeleteShow}
          title='确认删除该文件'
          content='您确认要删除该文件?删除后不可恢复,且删除的文件将同步从共享文件中删除'
        />
      </div>
    )
  }
}