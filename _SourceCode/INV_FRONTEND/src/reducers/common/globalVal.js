import { 
  CHANGE_STYLE_MODE,
  GET_INDEX_IMG_SUCCESS,
  GET_INDEX_IMG_FAILURE,
  USER_PLATFORM,
  GET_MENUS_SUCCESS,
  GET_CHILD_MENUS_SUCCESS
} from '../../actions/common/types'
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import img from '../../assets/images/shanghai.jpg'

export default createReducer(fromJS({
  indexImg:'',
  styleMode:'day-mode',
  _platform: 'pc',
  childMenus: [],
  menus:[
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'0','isChildren':true,'createTime':'1464052463708','menuName':'招商系统','menuCode':'INV_MANAGER','toggled':true,'menuUrl':'','isHidden':1,'version':'0','type':1,'id':'f60c5248e25f40cebe822fb267bf3e19','childrenList':[
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':false,'createTime':'0','menuName':'首页','menuCode':'20160531161451','updateUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','toggled':true,'menuUrl':'/','isHidden':1,'updateTime':'1464765870021','version':'2','type':1,'id':'69b0ff4f2bce4fab9d1b5666aaa6aae8','description':'首页菜单','iconPath':'home','sort':'1'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':false,'createTime':'0','menuName':'项目管理','menuCode':'20160531171405','updateUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','toggled':true,'menuUrl':'/projectManage','isHidden':1,'updateTime':'1464768860776','version':'3','type':1,'id':'f284dfdb5f084f9d8daa038501976bed','iconPath':'tasks','sort':'2'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':false,'createTime':'1464919248152','menuName':'客户管理','menuCode':'20160603100048','toggled':true,'menuUrl':'/customerManager','isHidden':1,'updateTime':'0','version':'1','type':1,'id':'40f5a56c1f804019ba66288fd2dfd907','iconPath':'users','sort':'3'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':true,'createTime':'0','menuName':'事务管理','menuCode':'20160531171925','toggled':true,'menuUrl':'/thingsManage/forecastManage','isHidden':1,'updateTime':'0','version':'4','type':1,'id':'50e791b0397a4171a33a7bb932c88fda','iconPath':'alarm','sort':'4'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':false,'createTime':'0','menuName':'文件管理','menuCode':'20160601160519','updateUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','toggled':true,'menuUrl':'/file/sharedFiles','isHidden':1,'updateTime':'1464919540050','version':'3','type':1,'id':'bd4ecc559b0f43658ae45bf8fab9d2b4','iconPath':'file','sort':'7'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':false,'createTime':'0','menuName':'协同办公','menuCode':'20160531172654','updateUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','toggled':true,'menuUrl':'/office/unDefaultOffice','isHidden':1,'updateTime':'1465182270444','version':'6','type':1,'id':'f4c13335ab35437988f5974665579019','iconPath':'laptop','sort':'8'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':false,'createTime':'0','menuName':'公共空间','menuCode':'20160601160826','updateUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','toggled':true,'menuUrl':'/publicSpace/knowledgeBase','isHidden':1,'updateTime':'1464919633564','version':'4','type':1,'id':'478ec616660f4472b29c0403434a3f37','iconPath':'dashboard','sort':'9'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':false,'createTime':'0','menuName':'报表统计','menuCode':'20160606104823','updateUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','toggled':true,'menuUrl':'/reports','isHidden':1,'updateTime':'1465182379102','version':'2','type':1,'id':'a744d74cf90b49439585588f5ef8b8f1','iconPath':'line chart','sort':'10'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':false,'createTime':'1465181454822','menuName':'沟通管理','menuCode':'20160606105054','toggled':true,'menuUrl':'/messageManager/mail','isHidden':1,'updateTime':'0','version':'1','type':1,'id':'1ff80c04e88a44b5bfe7c551697a423b','iconPath':'comment outline','sort':'10'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':true,'createTime':'1465181454822','menuName':'资源管理','menuCode':'20160616103951','toggled':true,'menuUrl':'/resourceManage/area','isHidden':1,'updateTime':'0','version':'1','type':1,'id':'c0b279fb7d714b4a9b28d992a9ff6006','iconPath':'sitemap','sort':'10'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e19','isChildren':true,'createTime':'0','menuName':'系统管理','menuCode':'SYS_MANAGER','updateUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','toggled':true,'menuUrl':'/setting/members','isHidden':1,'updateTime':'1465181324883','version':'3','type':1,'id':'f60c5248e25f40cebe822fb267bf3e20','description':'','childrenList':[{'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e20','isChildren':false,'createTime':'1464772781994','menuName':'人员管理','menuCode':'20160601171941','toggled':true,'menuUrl':'/setting/members','isHidden':1,'updateTime':'0','version':'1','type':2,'id':'87b4e2284fbd4aecb466e6fa741e1e14','iconPath':'member','sort':'1'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e20','isChildren':false,'createTime':'1464772890228','menuName':'角色管理','menuCode':'20160601172130','toggled':true,'menuUrl':'/setting/role','isHidden':1,'updateTime':'0','version':'1','type':2,'id':'2e20614f5eed4fee87401df8c18db213','iconPath':'role','sort':'2'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e20','isChildren':false,'createTime':'1464772953033','menuName':'菜单管理','menuCode':'20160601172233','toggled':true,'menuUrl':'/setting/menu','isHidden':1,'updateTime':'0','version':'1','type':2,'id':'ffb8ce9b1da441aa8c5f3871105978be','iconPath':'menu','sort':'3'},
    {'createUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','parentId':'f60c5248e25f40cebe822fb267bf3e20','isChildren':false,'createTime':'0','menuName':'部门管理','menuCode':'DEPART_MANAGER','updateUserId':'511f8cb5ac5a4fb7af95f3cba40c69b0','toggled':true,'menuUrl':'/setting/department','isHidden':1,'updateTime':'1464772831226','version':'1','type':2,'id':'f60c5248e25f40cebe822fb267bf3e28','description':'','iconPath':'department','sort':'4'}],'iconPath':'setting','sort':'11'}],'sort':'0'}]
}), {
  [CHANGE_STYLE_MODE]: (state, action) => state.set('styleMode',(state.get('styleMode') === 'day-mode')?'night-mode':'day-mode'),
  [GET_INDEX_IMG_SUCCESS]: (state, {json}) => state.set('indexImg',json.img),
  [GET_INDEX_IMG_FAILURE]: (state, {json}) => state.set('indexImg',img),
  [USER_PLATFORM]: (state, {json}) => state.set('_platform',json._platform),
  [GET_MENUS_SUCCESS] : (state, action) => state.set('menus',fromJS(action.menus)),
  [GET_CHILD_MENUS_SUCCESS] : (state, action) => state.set('childMenus',fromJS(action.childMenus))
})