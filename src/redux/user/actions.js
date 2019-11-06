import {
	SET_CURRENT_USER,
	CHECK_USER_SESSION,
	GET_USERS_START,
	GET_USERS_SUCCESS,
	GET_USERS_ERROR
} from "./actionTypes";

import { firestore, getUsers } from "../../firebase/firebase.utils";

export const setCurrentUser = (user) => ({
	type: SET_CURRENT_USER,
	payload: user
});

const getUsersStart = () => ({ type: GET_USERS_START });
const getUsersSuccess = (payload) => ({ type: GET_USERS_SUCCESS, payload });
const getUsersError = (payload) => ({ type: GET_USERS_ERROR, payload });

export const getAllUsers = () => (dispatch) => {
	const collectionRef = firestore.collection("users");
	dispatch(getUsersStart());

	collectionRef
		.get()
		.then((snapshot) => {
			const collectionMap = getUsers(snapshot);
			dispatch(getUsersSuccess(collectionMap));
		})
		.catch((error) => dispatch(getUsersError(error.message)));
};

export const checkUserSession = () => ({ type: CHECK_USER_SESSION });
