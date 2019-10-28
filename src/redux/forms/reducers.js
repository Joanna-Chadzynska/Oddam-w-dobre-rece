import { ADD_FORM } from './actionTypes';

const initState = {
  forms: [],
};

export const forms = (state = initState, action) => {
  switch (action.type) {
    case ADD_FORM:
      return {
        ...state,
        forms: action.payload,
      };

    default:
      return state;
  }
};
