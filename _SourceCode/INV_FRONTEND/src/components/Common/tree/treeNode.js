import React,{Component} from 'react'
import rutils from 'react-utils'
import {VelocityTransitionGroup} from 'velocity-react'
import NodeHeader from './nodeHeader'

export default class TreeNode extends Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }
  onClick(){
    let toggled = !this.props.node.toggled
    let onToggle = this.props.onToggle
    if(onToggle){ onToggle(this.props.node, toggled)}
  }
  onMouseOver() {
    let onMouseOver = this.props.onMouseOver
    if(onMouseOver){ onMouseOver(this.props.node)}
  }
  onMouseOut() {
    let onMouseOut = this.props.onMouseOut
    if(onMouseOut){ onMouseOut(this.props.node)}
  }
  animations(){
    const props = this.props
    if(props.animations === false){ return false }
    let anim = Object.assign({}, props.animations, props.node.animations)
    return {
      toggle: anim.toggle(this.props),
      drawer: anim.drawer(this.props)
    }
  }
  decorators(){
    const props = this.props
    let nodeDecorators = props.node.decorators || {}
    return Object.assign({}, props.decorators, nodeDecorators)
  }
  render(){
    const decorators = this.decorators()
    const animations = this.animations()
    return (
      <li style={this.props.style.base} ref="topLevel">
        {this.renderHeader(decorators, animations)}
        {this.renderDrawer(decorators, animations)}
      </li>
    )
  }
  renderDrawer(decorators, animations){
    const toggled = this.props.node.toggled
    if(!animations && !toggled){ return null }
    if(!animations && toggled){
      return this.renderChildren(decorators, animations)
    }
    return (
      <VelocityTransitionGroup {...animations.drawer} ref="velocity">
        {toggled ? this.renderChildren(decorators, animations) : null}
      </VelocityTransitionGroup>
    )
  }
  renderHeader(decorators, animations){
    return (
      <NodeHeader
        decorators={decorators}
        animations={animations}
        style={this.props.style}
        node={Object.assign({}, this.props.node)}
        onClick={this.onClick}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      />
    )
  }
  renderChildren(decorators){
    if(this.props.node.loading){ return this.renderLoading(decorators) }
    return (
      <ul style={this.props.style.subtree} ref="subtree">
        {rutils.children.map(this.props.node.childrenList, (child, index) =>
          <TreeNode
            {...this._eventBubbles()}
            key={child.id || index}
            node={child}
            decorators={this.props.decorators}
            animations={this.props.animations}
            style={this.props.style}
          />
        )}
      </ul>
    )
  }
  renderLoading(decorators){
    return (
      <ul style={this.props.style.subtree}>
        <li>
          <decorators.Loading style={this.props.style.loading}/>
        </li>
      </ul>
    )
  }
  _eventBubbles(){
    return { 
      onToggle: this.props.onToggle,
      onMouseOut: this.props.onMouseOut,
      onMouseOver: this.props.onMouseOver
    }
  }
}

TreeNode.propTypes = {
  style: React.PropTypes.object.isRequired,
  node: React.PropTypes.object.isRequired,
  decorators: React.PropTypes.object.isRequired,
  animations: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]).isRequired,
  onToggle: React.PropTypes.func,
  onMouseOut: React.PropTypes.func,
  onMouseOver: React.PropTypes.func
}
