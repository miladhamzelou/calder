import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import {Dropdown} from 'react-semantify'
import WarningModal from '../Common/warningModal'
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
    this.addRow = this.addRow.bind(this)
    this.addCol = this.addCol.bind(this)
    this.colHandlerKeyUp = this.colHandlerKeyUp.bind(this)
    this.rowHandlerKeyUp = this.rowHandlerKeyUp.bind(this)
    this.onColMouseEnterHandler = this.onColMouseEnterHandler.bind(this)
    this.onColMouseLeaveHandler = this.onColMouseLeaveHandler.bind(this)
    this.onRowMouseEnterHandler = this.onRowMouseEnterHandler.bind(this)
    this.onRowMouseLeaveHandler = this.onRowMouseLeaveHandler.bind(this)
    
    this.state={
      cols:[],
      rows: [],
      isShow: true
    }
  }

  static propTypes = {
  }

  static fetchData(params){
    return [Actions.getArticleList(),Actions.getTagList()]
  }

  componentDidMount() {
    $('.temp').hide()
    $('.ui.dropdown.office').dropdown({
      onChange: function(value, text, $selectedItem) {
        if(value=='1'){
          $('.temp').show()
        }else if (value=='2'){
          $('.temp').hide()
        }
      }
    })
    $('.operate').popup({
      position : 'top center',
      inline: true
    })
    $('.plus').popup({
      position : 'top center',
      inline: true
    })    
    
  }
  addRow(){
    let row = {
      id: this.mathRand(),
      name:'',
      isHover: false
    }
    this.setState({
      rows: this.state.rows.concat([row])
    })
  }

  addCol(){
    let col = {
      id: this.mathRand(),
      name:'',
      isHover: false
    }
    this.setState({
      cols: this.state.cols.concat([col]),
      isShow: false
    })
  }
  onColMouseEnterHandler(temp) {
    this.setState({
      cols: this.state.cols.map((col) =>{
        if(col.id==temp.id){
          col.isHover=true
        }
        return col
      })
    })
  }

  onColMouseLeaveHandler(temp) {
    this.setState({
      cols: this.state.cols.map((col) =>{
        if(col.id==temp.id){
          col.isHover=false
        }
        return col
      })
    })
  }
  onRowMouseEnterHandler(temp) {
    this.setState({
      rows: this.state.rows.map((row) =>{
        if(row.id==temp.id){
          row.isHover=true
        }
        return row
      })
    })
  }

  onRowMouseLeaveHandler(temp) {
    this.setState({
      rows: this.state.rows.map((row) =>{
        if(row.id==temp.id){
          row.isHover=false
        }
        return row
      })
    })
  }
  colHandlerKeyUp(event,temp) {
    if(event.keyCode === 13){
      let value = event.target.value

      if(!value) return false
      this.setState({
        cols: this.state.cols.map((col) =>{
          if(col.id==temp.id){
            col.name=value
          }
          return col
        }),
        isShow: false
      })

    }
  }
  rowHandlerKeyUp(event,temp) {
    if(event.keyCode === 13){
      let value = event.target.value
      if(!value) return false
      this.setState({
        rows: this.state.rows.map((row) =>{
          if(row.id==temp.id){
            row.name=value
          }
          return row
        }),
        isShow: false
      })

    }
  }
  onColName(e) {
    this.setState({
      colName:e.target.value
    })
  }
  deleteRow(row){
    var index = -1
    var clength = this.state.rows.length
    for( var i = 0; i < clength; i++ ) {
      if( this.state.rows[i].id === row.id ) {
        index = i
        break
      }
    }
    this.state.rows.splice( index, 1 )
    this.setState( {rows: this.state.rows} )
    if(this.state.rows.length===0){
      this.setState({isShow:true})
    }
  }
  deleteCol(col){  
    var index = -1
    var clength = this.state.cols.length
    for( var i = 0; i < clength; i++ ) {
      if( this.state.cols[i].id === col.id ) {
        index = i
        break
      }
    }
    this.state.cols.splice( index, 1 )
    this.setState( {cols: this.state.cols} )
    if(this.state.cols.length===0){
      this.setState({isShow:true})
    }
  }
  mathRand() { 
    var Num=''
    for(var i=0;i<6;i++) { 
      Num+=Math.floor(Math.random()*10)
    } 
    return Num
  } 

  render() {
    return (
      <div className="ui grid right_content">
          <div className="sixteen wide column">
          <div className="stretched column content">
            <h3 className="ui dividing header ">
                <Link className="title" to="/office/unDefaultOffice"><i className="reply alternate icon"></i>返回列表</Link>
                <button className="ui small basic button right floated blue"><i
                  className="icon send"></i>保存并发送
                </button>
                <button className="ui small basic button right floated blue"><i
                  className="icon plus"></i>暂存
                </button>
            </h3>
            <div className="exactSearchList">
              <div className="ui form">
                <div className="fields five">
                  <div className="field required">
                    <label>是否选用以前模板</label>
                    <Dropdown className="item ui selection dropdown mini right office" init={true}>
                        <input name="states" type="hidden"/>
                          <i className="dropdown icon"></i>
                          <div className="default text">请选择</div>
                          <div className="menu">
                            <a className="item" data-value="1">是</a>
                            <a className="item" data-value="2">否</a>
                          </div>
                    </Dropdown>
                  </div>
                  <div className="field required temp">
                    <label>选择模板</label>
                    <Dropdown className="item ui selection dropdown mini right " init={true}>
                        <input name="states" type="hidden"/>
                          <i className="dropdown icon"></i>
                          <div className="default text">请选择</div>
                          <div className="menu">
                            <a className="item" data-value="1">年终统计表</a>
                            <a className="item" data-value="2">报销统计表</a>
                          </div>
                    </Dropdown>
                  </div>
                  <div className="field required">
                    <label >名称</label>
                    <input type="text" placeholder="名称" />
                  </div>
                  <div className="field required">
                    <label >开始时间</label>
                    <input type="date" placeholder="开始时间" />
                  </div>
                  <div className="field required">
                    <label >结束时间</label>
                    <input type="date" placeholder="结束时间" />
                  </div>
                </div>
                <div className="fields five">
                  <div className="field required">
                    <label>协同办公人员</label>
                    <Dropdown className="item ui multiple selection dropdown mini right roleDown" init={true} style={{height:'auto'}}>
                      <input name="states" type="hidden"/>
                        <i className="dropdown icon"></i>
                        <div className="default text">请选择</div>
                          <div className="menu">
                            <a className="item" data-value="1">王文</a>
                            <a className="item" data-value="2">张苏</a>
                            <a className="item" data-value="3">李俊</a>
                            <a className="item" data-value="4">张伟</a>
                            <a className="item" data-value="5">王燕</a>
                            <a className="item" data-value="6">李昊</a>
                          </div>
                    </Dropdown>
                  </div>
                  <div className="field">
                    <label >备注</label>
                    <textarea type="date" rows="1" placeholder="备注" ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui segment">
              <div className="">
                <table className="ui compact celled definition table">
                  <thead>
                    <tr>
                      <th style={{width:100}}>
                      </th>
                      {this.state.cols.map((col,i)=>
                          i+1==this.state.cols.length && col.name==''?<th data-id={col.id} key={col.id}><div className="ui input"><input onKeyUp={e=> this.colHandlerKeyUp(e, col)} type="text" placeholder="名称..." /></div></th>:<th data-id={col.id} key={col.id} onMouseEnter={e =>this.onColMouseEnterHandler(col)} onMouseLeave={e=>this.onColMouseLeaveHandler(col)}>{col.name}<i className={col.isHover?'minus red square icon link operate':'ui hide'} data-content="删除" data-variation="mini" onClick={e=>this.deleteCol(col)}></i> </th>
                      )} 
                      <th style={{width:10}}>
                        <a style={{cursor: 'pointer'}} onClick={this.addCol}><i data-content="新增列"  data-variation="mini" className="icon plus blue" ></i></a>
                      </th>
                      <th className={this.state.isShow? 'ui':'ui hide'} ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rows.map((row,i)=>
                      i+1==this.state.rows.length && row.name==''?
                      <tr data-id={row.id} key={row.id}>
                        <td data-id={row.id} key={row.id}><div className="ui input"><input type="text" onKeyUp={e=> this.rowHandlerKeyUp(e, row)} placeholder="名称..." /></div></td>
                        <td></td>
                        {this.state.cols.map((col,i)=>
                          <td key={col.id}></td>
                        )}
                        <td className={this.state.isShow? 'ui':'ui hide'}></td>
                      </tr>
                      :
                      <tr data-id={row.id} key={row.id}>
                        <td onMouseEnter={e =>this.onRowMouseEnterHandler(row)} onMouseLeave={e=>this.onRowMouseLeaveHandler(row)}>{row.name}<i className={row.isHover?'minus red square icon link operate':'ui hide'}  data-content="删除" data-variation="mini" onClick={e=>this.deleteRow(row)}></i></td>
                        <td></td>
                        {this.state.cols.map((col,i)=>
                          <td key={col.id}></td>
                        )}
                        <td className={this.state.isShow? 'ui':'ui hide'}></td>
                      </tr>
                    )}
                    <tr>
                      <td><a style={{cursor: 'pointer'}} onClick={this.addRow}><i data-content="新增行"  data-variation="mini" className="icon plus blue"></i></a></td>
                      <td></td>
                      {this.state.cols.map((col,i)=>
                        <td  key={col.id}></td>
                      )}
                      <td className={this.state.isShow? 'ui':'ui hide'}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <WarningModal 
          id='deleteModal'
          title='删除'
          content='确认要删除?'
        />
      </div>
    )
  }
}