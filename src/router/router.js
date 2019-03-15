import React from 'react';
// import {BrowserRouter as Router,Route,Switch,Link}from 'react-router-dom';
// import Home from 'pages/Home/Home';
// import Page1 from 'pages/Page1/Page1';
// import Counter from 'pages/Counter/Counter';
// import UserInfo from 'pages/UserInfo/UserInfo';
import {Route, Switch} from 'react-router-dom';
import Loading from 'components/Loading/Loading';


import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';


// const Loading = function () {
// 	return <div>Loading...</div>
// };

const createComponent = (component) => (props) => (
		<Bundle load={component}>
			{
				(Component) => Component ? <Component {...props} /> : <Loading/>
			}
		</Bundle>
);


// const getRouter=()=>(
// 	<Router>
// 		<div>
// 			<ul>
// 				<li><Link to="/">首页</Link></li>
//
// 				<li><Link to="/page1">Page1</Link></li>
//
// 				<li><Link to="/counter">Counter</Link></li>
//
// 				<li><Link to="/userinfo">UserInfo</Link></li>
//
// 			</ul>
// 			<Switch>
// 				{/*<Route exact path="/" component={Home}/>*/}
//
// 				{/*<Route path="/page1" component={Page1}/>*/}
//
// 				{/*<Route path="/counter" component={Counter}/>*/}
//
// 				{/*<Route path="/userinfo" component={UserInfo}/>*/}
// 				<Route exact path="/" component={createComponent(Home)}/>
// 				<Route path="/page1" component={createComponent(Page1)}/>
// 				<Route path="/counter" component={createComponent(Counter)}/>
// 				<Route path="/userinfo" component={createComponent(UserInfo)}/>
//
// 			</Switch>
// 		</div>
// 	</Router>
//
// );
// export default getRouter;

export default () => (
		<div>
			<Switch>
				<Route exact path="/" component={createComponent(Home)}/>
				<Route path="/page1" component={createComponent(Page1)}/>
				<Route path="/counter" component={createComponent(Counter)}/>
				<Route path="/userinfo" component={createComponent(UserInfo)}/>
				<Route component={createComponent(NotFound)}/>
			</Switch>
		</div>
);
//react模块按需加载，所以在打包时产生更多js打包文件。相当于webpack4中的import(),只不过是使用react的内部实现。

