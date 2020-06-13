import { Customer, CustomerAction, CustomerActions } from "../model";

export function addNewCustomer(customer: Customer): CustomerAction {
	return {
		type: CustomerActions.ADD_NEW_CUSTOMER,
		payload: customer,
	};
}

export function deleteCustomer(id: number): CustomerAction {
	return {
		type: CustomerActions.DELETE_CUSTOMER,
		payload: id,
	};
}


export function updateCustomer(customer: Customer): CustomerAction {
	return {
		type: CustomerActions.UPDATE_CUSTOMER,
		payload: customer,
	};
}
