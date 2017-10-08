import React,{Component} from 'react'
import Radium from 'radium'
import {VelocityComponent} from 'velocity-react'
import $ from 'jquery'

const Loading = (props) => {
  return (
    <div style={props.style}>
      正在加载...
    </div>
  )
}

Loading.propTypes = {
  style: React.PropTypes.object
}

const Toggle = (props) => {
  const style = props.style
  const height = style.height
  const width = style.width
  let midHeight = height * 0.5
  let points = `0,0 0,${height} ${width},${midHeight}`
  return (
    <div style={style.base} onClick={props.onClick}>
      <div style={style.wrapper}>
        <svg height={height} width={width}>
          <polygon
            points={points}
            style={style.arrow}
          />
        </svg>
      </div>
    </div>
  )
}

Toggle.propTypes = {
  style: React.PropTypes.object,
  onClick:React.PropTypes.func.isRequired
}

const Header = (props) => {
  const style = props.style
  return (
    <div style={style.base} >
      <div style={style.title} onClick={e =>props.onClick(e)} >{props.node.departName}</div>
    </div>
  )
}

Header.propTypes = {
  style: React.PropTypes.object,
  node: React.PropTypes.object.isRequired,
  onClick:React.PropTypes.func.isRequired
}

const Menu = (props) => {
  const style = props.style
  const isShow = props.node.isOver?style.show:style.hide
  return (
    <div className="ui dropdown icon item" style={isShow} >
      <i className="edit icon"></i>
      <div className="menu">
        <div className="item" onClick={props.addModal}>
          新增子部门
        </div>
        <div className="item" onClick={props.editModal}>
          编辑部门
        </div>
        <div className="item" onClick={props.deleteModal} >
          删除部门
        </div>
      </div>
    </div>
  )
}

Menu.propTypes = {
  style: React.PropTypes.object,
  node: React.PropTypes.object.isRequired,
  editModal:React.PropTypes.func.isRequired,
  addModal:React.PropTypes.func.isRequired,
  deleteModal:React.PropTypes.func.isRequired
}

@Radium
export class Container extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    $('.ui.dropdown').dropdown()
  }
  render(){
    const {style, decorators, terminal, onMouseOut, onMouseOver, node} = this.props
    return (
      <div 
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        >
        <div
          ref="clickable"
          style={style.container}>
          { !terminal ? this.renderToggle() : null }
          <decorators.Header
            node={node}
            onClick={decorators.onChangeMember}
            style={style.header}
          />
        </div>
        <decorators.Menu
          node={node}
          style={style.menu}
          addModal={decorators.addModal}
          editModal={decorators.editModal}
          deleteModal={decorators.deleteModal}
          />
      </div>
    )
  }
  renderToggle(){
    const animations = this.props.animations
    if(!animations){ return this.renderToggleDecorator()}
    return (
      <VelocityComponent ref="velocity"
        duration={animations.toggle.duration}
        animation={animations.toggle.animation}>
        {this.renderToggleDecorator()}
      </VelocityComponent>
    )
  }
  renderToggleDecorator(){
    const {style, decorators, onClick} = this.props
    return (<decorators.Toggle style={style.toggle} onClick={onClick}/>)
  }
}

Container.propTypes = {
  style: React.PropTypes.object.isRequired,
  decorators: React.PropTypes.object.isRequired,
  terminal: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
  onMouseOut: React.PropTypes.func.isRequired,
  onMouseOver: React.PropTypes.func.isRequired,
  animations: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]).isRequired,
  node: React.PropTypes.object.isRequired
}

export default {
  Loading,
  Toggle,
  Header,
  Menu,
  Container
}
