import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">系统设置</a>
                      <div className="extra">设置人员权限角色部门 </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item" activeClassName="active" to="/setting/members">
                人员管理
              </Link>
              <Link className="item" activeClassName="active" to="/setting/role">
                角色管理
              </Link>
              <Link className="item" activeClassName="active" to="/setting/menu">
                菜单管理
              </Link>
              <Link className="item" activeClassName="active" to="/setting/department">
                部门管理
              </Link>
          </div>
      </div>
    )
  }
}