import ORG_DATA from "./organizations.data";
import OrganizationTypes from "./organizations.types";

const initState = {
	organizations: [ORG_DATA]
};

export const organizations = (state = initState, action) => {
	switch (action.type) {
		case OrganizationTypes.UPDATE_ORGANIZATIONS:
			return {
				...state,
				organizations: action.payload
			};
		default:
			return state;
	}
};
