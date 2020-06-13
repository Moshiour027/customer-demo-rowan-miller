export interface Customer {
	id: number;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	phone: string;
}

export enum CustomerActions {
	ADD_NEW_CUSTOMER = "ADD_NEW_CUSTOMER",
	UPDATE_CUSTOMER = "UPDATE_CUSTOMER",
	DELETE_CUSTOMER = "DELETE_CUSTOMER",
}

interface CustomerActionType<T, P> {
	type: T;
	payload: P;
}

export type CustomerAction =
	| CustomerActionType<typeof CustomerActions.ADD_NEW_CUSTOMER, Customer>
	| CustomerActionType<typeof CustomerActions.DELETE_CUSTOMER, number>
	| CustomerActionType<typeof CustomerActions.UPDATE_CUSTOMER, any>
	;
