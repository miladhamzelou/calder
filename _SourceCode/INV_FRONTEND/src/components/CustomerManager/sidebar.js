import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">客户管理</a>
                      <div className="extra"> </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item" activeClassName="active" to="/customerManager">
                潜在客户(4)
              </Link>
              <Link className="item" activeClassName="active" to="/a">
                签约客户(200)
              </Link>
              <Link className="item" activeClassName="active" to="/a">
                二次招商(20)
              </Link>
          </div>
      </div>
    )
  }
}