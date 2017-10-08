import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
export default class Sidebar extends Component{
  constructor(props) {
    super(props)
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    menus: PropTypes.array
  }
  componentDidMount() {
    
  }
  render(){
    const {title, description, menus} = this.props
    return (
      <div className="twelve wide column navigations-sidebar">
          <div className="ui items">
              <div className="item">
                  <div className="content">
                      <a className="header">{title}</a>
                      <div className="extra">{description} </div>
                  </div>
              </div>
          </div>
          <div className="ui vertical fluid tabular menu">
            {menus != undefined && menus.map((menu, i)=>
              menu.isHidden==1?<Link key={i} className="item" activeClassName="active" onlyActiveOnIndex={true}  to={menu.menuUrl} >{menu.menuName}</Link>:''
            )}
          </div>
      </div>
    )
  }
}