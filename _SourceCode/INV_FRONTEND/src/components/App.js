import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Common/header'
import * as Actions from '../actions'
import Toaster from '../components/Toaster'
import Navigation from '../components/Common/navigation'

const mapStateToProps = state =>{
  return {
    globalVal: state.globalVal.toJS(),
    auth: state.auth.toJS(),
    showmsg: state.showmsg.toJS()
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

@connect(mapStateToProps,mapDispatchToProps)
export default class App extends Component {
  constructor(props){
    super(props)
  }

  static fetchData(params){
    return [Actions.getUserInfo(),Actions.getIndexImage()]
  }


  static propTypes = {
    globalVal: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    showmsg: PropTypes.object.isRequired,
    children: PropTypes.node,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  componentDidMount() {
    
  }
  
  render() {
    const { actions,children,auth,location,showmsg } = this.props
    return (
      <div className="content clearfix">
        {(auth.token )?
          <div>
            <Header  auth={auth} logout={actions.logout} changeStyleMode={actions.changeStyleMode} />
            <Navigation location={location} />
            <div className="ui grid main-content">
              <div className="sixteen wide column ">
                {children}
              </div>
            </div>
          </div>
          :
          <div className="content">
            <div className="ui middle aligned center aligned grid">
              {children}
            </div>   
          </div>
        }
        <Toaster msg={showmsg} hideMsg={actions.hideMsg} />
      </div>
    )
  }
}