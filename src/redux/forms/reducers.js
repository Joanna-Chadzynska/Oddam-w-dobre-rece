import { ADD_FORM } from "./actionTypes";

const initState = {
	form: []
};

export const forms = (state = initState, action) => {
	switch (action.type) {
		case ADD_FORM:
			return {
				...state,
				form: action.payload
			};

		default:
			return state;
	}
};
