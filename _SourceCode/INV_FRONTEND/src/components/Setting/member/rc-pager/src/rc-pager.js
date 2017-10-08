import React, {Component ,PropTypes}  from 'react'

export class Pager extends Component {
  constructor(props){
    super(props)
    self =this
    this.state = {
      total:this.props.total||0,  //数据总条数
      pageSize:this.props.pageSize||10,   //每页显示条数
      current:this.props.current||1,      //当前页
      pages:[],     //总页数数组
      pagesString:0,
      rollPage:this.props.rollPage||5    //页码长度        
    }
  }
  static propTypes = {
    total: PropTypes.number,
    pageSize: PropTypes.number,
    current: PropTypes.number,
    rollPage: PropTypes.number,
    pages: PropTypes.number.isRequired,
    onChange:React.PropTypes.func
  }
  componentDidMount() {
    this.handlePageArr(this.state.current,this.state.pagesString)
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      current:nextProps.current,
      pagesString:nextProps.pages
    })
    this.handlePageArr(nextProps.current,nextProps.pages)
    this.refs.page_jump.value = ''
  }
  handlePageArr(current,pages){    //处理页码数组
    current = parseInt(current)
    let rollPage = this.state.rollPage
    let pagesArr = []
    if(pages>rollPage){
      if (current>=(pages-rollPage+2)) {  //到最后的页码了
        for(let i=rollPage-2;i>=0;i--){
          pagesArr.push(pages-i)
        }
      }else{
        if(current==1){
          for(let i=1;i<=rollPage-1;i++){
            pagesArr.push(current+i)
          }
        }else{
          for(let i=0;i<rollPage-1;i++){
            pagesArr.push(current+i)
          }
        }
      }
    }else{
        /*for(let i=rollPage-2;i>=0;i--){
            if((pages-i)!=1){
                pagesArr.push(pages-i)
            }
        }*/
      for(let i=2;i<=pages;i++){
        pagesArr.push(i)
      }
    }
    this.setState({
      pages:pagesArr
    })
  }
  handlePageClick(index,e){    //页数点击
    e.preventDefault()
    self.handleChange(index)
  } 
  handlePrev(){  //上一页
    let current = self.state.current
    let prev = parseInt(current)-1
    self.handleChange(prev)
  } 
  handleNext(){  //下一页
    let current =self.state.current
    let next = parseInt(current)+1
    self.handleChange(next)
  }
  handleJump(){  //跳页
    let index =self.refs.page_jump.value

    self.refs.page_jump.value =''
    if(index>0){
      self.handleChange(index)
    }
  }
  handleChange(index){
    this.setState({
      current:index
    })
    this.handlePageArr(index,this.state.pagesString)
    this.props.onChange(index)
  }
  inputChange(...args){
    var page = self.refs.page_jump.value.replace(/^0|\D/g,'')
    if(page>self.state.pagesString){
      page = self.state.pagesString
    }
    self.refs.page_jump.value = page
  }
  render(){
    let self = this
    let prev_node = <li className="prev"><a onClick={this.handlePrev}>&lt;</a></li>
    let next_node = <li className="next"><a onClick={this.handleNext}>&gt;</a></li>
    let prev_break = <li><a className="pre_break">...</a></li>
    let next_break = <li><a className="next_break">...</a></li>
    return(
        <div className="pages">
            <ul className="pagination-3">
                {this.state.current!=1?prev_node:''}
                {this.state.current==1?<li className="active"><a onClick={self.handlePageClick.bind(this,1)}>1</a></li>:<li><a onClick={self.handlePageClick.bind(this,1)}>1</a></li>}
                {this.state.current>2&&(this.state.pagesString>this.state.rollPage)?prev_break:''}
                {
                    this.state.pages.map(function(item,index){
                      if(item == self.state.current){
                        return (<li className="active" key={index}><a onClick={self.handlePageClick.bind(self,item)}>{item}</a></li>)
                      }
                      return(
                           <li key={index}><a onClick={self.handlePageClick.bind(self,item)}>{item}</a></li>
                      )
                    })
                }
                {(this.state.current<(this.state.pagesString-this.state.rollPage+2))&&(this.state.pagesString>this.state.rollPage)?next_break:''}
                {this.state.current!=this.state.pagesString?next_node:''}
                <li className="total_page">共<span>{this.props.pages}</span>页，</li>
                <li>
                    <span className="jump-page">到第<input type="text" ref="page_jump"  onChange={self.inputChange}/>页</span>
                    <a onClick={self.handleJump} className="jump">确定</a>
                </li>
            </ul>
        </div>
    )
  }
}
