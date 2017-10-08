import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">协同办公</a>
                      <div className="extra">协同完成文档的各种操作 </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item" activeClassName="active" to="/office/unDefaultOffice">
                自定义
              </Link>
              <Link className="item" activeClassName="active" to="/office/defaultOffice">
                非自定义
              </Link>
          </div>
      </div>
    )
  }
}