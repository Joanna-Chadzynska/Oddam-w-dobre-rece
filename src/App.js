import React, { Suspense } from "react";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { Chart } from "react-chartjs-2";
import { chartjs } from "./helpers";
import { ThemeProvider } from "@material-ui/styles";
import validate from "validate.js";
import validators from "./common/validators";

import theme from "./theme";
import "react-perfect-scrollbar/dist/css/styles.css";

import { setCurrentUser, checkUserSession } from "./redux/user/actions";
import { selectOrganizationsForPreview } from "./redux/organizations/organizations.selectors";
import MainMenu from "./components/MainMenu";
import Main from "./layouts/Main";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
	draw: chartjs.draw
});

validate.validators = {
	...validate.validators,
	...validators
};

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
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			}

			this.setState({ currentUser: userAuth });
			setCurrentUser(userAuth);

			// addCollectionsAndDocuments("forms", this.props.forms);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='app'>
				<Suspense fallback={<div>loading</div>}>
					<ThemeProvider theme={theme}>
						<Router history={browserHistory}>
							<MainMenu />
							<Main
								currentUser={this.state.currentUser}
								history={browserHistory}
							/>
						</Router>
					</ThemeProvider>
				</Suspense>
			</div>
		);
	}
}

const mapState = (state) => ({
	collectionArray: selectOrganizationsForPreview,
	organizations: state.organizations,
	forms: state.forms.forms

	// currentUser: state.userReducer.currentUser
});

const mapDispatch = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
	mapState,
	mapDispatch
)(App);
