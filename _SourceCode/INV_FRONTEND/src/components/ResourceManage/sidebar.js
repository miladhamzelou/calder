import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">资源管理</a>
                      <div className="extra">将项目进行归类，便于管理 </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item" activeClassName="active" to="/ResourceManage/area">
                土地资源管理
              </Link>
              <Link className="item" activeClassName="active" to="/ResourceManage/resourceFile">
                厂房资源管理
              </Link>       
          </div>
      </div>
    )
  }
}