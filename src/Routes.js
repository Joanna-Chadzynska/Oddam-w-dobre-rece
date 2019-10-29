import React from "react";

import { Switch, Redirect, Route } from "react-router-dom";

import RouteWithLayout from "./components/RouteWithLayout";
// import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

import { Main } from "./layouts";

import { Account } from "./views";
// import {
// 	Dashboard as DashboardView,
// 	ProductList as ProductListView,
// 	UserList as UserListView,
// 	Typography as TypographyView,
// 	Icons as IconsView,
// 	Account as AccountView,
// 	Settings as SettingsView,
// 	SignUp as SignUpView,
// 	SignIn as SignInView,
// 	NotFound as NotFoundView
// } from "./views";

import Home from "./components/+Home";
import Login from "./components/+Login";
import Logout from "./components/+Logout";
import Register from "./components/+Register";
import Form from "./components/+Form";
import NotFound from "./components/+NotFound";
// import MainMenu from "./components/MainMenu";
import Panel from "./components/+Panel";
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
			<Route path='/panel' component={Panel} />
			<Route path='/dodaj-zbiorke' component={Collections} />
			{/* <Route path='*' component={NotFound} /> */}
			{/* <RouteWithLayout
				component={DashboardView}
				exact
				layout={MainLayout}
				path='/dashboard'
			/> */}
			{/* <RouteWithLayout
				component={UserListView}
				exact
				layout={MainLayout}
				path='/users'
			/> */}
			{/* <RouteWithLayout
				component={ProductListView}
				exact
				layout={MainLayout}
				path='/products'
			/> */}
			{/* <RouteWithLayout
				component={TypographyView}
				exact
				layout={MainLayout}
				path='/typography'
			/> */}
			{/* <RouteWithLayout
				component={IconsView}
				exact
				layout={MainLayout}
				path='/icons'
			/> */}
			<RouteWithLayout
				component={Account}
				// exact
				layout={Main}
				path='/account'
			/>
			{/* <RouteWithLayout
				component={SettingsView}
				exact
				layout={MainLayout}
				path='/settings'
			/> */}
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
			{/* <RouteWithLayout
				component={NotFoundView}
				exact
				layout={MinimalLayout}
				path='/not-found'
			/>{" "} */}

			{/* <Redirect to='/not-found' /> */}
		</Switch>
	);
};

export default Routes;
