import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">账号管理</a>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item" activeClassName="active" to="/mine/basicData">
                基本资料
              </Link>
              <Link className="item" activeClassName="active" to="/mine/securitySetting">
                安全设置
              </Link>
          </div>
      </div>
    )
  }
}