// prettier-ignore
import { Button, Dialog, DialogActions, DialogTitle, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useActions } from "../actions";
import * as CustomerActions from "../actions/customer-action";

interface Props {
	open: boolean;
	onClose: () => void;
	customer: any,
	edit: boolean
}

const initialState = {
	firstName: "",
	lastName: "",
	dateOfBirth: "",
	phone: "",
};

export function CustomerDialog(props: Props) {
	const { open, onClose, customer, edit } = props;
	const classes = useStyles();

	const [state, setState] = React.useState(edit ? customer : initialState);

	const customerActions = useActions(CustomerActions);
	const { firstName, lastName, dateOfBirth, phone } = state;


	const handleClose = () => {
		if (!edit) {
			customerActions.addNewCustomer({
				id: Math.random(),
				firstName: firstName,
				lastName: lastName,
				dateOfBirth: dateOfBirth,
				phone:phone
			});
		} else {
			customerActions.updateCustomer({
				...customer,
				firstName,
				lastName,
				phone,
				dateOfBirth,
			});
		}
		onClose();
		setState(initialState);
	};

	const handleCancel = () => {
		onClose();
		setState(initialState);
	};
	const handleChange = (evt: any, name: string) => {
		const value = evt.target.value;
		setState({
			...state,
			[name]: value,
		});
	};

	const invalidField = () => {
		if (edit) {
			return false;
		}
		return firstName.length === 0 || lastName.length === 0 || phone.length === 0 || dateOfBirth.length === 0;
	};
	return (
		<Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={"sm"}>
			<DialogTitle>Add New Customer</DialogTitle>
			<TextField
				autoFocus
				margin="normal"
				id="firstName"
				label="First Name"
				type="text"
				fullWidth
				value={firstName}
				onChange={(e) => handleChange(e, "firstName")}
			/>
			<TextField
				autoFocus
				margin="normal"
				id="lastName"
				label="Last Name"
				type="text"
				fullWidth
				value={lastName}
				onChange={(e) => handleChange(e, "lastName")}
			/>
			<TextField
				autoFocus
				margin="normal"
				id="phone"
				label="Phone"
				type="text"
				fullWidth
				value={phone}
				onChange={(e) => handleChange(e, "phone")}
			/>

			<TextField
				id="date"
				label="Birthday"
				type="date"
				value={dateOfBirth}
				onChange={(e) => handleChange(e, "dateOfBirth")}
				className={classes.textField}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<DialogActions>
				<Button color="primary" onClick={handleClose} disabled={invalidField()}>
					OK
				</Button>
				<Button color="secondary" onClick={handleCancel}>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	);
}

const useStyles = makeStyles({
	textField: {
		width: "80%",
		margin: 20,
	},
});
