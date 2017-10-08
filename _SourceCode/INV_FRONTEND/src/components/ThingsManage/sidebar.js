import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">事务管理</a>
                      <div className="extra">预报、会议、出差等管理 </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item" activeClassName="active" to="/ThingsManage/forecastManage">
                预报管理
              </Link>
              <Link className="item" activeClassName="active" to="/ThingsManage/meetManage">
                会议管理
              </Link>
              <Link className="item" activeClassName="active" to="/ThingsManage/businessManage">
                出差管理
              </Link>       
          </div>
      </div>
    )
  }
}