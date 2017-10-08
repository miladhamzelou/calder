import React,{Component,PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import defaultAvatar from '../../../assets/images/avatar.png'
import { reduxForm } from 'redux-form'
import {Modal,Dropdown} from 'react-semantify'
import * as Actions from '../../../actions/setting/member'
import $ from 'jquery'
global.$ = global.jQuery = $

const mapStateToProps = state =>{
  return {  
    roles: state.roles.toJS(),
    departmentList: state.departmentList.toJS()
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
@connect(mapStateToProps,mapDispatchToProps)
@reduxForm({
  form: 'editMember',
  fields: ['userName','nickName']
})
export class MemberPanel extends Component{
  constructor(props) {
    super(props)
    this.sex ='0'
    this.lis =[]
  }
  componentDidMount() {
    const ee= this
    $('.radio').checkbox().checkbox({
      onChecked: function() {
        ee.sex = this.value
      }
    })
    $('.haha').dropdown({
      allowCategorySelection: true
    })
  }
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object,
    fields: PropTypes.object,
    values: PropTypes.object,
    roles: PropTypes.object.isRequired,
    departmentList: PropTypes.object.isRequired,
    handleChangee: React.PropTypes.func.isRequired
  }
  
  handleChange(e){
    const ph=e.target.placeholder
    const vl=e.target.value
    const {data ,handleChangee} =this.props
    switch(ph){
      case '账号名'  :{
        data.userName = vl 
        if (vl.length>3) {
          $('.link').popup({

          }).show()
        }
      }
        break
      case '姓名'    :data.nickName = vl 
        break
      case '出生年月' :data.birthday = vl 
        break
      case '身份证'  :data.idCard = vl 
        break
      case '工号'    :data.jobNumber = vl 
        break
      case '邮箱'    :data.mail = vl 
        break
      case '入职时间' :data.entryTime = vl 
        break
      case '手机'    :data.tel = vl 
        break
      case '分机'    :data.landLine = vl 
        break
      case '地址'    :data.address = vl 
        break
    }
    handleChangee(data)
    this.commitMember
  }
  commitMember() {
    const { actions,values,data } = this.props
    console.log(values)
    const param={
      'dispatcher':1001,
      'userType':6,
      'userId':data.id,
      'version':data.version,
      'nickName':data.nickName,
      'userName':data.userName,
      'departId':data.departId,
      'roleId':'de78e1a719f7417e91c233fd7954a739',
      'status':data.status
    }
    console.log(param)
    actions.editMember(param)
  }
  submitAdd = () => {
    const { actions,data } = this.props
    const param={
      'dispatcher':1001,
      'userType':1,
      'nickName':data.nickName?data.nickName:'',
      'userName':data.userName?data.userName:'',
      'sex':this.sex,
      'birthday':data.birthday?(Date.parse(new Date(data.birthday)))/1000:'',
      'idCard':data.idCard?data.idCard:'',
      'entryTime':data.entryTime?(Date.parse(new Date(data.entryTime)))/1000:'',
      'jobNumber':data.jobNumber?data.jobNumber:'',
      'landLine':data.landLine?data.landLine:'',
      'tel':data.tel?data.tel:'',
      'mail':data.mail?data.mail:'',
      'address':data.address?data.address:'',
      'departId':'511f8cb5ac5a4fb7af95f3cba40c69b1',
      'roleId':'de78e1a719f7417e91c233fd7954a739'
    }
    console.log(param)
    actions.addMember(param)
  }
  componentDidUpdate(prevProps) {

  }
  render(){
    const {data,roles} = this.props
    const title = this.props.data.nickName?'修改人员':'新增人员'
    const title2 = this.props.data.nickName?'修改':'保存'
    return (
      <Modal ref="editmodal" className="ui modal small" id="editMemberPanel" init={true}>
          <i className="close icon"></i>
          <div className="header">
          {title}
          </div>
          <div className="content">
              <form className="ui form">
                  <h4 className="ui dividing header"><img className="ui avatar image" width="30" src={defaultAvatar}/></h4>

                  <div className="three fields">
                      <div className="field required">
                          <label>账号名</label>
                          <input type="text" placeholder="账号名" className="link" data-content="账户名3~20个英文字符或数字"  data-variation="mini"
                          value={data?data.userName:''} onChange={e=>this.handleChange(e)}/>
                      </div>
                      <div className="field required">
                          <label>姓名</label>
                          <input type="text" placeholder="姓名" 
                          value={data?data.nickName:''} onChange={e=>this.handleChange(e)}/>
                      </div>
                      <div className="field">
                      <label>性别</label>
                      <div className="inline fields" style ={{paddingTop:30,paddingLeft:30}}>
                          
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input type="radio" name="frequency" checked="checked" value="0"/>
                              <label>男</label>
                            </div>
                          </div>
                          <div className="field">
                            <div className="ui radio checkbox">
                              <input type="radio" name="frequency" value="1"/>
                              <label>女</label>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="three fields">
                      <div className="field ">
                          <label>出生年月</label>
                          <input type="date" placeholder="出生年月" value={data?data.birthday:''} onChange={e=>this.handleChange(e)} />
                      </div>
                      <div className="field">
                          <label>身份证</label>
                          <input type="text" value={data?data.idCard:''} placeholder="身份证"
                           onChange={e=>this.handleChange(e)} />
                      </div>
                      <div className="field required">
                                <label>部门</label>
                                <div style ={{clear:'both'}}>
                                <Dropdown className="ui dropdown button basic haha">
                                <span className="text">请您为该人员分配部门</span>
                                <i className="dropdown icon"></i>
                                <div className="menu">
                                  <div className="item">
                                    <i className="dropdown icon"></i>
                                    <span className="item">招商系统</span>
                                    <div className="menu">
                                      <div className="item">
                                        <i className="dropdown icon"></i>
                                        <span className="item">文部</span>
                                        <div className="menu">
                                          <div className="item">财务部</div>
                                          <div className="item">广告部</div>
                                          <div className="item">文采部</div>
                                        </div>
                                      </div>
                                      <div className="item">武部</div>
                                      <div className="item">其他部</div>
                                    </div>
                                  </div>
                                </div>

                              </Dropdown>
                            </div>
                      </div>
                   </div>                  
                  <div className="field required">
                      <label>角色</label>
                      <div className="fields">
                          <div className="inline fields">
                              {roles.roleList != null &&roles.roleList.obj.roleList.map((role, i)=>
                                <div className="field" key={role.id}>
                                  <div className="ui checkbox">
                                      <input type="checkbox"  className="hidden"/>
                                      <label>{role.roleName}</label>
                                  </div>
                                </div>
                              )}
                          </div>
                      </div>
                  </div>
                  <div className="three fields">
                      <div className="field">
                          <label>工号</label>
                          <input type="text" placeholder="工号" value={data?data.jobNumber:''}
                          onChange={e=>this.handleChange(e)} />
                      </div>
                      <div className="field">
                          <label>邮箱</label>
                          <input type="text" placeholder="邮箱" value={data?data.mail:''}
                          onChange={e=>this.handleChange(e)}/>
                      </div>
                      <div className="field">
                          <label>入职时间</label>
                          <input type="date" placeholder="入职时间" value={data?data.entryTime:''}
                          onChange={e=>this.handleChange(e)} />
                      </div>
                  </div>
                  <div className="three fields">
                      <div className="field">
                          <label>手机</label>
                          <input type="text" placeholder="手机" value={data?data.tel:''}
                          onChange={e=>this.handleChange(e)} />
                      </div>
                      <div className="field">
                          <label>座机/分机</label>
                          <input type="text" placeholder="分机" value={data?data.landline:''}
                          onChange={e=>this.handleChange(e)} />
                      </div>
                      <div className="field">
                          <label>地址</label>
                          <input type="text" placeholder="地址" value={data?data.address:''}
                          onChange={e=>this.handleChange(e)} />
                      </div>
                  </div>
              </form>
          </div>
          <div className="actions">
              <div className="ui basic cancel red button">取消</div>
                {(() => {
                  switch (title2) {
                    case '修改':return <div className="ui basic ok blue button" onClick={e=>this.commitMember()}>{title2}</div>
                    case '保存':return <div className="ui basic ok blue button" onClick={e=>this.submitAdd()}>{title2}</div>
                  }
                })()}
          </div>
      </Modal>
    )
  }
}