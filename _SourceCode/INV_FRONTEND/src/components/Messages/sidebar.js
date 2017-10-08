import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">消息中心</a>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item active" activeClassName="active" to="/Messages/index">
                全部消息
              </Link>
              <Link className="item" activeClassName="active" to="/Messages/index">
                未读消息
              </Link>
              <Link className="item" activeClassName="active" to="/Messages/index">
                已读消息
              </Link>
          </div>
      </div>
    )
  }
}