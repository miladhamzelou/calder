import React, {Component ,PropTypes } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Sidebar from './sidebar'

import * as Actions from '../../actions/common/other'

const mapStateToProps = state =>{
  return {  
    globalVal: state.globalVal.toJS()
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class Header extends Component{
  constructor(props){
    super(props)
    this.chooseHander = this.chooseHander.bind(this)
  }
  static propTypes = {
    actions: PropTypes.object.isRequired,
    globalVal: PropTypes.object.isRequired
  }
  handleChangeMode(e){
    e.preventDefault()
  }
  chooseHander(menu){
    const { actions } = this.props
    actions.setChildMenus(menu.childrenList)
  }
  componentDidMount() {

  }

  renderNav(menu) {
    return (
      menu.isChildren?<Sidebar title={menu.menuName} description={menu.description} menus={menu.childrenList}/>:''
    )
  }

  render(){
    const { globalVal } = this.props
    const menus = globalVal.menus[0]?globalVal.menus[0].childrenList:[]
    return (
      <div className="navigation">
        <div className="ui left visible vertical sidebar labeled icon menu one wide column nav">
          {menus.map((menu, i)=>
            menu.isHidden==1
            ?
            <div key={i} className="item-box">
              <Link className="item" activeClassName="active" onlyActiveOnIndex={true}  to={menu.menuUrl} onClick={e=>this.chooseHander(menu)}> 
                <i className={menu.iconPath+' icon'}></i>{menu.menuName}
              </Link>
              
            </div>
            :''
          )}
        </div>
      </div>
    )
  }
}