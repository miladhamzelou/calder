import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">公共空间</a>
                      <div className="extra">政策报表通讯录知识的查看 </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item" activeClassName="active" to="/publicSpace/knowledgeBase">
                知识库
              </Link>
              <Link className="item" activeClassName="active" to="/publicSpace/addressList">
                通讯录
              </Link>
          </div>
      </div>
    )
  }
}