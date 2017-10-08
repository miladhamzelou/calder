import React, {Component,PropTypes } from 'react'
import { Link } from 'react-router'
import defaultAvatar from '../../assets/images/elyse.png'
import jennyAvatar from '../../assets/images/jenny.jpg'
import elliotAvatar from '../../assets/images/elliot.jpg'
import helenAvatar from '../../assets/images/helen.jpg'
import logo from '../../assets/images/logo.png'
import {Dropdown} from 'react-semantify'

export default class Header extends Component{
  constructor(props){
    super(props)
  }
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }
  handleChangeMode(e){
    e.preventDefault()
  }
  componentDidMount() {
  }
  render(){
    const {logout,auth} = this.props
    const nickName = auth.user?auth.user.nickName:''
    return (
      <div className="ui top fixed menu head">
        <Link  to="/" onlyActiveOnIndex={true} className="item logo"><img src={logo} /></Link>
        <a className="item">招商云平台</a>
        <div className="right menu">
          <div className="ui item">
            <Link  to="/search" className="white" onlyActiveOnIndex={true}>
              <i className="search icon"></i>
              智能搜索
            </Link>
          </div>

          <div className="ui item">
            <Dropdown init={true}>
              <i className="alarm outline icon"></i>
              <div className="alert_message">18</div>
              <div className="menu ui relaxed divided list">
                <div className="ui search icon input">
                  <i className="search icon"></i>
                  <input type="text" name="search" placeholder="搜索通知..." />
                </div>
                <div className="item">
                  <img className="ui avatar image" src={helenAvatar} />
                  <div className="content">
                    <a className="header">久光百货第三次会议</a>
                    <div className="description">
                      <p>2016/06/31 18:20</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img className="ui avatar image" src={defaultAvatar} />
                  <div className="content">
                    <a className="header">欧洲出差通知</a>
                    <div className="description">
                      <p>2016/06/21 18:20</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img className="ui avatar image" src={jennyAvatar} />
                  <div className="content">
                    <a className="header">上传出差报告</a>
                    <div className="description">
                      <p>2016/05/20 18:20</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img className="ui avatar image" src={elliotAvatar} />
                  <div className="content">
                    <a className="header">会议预报</a>
                    <div className="description">
                      <p>2016/05/10 18:20</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img className="ui avatar image" src={helenAvatar} />
                  <div className="content">
                    <a className="header">晚上聚餐</a>
                    <div className="description">
                      <p>2016/05/10 18:20</p>
                    </div>
                  </div>
                </div>
                <div className="ui item center aligned grid">
                  <div className="sixteen wide column">
                    <Link className="" to="/messages">
                      查看更多
                      <i className="angle double right icon"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Dropdown>
          </div>
          <div className="ui item">
            <img className="ui avatar image" src={defaultAvatar} />
            <span><Link style={{color:'white'}} to="/mine/securitySetting">{nickName}
                    </Link></span>
          </div>
          <a className="ui item"  onClick={logout}>登出 </a>
        </div>
     </div>
    )
  }
}