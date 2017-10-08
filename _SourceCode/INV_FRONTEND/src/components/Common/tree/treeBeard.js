import React, {Component } from 'react'
import TreeNode from './treeNode'
import defaultDecorators from './decorators'
import defaultTheme from '../../../assets/styles/common/tree/default'
import defaultAnimations from '../../../assets/styles/common/tree/animations'

export class TreeBeard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let data = this.props.data
    if(!Array.isArray(data)){ data = [data]}
    return (
      <ul style={this.props.style.tree.base} ref="treeBase">
        {data.map((node, index) =>
          <TreeNode
            key={node.id || index}
            node={node}
            onToggle={this.props.onToggle}
            onMouseOut = {this.props.onMouseOut}
            onMouseOver = {this.props.onMouseOver}
            animations={this.props.animations}
            decorators={this.props.decorators}
            style={this.props.style.tree.node}
          />
        )}
      </ul>
    )
  }
}

TreeBeard.propTypes = {
  style: React.PropTypes.object,
  data: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ]).isRequired,
  animations: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  onToggle: React.PropTypes.func,
  onMouseOut: React.PropTypes.func,
  onMouseOver: React.PropTypes.func,
  decorators: React.PropTypes.object
} 

TreeBeard.defaultProps = {
  style: defaultTheme,
  animations: defaultAnimations,
  decorators: defaultDecorators
}
