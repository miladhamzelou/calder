import React, {Component } from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">沟通管理</a>
                      <div className="extra">政策报表通讯录知识的查看 </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item" activeClassName="active" to="/messageManager/mail">
                站内信
              </Link>
              <Link className="item" activeClassName="active" to="/messageManager/email">
                邮件
              </Link>
              <Link className="item" activeClassName="active" to="/messageManager/questionnaire">
                调查问卷
              </Link>
          </div>
      </div>
    )
  }
}