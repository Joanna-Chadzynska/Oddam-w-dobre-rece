import { combineReducers } from "redux";
import { forms } from "./forms/reducers";
import { organizations } from "./organizations/reducers";

const reducers = combineReducers({ forms, organizations });

export default reducers;
