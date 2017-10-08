import React, {Component,PropTypes } from 'react'
import Tree, {TreeNode} from 'rc-tree'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../../actions/setting/role'
import $ from 'jquery'
global.$ = global.jQuery = $

const mapStateToProps = state =>{
  return {
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
@connect(mapStateToProps,mapDispatchToProps)
@reduxForm({
  form: 'editRole',
  fields: ['roleName','description']
})

export class ModalComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultExpandedKeys: ['1', '1-1'],
      defaultCheckedKeys: ['1-1', '1-1-1'],
      showIcon: false,
      switchIt: true
    }
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    fields: PropTypes.object,
    ModalData: PropTypes.object.isRequired,
    values: PropTypes.object,
    handleChangee: PropTypes.object,
    data: PropTypes.object
  }

  handleChange(e){
    const ph=e.target.placeholder
    const vl=e.target.value
    const {ModalData,handleChangee} =this.props
    if(ph=='角色名称'){
      ModalData.roleName = vl
    }
    if(ph=='详情描述'){
      ModalData.description = vl
    }
    handleChangee(ModalData)
    this.commitRole
  }

  commitRole() {
    const { actions,ModalData } = this.props
    const param = {
      dispatcher: 1101,
      _platform: 'pc',
      type: 2,
      roleId: ModalData.id,
      roleName: ModalData.roleName,
      code: ModalData.code,
      description: ModalData.description,
      version: ModalData.version
    }
    actions.modifyRole(param)
  }

  render() {
    const {ModalData} = this.props
    return (
      <div ref="modalModify" className="ui modal small modalModify">
        <i className="close icon"></i>

        <div className="header">
          修改角色
        </div>

        <div className="ui grid roleContent">
          <div className="eight wide column">
            <form className="ui form" noValidate>
              <div className="field required">
                <label>角色名称</label>
                <input type="text" placeholder="角色名称" value={ModalData.roleName?ModalData.roleName:''} onChange={e=>this.handleChange(e)}/>
              </div>
              <div className="field">
                <label>详情描述</label>
                <textarea placeholder="详情描述" rows="3" value={ModalData.description?ModalData.description:''} onChange={e=>this.handleChange(e)}></textarea>
              </div>
            </form>
          </div>

          <div className="eight wide column">
            <div className="header">
              设置权限
            </div>
            <Tree className="myCls" showLine multiple checkable
                  defaultExpandedKeys={this.state.defaultExpandedKeys}
                  showIcon={this.state.showIcon}
                  defaultSelectedKeys={this.state.defaultSelectedKeys}
                  defaultCheckedKeys={this.state.defaultCheckedKeys}
                  >
              <TreeNode title="项目 1" key="1">
                <TreeNode title="项目 1-0" key="1-0">
                  <TreeNode title="子项目 1-0-0" key="1-0-0"/>
                  <TreeNode title="子项目 1-0-1" key="1-0-1"/>
                </TreeNode>
                <TreeNode title="项目 1-1" key="1-1">
                  <TreeNode title="子项目 1-1-0" key="1-1-0"/>
                  <TreeNode title="子项目 1-1-1" key="1-1-1"/>
                </TreeNode>
              </TreeNode>
            </Tree>
          </div>
        </div>

        <div className="actions">
          <div className="ui basic cancel red button">取消</div>
          <div className="ui basic ok blue button" onClick={e=>this.commitRole()}>保存</div>
        </div>
      </div>
    )
  }
}