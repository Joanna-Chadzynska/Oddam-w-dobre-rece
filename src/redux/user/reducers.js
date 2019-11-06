import {
	SET_CURRENT_USER,
	GET_USERS_START,
	GET_USERS_SUCCESS,
	GET_USERS_ERROR
} from "./actionTypes";

const INITIAL_STATE = {
	currentUser: null,
	users: [],
	isLoading: false,
	errors: ""
};

export const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			};

		case GET_USERS_START:
			return {
				...state,
				isLoading: true
			};

		case GET_USERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				users: action.payload
			};

		case GET_USERS_ERROR:
			return {
				...state,
				isLoading: false,
				errors: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
