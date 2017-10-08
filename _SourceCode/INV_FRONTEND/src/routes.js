import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Members from './components/Setting/members'
import Menu from './components/Setting/menu'
import Role from './components/Setting/role'
import AllProject from './components/projectManage/allProject'
import ProjectDetails from './components/projectManage/projectDetails'
import SharedFiles from './components/FileManage/sharedFiles'
import Folder from './components/FileManage/folder'
import AddressList from './components/PublicSpace/addressList'
import KnowledgeBase from './components/PublicSpace/knowledgeBase'
import CustomerManager from './components/CustomerManager'
import CustomerDetails from './components/CustomerManager/customerDetails'
import Mail from './components/MessageManager/mail'
import Email from './components/MessageManager/email'
import Questionnaire from './components/MessageManager/questionnaire'
import Reports from './components/Reports'
import KeyProject from './components/Reports/keyProject'
import NormalProject from './components/Reports/normalProject'
import Charts from './components/Reports/charts'
import DefaultOffice from './components/Office/defaultOffice'
import UnDefaultOffice from './components/Office/unDefaultOffice'
import OfficeDetails from './components/Office/officeDetails'
import Department from './components/Setting/department'
import Messages from './components/Messages'
import BasicData from './components/Mine/basicData'
import SecuritySetting from './components/Mine/securitySetting'
import Search from './components/Search'
//资源管理的路由
import Area from './components/ResourceManage/area'
import ResourceFile from './components/ResourceManage/resourceFile'
//事物管理的路由
import ForecastManage from './components/ThingsManage/forecastManage'
import MeetManage from './components/ThingsManage/meetManage'
import BusinessManage from './components/ThingsManage/businessManage'

import {redirectToBack,redirectToLogin} from './utils/authService'
//name 为权限控制所用，name名称要取顶级菜单名称，子菜单名称取自属于的顶级菜单名称
export default ()=> (
	<Route path="/" component={App}>
		<IndexRoute component={Home} onEnter={redirectToLogin} />
		<Login name="登录" path="/login" component={Login} onEnter={redirectToBack} />

		<Members name="系统管理" path="/setting/members" component={Members} onEnter={redirectToLogin}  />
		<Role name="系统管理" path="/setting/role" component={Role} onEnter={redirectToLogin} />
		<Menu name="系统管理" path="/setting/menu" component={Menu} onEnter={redirectToLogin} />
		<Menu name="系统管理" path="/setting/department" component={Department} onEnter={redirectToLogin} />
		
		<CustomerManager name="客户管理"  path="/customerManager" component={CustomerManager} onEnter={redirectToLogin}/>
		<CustomerDetails name="客户管理"  path="/customerManager/customerDetails" component={CustomerDetails} onEnter={redirectToLogin}/>
		
		<Mail name="沟通管理"  path="/messageManager/mail" component={Mail} onEnter={redirectToLogin}/>
		<Email name="沟通管理" path="/messageManager/email" component={Email} onEnter={redirectToLogin}/>
		<Questionnaire name="沟通管理"  path="/messageManager/questionnaire" component={Questionnaire} onEnter={redirectToLogin}/>
		
		<Messages name="消息中心" path="/messages" component={Messages} onEnter={redirectToLogin} />
		<Search name="智能搜索" path="/search" component={Search} onEnter={redirectToLogin} />

		<DefaultOffice name="协同办公" path="/office/defaultOffice" component={DefaultOffice} />
		<UnDefaultOffice name="协同办公" path="/office/unDefaultOffice" component={UnDefaultOffice} />
		<OfficeDetails name="协同办公" path="/office/officeDetails" component={OfficeDetails} />
		
		<AllProject name="项目管理" path="/projectManage" component={AllProject} onEnter={redirectToLogin} />
		<ProjectDetails name="项目管理"  path="/projectManage/projectDetails" component={ProjectDetails} onEnter={redirectToLogin}/>

		<SharedFiles name="文件管理" path="/file/sharedFiles" component={SharedFiles} onEnter={redirectToLogin} />
		<Folder name="文件管理" path="/file/Folder" component={Folder} onEnter={redirectToLogin} />

		<AddressList name="公共空间" path="/publicSpace/addressList" component={AddressList} onEnter={redirectToLogin} />
		<KnowledgeBase name="公共空间" path="/publicSpace/knowledgeBase" component={KnowledgeBase} onEnter={redirectToLogin} />
		
		<Reports name="报表统计" path="/reports" component={Reports} onEnter={redirectToLogin} />
		<KeyProject name="报表统计" path="/reports/keyProject" component={KeyProject} onEnter={redirectToLogin} />	
		<NormalProject name="报表统计" path="/reports/normalProject" component={NormalProject} onEnter={redirectToLogin} />	
		<Charts name="报表统计" path="/reports/charts" component={Charts} onEnter={redirectToLogin} />

		<SecuritySetting name="个人中心" path="/mine/securitySetting" component={SecuritySetting} onEnter={redirectToLogin} />	
		<BasicData name="个人中心" path="/mine/basicData" component={BasicData} onEnter={redirectToLogin} />

		<Area name="资源管理"  path="/ResourceManage/area" component={Area} onEnter={redirectToLogin} />
		<ResourceFile name="资源管理" path="/ResourceManage/resourceFile" component={ResourceFile} onEnter={redirectToLogin} />

		<ForecastManage name="事务管理" path="/ThingsManage/forecastManage" component={ForecastManage} onEnter={redirectToLogin} />
		<MeetManage name="事务管理" path="/ThingsManage/meetManage" component={MeetManage} onEnter={redirectToLogin} />
		<BusinessManage name="事务管理" path="/ThingsManage/businessManage" component={BusinessManage} onEnter={redirectToLogin} />	
	</Route>
)