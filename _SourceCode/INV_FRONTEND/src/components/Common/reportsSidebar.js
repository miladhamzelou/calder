import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">报表统计</a>
                      <div className="extra">统计分析和总结 </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item" activeClassName="active" to="/reports">
                招商完成情况表
              </Link>
              <Link className="item" activeClassName="active" to="/reports/keyProject">
                重点项目跟踪表
              </Link>
              <Link className="item" activeClassName="active" to="/reports/normalProject">
                跟进项目情况
              </Link>
              <Link className="item" activeClassName="active" to="/reports/charts">
                总图表展示
              </Link>
          </div>
      </div>
    )
  }
}