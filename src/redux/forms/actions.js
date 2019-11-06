import {
	ADD_FORM,
	GET_FORM_START,
	GET_FORM_SUCCESS,
	GET_FORM_ERROR
} from "./actionTypes";

import { firestore, getForms } from "../../firebase/firebase.utils";

export const addForm = (payload) => ({ type: ADD_FORM, payload });

export const fetchFormStart = () => ({ type: GET_FORM_START });
export const fetchFormSuccess = (payload) => ({
	type: GET_FORM_SUCCESS,
	payload
});
export const fetchFormError = (payload) => ({ type: GET_FORM_ERROR, payload });

export const getAllForms = () => (dispatch) => {
	const collectionRef = firestore.collection("forms");
	dispatch(fetchFormStart());

	collectionRef
		.get()
		.then((snapshot) => {
			const collectionMap = getForms(snapshot);
			dispatch(fetchFormSuccess(collectionMap));
		})
		.catch((error) => dispatch(fetchFormError(error.message)));
};
