import { combineReducers } from "redux";
import { forms } from "./forms/reducers";
import { organizations } from "./organizations/reducers";
import { userReducer } from "./user/reducers";

const reducers = combineReducers({ forms, organizations, userReducer });

export default reducers;
