import React from "react";

import { Switch, Redirect, Route } from "react-router-dom";
// import { RouteWithLayout } from "./components";
// import { Main, Minimal } from "./layouts";
import {
	Dashboard as DashboardView,
	ProductList,
	UsersList,
	Icons as IconsView,
	Account,
	Settings,
	SignUp,
	SignIn,
	NotFound,
	Typography
} from "./views";

import Home from "./components/+Home";
import Login from "./components/+Login";
import Logout from "./components/+Logout";
import Register from "./components/+Register";
import Form from "./components/+Form";
// import Panel from "./components/+Panel";
import Collections from "./components/+Collections";

const Routes = ({ currentUser }) => {
	return (
		<Switch>
			{/* <Redirect exact from='/' to='/dashboard' /> */}
			<Route exact path='/' component={Home} />
			<Route path='/logowanie' component={Login} />
			<Route path='/rejestracja' component={Register} />
			<Route path='/wylogowano' component={Logout} />
			<Route path='/oddaj-rzeczy' component={Form} />
			<Route path='/dodaj-zbiorke' component={Collections} />

			<Route path='/dashboard' component={DashboardView} />
			<Route path='/users' component={UsersList} />
			<Route path='/products' component={ProductList} />
			<Route path='/typography' component={Typography} />
			<Route path='/icons' component={IconsView} />
			<Route path='/account' component={Account} />
			<Route path='/settings' component={Settings} />
			<Route component={NotFound} />

			{/* <RouteWithLayout component={AccountView} path='/account' /> */}

			{/* <Route path='/account' component={AccountView} />
			<Route path='/account' component={AccountView} /> 
			<Route path='/account' component={AccountView} /> */}

			{/* <RouteWithLayout
				component={SignUpView}
				exact
				layout={MinimalLayout}
				path='/sign-up'
			/> */}
			{/* <RouteWithLayout
				component={SignInView}
				exact
				layout={MinimalLayout}
				path='/sign-in'
			/> */}

			{/* <Redirect to='/not-found' /> */}
		</Switch>
	);
};

export default Routes;
