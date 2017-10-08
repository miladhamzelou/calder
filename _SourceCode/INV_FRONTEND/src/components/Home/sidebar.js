import React, {Component } from 'react'

export default class Sidebar extends Component{
  render(){
    return (
      <div className="four wide column navigation">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">系统设置</a>
                      <div className="extra">设置人员权限角色部门 </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <a href="" className="item active">人员管理 </a>
              <a href="" className="item">角色管理 </a>
              <a href="" className="item">菜单管理 </a>
              <a href="" className="item ">部门管理 </a>
          </div>
      </div>
    )
  }
}