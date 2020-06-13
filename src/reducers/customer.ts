import createReducer from "./createReducer";
import { Customer, CustomerAction, CustomerActions } from "../model";

export const customerList = createReducer<Customer[]>([], {
	[CustomerActions.ADD_NEW_CUSTOMER](state: Customer[], action: CustomerAction) {
		return [...state, action.payload];
	},
	[CustomerActions.DELETE_CUSTOMER](state: Customer[], action: CustomerAction) {
		return state.filter(customer => customer.id !== action.payload);
	},

	[CustomerActions.UPDATE_CUSTOMER](state: Customer[], action: CustomerAction) {
		return state.map(c =>
			c.id === action.payload.id ? action.payload : c,
		);
	},
});
