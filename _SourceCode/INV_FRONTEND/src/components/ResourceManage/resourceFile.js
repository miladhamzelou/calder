import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { bindActionCreators } from 'redux'
import {Dropdown} from 'react-semantify'
import $ from 'jquery'
import {Pager} from  '../Setting/member/rc-pager/src/rc-pager'
// import {Treemap} from 'react-d3'
import Sidebar from './sidebar'

const mapStateToProps = state =>{
  return {  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class ResourceFile extends Component {
  constructor(props){
    super(props)
    this.state={
      config:[{label: '1栋201', value: 1364}, {label: '1栋202', value: 1296}, {label: '1栋203', value: 318}, {label: '1栋204', value: 251}, {label: '1栋205', value: 203}]
    }
  }

  static propTypes = {
  }

  componentDidMount() {
    $('.menu .item').tab()
    $('.ui.details').popup({
      hoverable:true
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
            <div className="ui form" style={{width:'87%',float:'left',height:50}}>
              <div className="inline fields">                  
                <div className="field">
                  <label style={{height:38,lineHeight:'38px'}}>地区</label>
                  <Dropdown className="item ui selection dropdown mini right" init={true}>
                      <input name="states" type="hidden"/>
                        <i className="dropdown icon"></i>
                        <div className="default text">地区</div>
                        <div className="menu">
                          <a className="item" data-value="1">吴中区</a>
                          <a className="item" data-value="2">高新区</a>
                          <a className="item" data-value="3">虎丘区</a>
                          <a className="item" data-value="4">其他</a>
                        </div>
                  </Dropdown>
                </div>
                <div className="field">
                  <label style={{height:38,lineHeight:'38px'}}>大厦</label>
                  <Dropdown className="item ui selection dropdown mini right" init={true}>
                      <input name="states" type="hidden"/>
                        <i className="dropdown icon"></i>
                        <div className="default text">大厦</div>
                        <div className="menu">
                          <a className="item" data-value="1">欧瑞大厦</a>
                          <a className="item" data-value="2">美嘉大厦</a>
                          <a className="item" data-value="3">汉嘉大厦</a>
                          <a className="item" data-value="4">其他</a>
                        </div>
                  </Dropdown>
                </div>
                <div className="field">
                  <label style={{height:38,lineHeight:'38px'}}>楼层</label>
                  <Dropdown className="item ui selection dropdown mini right" init={true}>
                      <input name="states" type="hidden"/>
                        <i className="dropdown icon"></i>
                        <div className="default text">楼层</div>
                        <div className="menu">
                          <a className="item" data-value="1">1楼</a>
                          <a className="item" data-value="2">2楼</a>
                          <a className="item" data-value="3">3楼</a>
                          <a className="item" data-value="4">其他</a>
                        </div>
                  </Dropdown>
                </div>
              </div>
            </div>    
            <div className="ui secondary menu e right">
              <a className="active item" data-tab="first">表格</a>
              <a className="item" data-tab="second">平面图</a>
            </div>
            <div className="ui active tab segment" data-tab="first">
              <h4 className="ui center aligned header">2016年3月苏州工业园区1栋楼层使用情况</h4>
              <table className="ui small celled striped table center">
                <thead>
                  <tr>
                    <th className="center "></th>
                    <th className="center ">地点</th>
                    <th className="center ">面积(平方米)</th>
                    <th className="center ">价格(万元)</th>
                    <th className="center ">租借公司</th>
                    <th className="center ">负责人</th> 
                    <th className="center ">租借时间</th>
                    <th className="center ">到期时间</th>
                    <th className="center ">使用情况</th>
                  </tr>                   
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>201室</td>
                    <td>80</td>
                    <td>30</td>
                    <td>美嘉信息科技有限公司</td>
                    <td>张军</td> 
                    <td>2016-01-21</td>  
                    <td>2017-07-21</td> 
                    <td>
                      <div className="ui tag label red mini">租借中</div>
                    </td> 
                  </tr> 
                  <tr>
                    <td>2</td>
                    <td>202室</td>
                    <td>100</td>
                    <td>40</td>
                    <td>云购信息科技有限公司</td>
                    <td>张军</td>
                    
                    <td>2016-01-21</td>  
                    <td>2017-07-21</td>
                    <td>
                      <div className="ui tag label red mini">租借中</div>
                    </td>  
                  </tr> 
                  <tr>
                    <td>3</td>
                    <td>203室</td>
                    <td>40</td>
                    <td>20</td>
                    <td></td>
                    <td>张军</td>
                    
                    <td></td>  
                    <td></td>
                    <td>
                      <div className="ui tag label green mini">可出租</div>
                    </td>  
                  </tr> 
                  <tr>
                    <td>4</td>
                    <td>204室</td>
                    <td>40</td>
                    <td>20</td>
                    <td></td>
                    <td>张军</td>
                   
                    <td></td>  
                    <td></td>
                    <td>
                      <div className="ui tag label green mini">可出租</div>
                    </td>  
                  </tr>  
                </tbody>
              </table>     
              <div style ={{height:38}}>
                <Pager pages='4' current={this.state.current} onChange={this.pageChange} pageSize={5}/>
              </div>
            </div>
            <div className="ui tab segment" data-tab="second">
              <div style={{width:'100%'}}>
                <h4 className="ui center aligned header">2016年3月苏州工业园区1栋楼层使用情况</h4>
              </div>
              <div style={{width:'100%',height:50,textAlign:'center',padding:'10px 0px'}}>
                <div className="">
                  <div style={{width:40,height:30,padding:'5px',background:'#91c7ae',float:'left'}}></div>
                  <div style={{width:70,height:30,lineHeight:'30px',float:'left'}}>可租</div>
                </div> 
                <div className="">
                  <div style={{width:40,height:30,padding:'5px',background:'#61a0a8',float:'left'}}></div>
                  <div style={{width:70,height:30,lineHeight:'30px',float:'left'}}>在交谈</div>
                </div> 
                <div className="">
                  <div style={{width:40,height:30,padding:'5px',background:'#c23531',float:'left'}}></div>
                  <div style={{width:70,height:30,lineHeight:'30px',float:'left'}}>已租</div>
                </div> 
              </div>
              <div className="resourceManage ui equal width center aligned padded grid">
                <div className="row" style={{height:120}}>
                  <div className="column myBlue2" style={{cursor: 'pointer',border:'1px solid #fff',lineHeight: '100px'}}>
                    <div className="ui details">201室</div>
                    <div className="ui flowing popup transition hidden" style={{width:220}}>
                      <div className="ui divided center aligned">
                        <div className="card">
                          <div className="content" style={{textAlign:'left'}}>
                            <div className="header"> 
                              <div className="ui tag label blue mini">在交谈</div>    
                            </div>
                            <div className="meta">
                              <i className="icon block layout"></i>40平方米
                            </div>
                            <div className="description">
                              <i className="icon users"></i>美嘉信息科技有限公司<br />
                              <i className="icon user"></i>张军<br />
                              <i className="icon tag"></i>软件公司<br />
                              <i className="icon calendar"></i>2016-02-12至2017-05-12    
                            </div>
                          </div>
                        </div>
                      </div>  
                    </div>
                  </div>
                  <div className="column myRed" style={{cursor: 'pointer',border:'1px solid #fff',lineHeight: '100px'}}>
                    <div className="ui details">202室</div>
                    <div className="ui flowing popup transition hidden" style={{width:220}}>
                      <div className="ui divided center aligned">
                        <div className="card">
                          <div className="content" style={{textAlign:'left'}}>
                            <div className="header"> 
                              <div className="ui tag label red mini">已租</div>    
                            </div>
                            <div className="meta">
                              <i className="icon block layout"></i>40平方米
                            </div>
                            <div className="description">
                              <i className="icon users"></i>优购信息科技有限公司<br />
                              <i className="icon user"></i>王丹<br />
                              <i className="icon tag"></i>软件公司<br />
                              <i className="icon calendar"></i>2016-02-12至2017-05-12    
                            </div>
                          </div>
                        </div>
                      </div>  
                    </div>
                  </div>
                  <div className="column myBlue1" style={{cursor: 'pointer',border:'1px solid #fff',lineHeight: '100px'}}>
                    <div className="ui details">203室</div>
                    <div className="ui flowing popup transition hidden" style={{width:220}}>
                      <div className="ui divided center aligned">
                        <div className="card">
                          <div className="content" style={{textAlign:'left'}}>
                            <div className="header"> 
                              <div className="ui tag label green mini">可租</div>    
                            </div>
                            <div className="meta">
                              <i className="icon block layout"></i>40平方米
                            </div>
                            <div className="description">
                              <i className="icon users"></i>无<br />
                              <i className="icon user"></i>无<br />
                              <i className="icon tag"></i>无<br />
                              <i className="icon calendar"></i>无    
                            </div>
                          </div>
                        
                        </div>
                      </div>  
                    </div>
                  </div>
                  <div className="column myRed" style={{border:'1px solid #fff',lineHeight: '100px'}}>
                    <div>204室</div>
                  </div>
                  <div className="column myBlue1" style={{border:'1px solid #fff',lineHeight: '100px'}}>
                    <div>205室</div>
                  </div> 
                </div>
                <div className="row" style={{height:150}}>
                  <div className="column myBlue1" style={{border:'1px solid #fff',lineHeight: '120px'}}>
                    <div>206室</div>
                  </div>
                  <div className="column myBlue1" style={{border:'1px solid #fff',lineHeight: '120px'}}>
                    <div>207室</div>
                  </div>
                  <div className="column myBlue2" style={{border:'1px solid #fff',lineHeight: '120px'}}>
                    <div>208室</div>
                  </div>  
                </div>
                <div className="row" style={{height:130}}>
                  <div className="column myRed" style={{border:'1px solid #fff',lineHeight: '110px'}}>
                    <div>209室</div>
                  </div>
                  <div className="column myBlue1" style={{border:'1px solid #fff',lineHeight: '110px'}}>
                    <div>210室</div>
                  </div>
                  <div className="column myBlue1" style={{border:'1px solid #fff',lineHeight: '110px'}}>
                    <div>211室</div>
                  </div>
                  <div className="column myRed" style={{border:'1px solid #fff',lineHeight: '110px'}}>
                    <div>212室</div>
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