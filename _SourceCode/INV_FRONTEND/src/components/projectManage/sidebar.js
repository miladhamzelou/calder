import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">项目管理</a>
                      <div className="extra">将项目进行归类，便于管理 </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item active" activeClassName="active" to="/projectManage/allProject">
                所有项目(4)
              </Link>
              <Link className="item" activeClassName="active" to="/projectManage/allProject">
                金融类(2)
              </Link>
              <Link className="item" activeClassName="active" to="/projectManage/allProject">
                信息化类(1)
              </Link>
              <Link className="item" activeClassName="active" to="/projectManage/allProject">
                建筑类(1)
              </Link>
              <Link className="item" activeClassName="active" to="/projectManage/allProject">
                其他
              </Link>
          </div>
      </div>
    )
  }
}