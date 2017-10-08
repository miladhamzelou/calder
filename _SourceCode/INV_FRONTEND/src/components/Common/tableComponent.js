import React,{Component,PropTypes} from 'react'
import {Pager} from  './rc-pager/src/rc-pager'

export default class Table extends Component{
  constructor(props) {
    super(props)
  }

  static propTypes = {
    totalPage: PropTypes.number,
    current: PropTypes.number,
    pageSize: PropTypes.number,
    children: React.PropTypes.node.isRequired,
    pageChange: PropTypes.func
  }

  componentDidMount() {
    
  }

  render(){
    const {totalPage, current, pageSize, pageChange} = this.props
    return (
      <div className="">
        <table className="ui single line table">
          {this.props.children}
        </table> 
        <div style ={{height:38}}>               
          <Pager pages={totalPage} current={current} onChange={pageChange} pageSize={pageSize}/>
        </div>
      </div>
    )
  }
}