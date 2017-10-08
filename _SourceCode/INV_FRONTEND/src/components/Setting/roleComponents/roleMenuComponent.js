/**
 * Created by ZJL on 2016/5/27.
 */
import React,{Component} from 'react'
import Radium from 'radium'
import {VelocityComponent} from 'velocity-react'
import {Checkbox} from 'react-semantify'

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

const Checkboxs = (props) => {
  const onClick = props.onClick
  const isChecked = props.node.isHidden==1?true:false
  return (
      <Checkbox init={true} style={{padding:'3px 0px 0px 5px'}} onClick={onClick}>
        <input type="checkbox" checked={isChecked}/>
        <label></label>
      </Checkbox>
  )
}

Checkboxs.propTypes = {
  node: React.PropTypes.object.isRequired,
  onClick:React.PropTypes.func.isRequired
}
const Header = (props) => {
  const style = props.style
  return (
    <div style={style.base}>
      <div style={style.title}>
        {props.node.menuName}
      </div>
    </div>
  )
}

Header.propTypes = {
  style: React.PropTypes.object,
  node: React.PropTypes.object.isRequired
}

@Radium
export class Container extends Component {
  constructor(props){
    super(props)
    this.onClickCheckbox = this.onClickCheckbox.bind(this)
  }
  componentDidMount() {

  }

  onClickCheckbox(){
    let isHidden = this.props.node.isHidden==1?2:1
    let onClickCheckbox = this.props.decorators.onClickCheckbox
    if(onClickCheckbox){ onClickCheckbox(this.props.node, isHidden)}
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
          <decorators.Checkboxs
            node={node}
            onClick={this.onClickCheckbox}
            style={style.header}
            />
          <decorators.Header
            node={node}
            style={style.header}
            />
        </div>
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
  onMouseOut: React.PropTypes.func,
  onMouseOver: React.PropTypes.func,
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
  Checkboxs,
  Container
}
