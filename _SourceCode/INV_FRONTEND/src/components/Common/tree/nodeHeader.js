import React,{Component} from 'react'
import shallowEqual from 'shallowequal'
import deepEqual from 'deep-equal'

export default class NodeHeader extends Component {
  constructor(props){
    super(props)
  }
  shouldComponentUpdate(nextProps){
    const props = this.props
    const nextPropKeys = Object.keys(nextProps)
    for(let i = 0; i < nextPropKeys.length; i++){
      const key = nextPropKeys[i]
      if(key === 'animations'){ continue}
      const isEqual = shallowEqual(props[key], nextProps[key])
      if(!isEqual){ return true }
    }
    return !deepEqual(props.animations, nextProps.animations, { strict: true })
  }
  render(){
    const {style, decorators} = this.props
    const terminal = !this.props.node.childrenList
    const active = this.props.node.active
    const container = [style.link, active ? style.activeLink : null]
    const headerStyles = Object.assign({ container }, this.props.style)
    return (
        <decorators.Container
          style={headerStyles}
          decorators={decorators}
          terminal={terminal}
          onClick={this.props.onClick}
          onMouseOut={this.props.onMouseOut}
          onMouseOver={this.props.onMouseOver}
          animations={this.props.animations}
          node={this.props.node}
        />
    )
  }
}

NodeHeader.propTypes = {
  style: React.PropTypes.object.isRequired,
  decorators: React.PropTypes.object.isRequired,
  animations: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]).isRequired,
  node: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func,
  onMouseOut: React.PropTypes.func,
  onMouseOver: React.PropTypes.func
}