import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { UsersToolbar, UsersTable } from "./components";
import { connect } from "react-redux";
import { getAllUsers } from "../../redux/user/actions";
import Spinner from "../../components/Spinner";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const UserList = ({ users, getAllUsers, isLoading }) => {
	const classes = useStyles();
	const [filterUserValue, setFilterUserValue] = useState("");
	const searchUser = (e) => {
		setFilterUserValue(e.target.value);
	};

	useEffect(() => {
		getAllUsers();
	}, [getAllUsers]);

	const filteredUsers = (users) => {
		const newUsers = users.filter((user) =>
			user.displayName.toLowerCase().includes(filterUserValue)
		);
		return newUsers;
	};

	return (
		<div className={classes.root}>
			<UsersToolbar
				users={users}
				searchUser={searchUser}
				filteruservalue={filterUserValue}
			/>
			<div className={classes.content}>
				{isLoading ? (
					<Spinner />
				) : (
					<UsersTable
						users={!filterUserValue ? users : filteredUsers(users)}
						filteruservalue={filterUserValue}
					/>
				)}
			</div>
		</div>
	);
};

const mapState = (state) => ({
	users: state.userReducer.users,
	isLoading: state.userReducer.isLoading
});
const mapDispatch = (dispatch) => ({
	getAllUsers: () => dispatch(getAllUsers())
});

export default connect(
	mapState,
	mapDispatch
)(UserList);
