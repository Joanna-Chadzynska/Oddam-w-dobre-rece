import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { UsersToolbar, UsersTable } from "./components";
// import mockData from "./data";
import { firestore, getUsers } from "../../firebase/firebase.utils";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const UserList = () => {
	const classes = useStyles();

	// const [users] = useState(mockData);
	const [users, setUsers] = useState([]);
	const [filterUserValue, setFilterUserValue] = useState("");
	const searchUser = (e) => {
		setFilterUserValue(e.target.value);
	};

	useEffect(() => {
		const collectionRef = firestore.collection("users");
		collectionRef.onSnapshot(async (snapshot) => {
			// console.log(snapshot);
			const collectionsMap = getUsers(snapshot);
			setUsers(collectionsMap);
		});
	}, []);

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
				<UsersTable
					users={!filterUserValue ? users : filteredUsers(users)}
					filteruservalue={filterUserValue}
				/>
			</div>
		</div>
	);
};

export default UserList;
