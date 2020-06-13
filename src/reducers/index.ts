import { History } from "history";
import { combineReducers } from "redux";
import * as customerReducer from "./customer";
import { Customer } from "../model";

export interface RootState {
	customerList:Customer[];
}

export default (history: History) =>
	combineReducers({
		...customerReducer,
	});
