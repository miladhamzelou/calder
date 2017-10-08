import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import Sidebar from './sidebar'
import ConfirmModal from '../Common/confirmModal'
import personIng from '../../assets/images/elyse.png'
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
export default class Mail extends Component {
  constructor(props){ 
    super(props)
    this.addModal = this.addModal.bind(this)  
    this.getFormData = this.getFormData.bind(this)
    this.submitData = this.submitData.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state={
      isShow:false
    }
  }

  static propTypes = {
  }


  componentDidMount() {
    $('.list .master.checkbox')
      .checkbox({
        onChecked: function() {
          $(this).closest('.checkbox').siblings('.list').find('.checkbox').checkbox('check')
        },
        onUnchecked: function() {
          $(this).closest('.checkbox').siblings('.list').find('.checkbox').checkbox('uncheck')
        }
      })
  }

  addModal(){
    this.setState({
      isShow:true
    })
  }

  //提交增加或修改的数据功能
  submitData(){
    this.closeModal()
  }

  //关闭增加或修改的弹出框
  closeModal(){
    this.setState({
      isShow:false
    })
  }

  getFormData(data) {
    this.setState({ 
      activeNote: '1'
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
              <ConfirmModal
                onClose={this.closeModal}
                onSave={this.submitData}
                getFormData={this.getFormData}
                title='收件人'
                isOpened={this.state.isShow}
              >
            
                <div className="ui left icon input"> 
                  <i className="search icon"></i>                  
                  <input type="text" placeholder="搜索..."/>
                </div> 

                <div className="ui celled relaxed list">
                  <div className="item">
                    <div className="ui master checkbox">
                      <input type="checkbox" name="all" />
                      <label>全部</label>
                    </div>
                    <div className="list">
                      <div className="item">
                        <div className="ui child checkbox">
                          <input type="checkbox" name="apple"/>
                          <label></label> 
                        </div> 
                        <img className="ui mini circular image middle aligned" src={personIng} />
                        <span>黄颜婷</span>
                        
                      </div>
                      <div className="item">
                        <div className="ui child checkbox">
                          <input type="checkbox" name="apple"/>
                          <label></label> 
                        </div> 
                        <img className="ui mini circular image middle aligned" src={personIng} />
                        <span>张凡</span>
                      </div>

                      <div className="item">
                        <div className="ui child checkbox">
                          <input type="checkbox" name="apple"/>
                          <label></label> 
                        </div> 
                        <img className="ui mini circular image middle aligned" src={personIng} />
                        <span>刘华</span>
                      </div>

                      <div className="item">
                        <div className="ui child checkbox">
                          <input type="checkbox" name="apple"/>
                          <label></label> 
                        </div> 
                        <img className="ui mini circular image middle aligned" src={personIng} />
                        <span>黄婷婷</span>
                      </div>
                    </div>
                  </div>
                </div>
              
              </ConfirmModal>
              <form className="ui form">
                  <div className="field required">
                    <label>收件人</label>
                    <span style={{paddingLeft:'20px',color:'#2185d0',cursor:'pointer'}} onClick={this.addModal}><i className="icon add circle"></i>添加</span>
                    <input type="text" placeholder="收件人" />                            
                  </div>

                  <div className="field">
                    <label>主题</label>
                    <input type="text" placeholder="主题" />
                  </div>

                  <div className="field required">
                    <label>内容</label>
                    <textarea type="text" rows="15" placeholder="内容"></textarea>
                  </div>    
              </form>
              <div className="" style={{float:'right'}}>
                <button className="ui basic button blue">发送</button>
              </div>
            </div>
          </div>
      </div>      
    )
  }
}