import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/actions";
import { selectOrganizationsForPreview } from "./redux/organizations/organizations.selectors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/+Home";
import Login from "./components/+Login";
import Logout from "./components/+Logout";
import Register from "./components/+Register";
import Form from "./components/+Form";
import NotFound from "./components/+NotFound";
import MainMenu from "./components/MainMenu";
import {
	auth,
	createUserProfileDocument
	// addCollectionsAndDocuments
} from "./firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			// this.setState({ currentUser: user });
			// createUserProfileDocument(user);
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					// console.log(snapShot.data());
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			}

			this.setState({ currentUser: userAuth });
			// addCollectionsAndDocuments("organizations", this.props.organizations);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='app'>
				<Router>
					<MainMenu currentUser={this.state.currentUser} />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/logowanie' component={Login} />
						<Route path='/rejestracja' component={Register} />
						<Route path='/wylogowano' component={Logout} />
						<Route path='/oddaj-rzeczy' component={Form} />
						<Route path='*' component={NotFound} />
					</Switch>
				</Router>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		collectionArray: selectOrganizationsForPreview,
		organizations: state.organizations
		// currentUser: state.userReducer.currentUser
	};
};

const mapDispatch = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(
	mapState,
	mapDispatch
)(App);
