import React, {Component } from 'react'
import { Link } from 'react-router'

export default class Sidebar extends Component{
  render(){
    return (
      <div className="twelve wide column navigations">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">文件管理</a>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
              <Link className="item  left" activeClassName="active" to="/file/sharedFiles">
                <div><i className="share alternate icon green"></i>分享中</div>                  
              </Link>
              <Link className="item" activeClassName="active" to="/file/folder">
              <div><i className="folder icon open"></i>
                默认文件夹</div>
              </Link>
              <Link className="item sub_item" to="/file/folder">
              <div><i className="folder icon" ></i>
                子文件夹1</div>
              </Link>
              <a className="addSubFolder_item" ng-show="!editing &amp;&amp; current_folder.file_id == folder.file_id" ng-click="createFolder(folder.file_id);">
                <i className="add icon"></i>添加子文件夹
              </a>
              <Link className="item" to="/file/folder">
              <div><i className="folder icon"></i>
                客户文件夹</div>
              </Link>
              
              <a className="addFolder_item " ng-show="!editing &amp;&amp; current_folder.file_id == folder.file_id" ng-click="createFolder(folder.file_id);">
                <i className="add icon"></i>新增文件夹
              </a>
          </div>
      </div>
    )
  }
}