import {
	ADD_FORM,
	GET_FORM_START,
	GET_FORM_SUCCESS,
	GET_FORM_ERROR
} from "./actionTypes";

const initState = {
	forms: [],
	isLoading: false,
	userForms: [],
	errors: ""
};

export const forms = (state = initState, action) => {
	switch (action.type) {
		case ADD_FORM:
			return {
				...state,
				forms: action.payload
			};

		case GET_FORM_START:
			return {
				...state,
				isLoading: true
			};

		case GET_FORM_SUCCESS:
			return {
				...state,
				isLoading: false,
				userForms: action.payload
			};

		case GET_FORM_ERROR:
			return {
				...state,
				isLoading: false,
				errors: action.payload
			};

		default:
			return state;
	}
};
