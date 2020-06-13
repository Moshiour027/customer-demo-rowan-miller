// prettier-ignore
import { IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../actions";
import * as CustomerActions from "../actions/customer-action";
import { Customer } from "../model";
import { RootState } from "../reducers";
import { CustomerDialog } from "./CustomerDialog";

export function CustomerTable() {
	const classes = useStyles();
	const customerList = useSelector((state: RootState) => state.customerList);
	const customerActions = useActions(CustomerActions);
	const [open, setOpen] = React.useState(false);
	const [customer, setCustomer] = React.useState();


	const handleClose = () => {
		setOpen(false);
	};
	const handleEditCustomer = () => {
		setOpen(true);
	};
	return (
		<>
			<Paper className={classes.paper}>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>

							<TableCell padding="default"></TableCell>
							<TableCell padding="default"></TableCell>
							<TableCell padding="default"></TableCell>
							<TableCell padding="default">First Name</TableCell>
							<TableCell padding="default">Phone</TableCell>
							<TableCell padding="default">Date Of Birth</TableCell>
							<TableCell padding="default">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{customerList.map((c: Customer) => {
							return (
								<TableRow key={c.id}>
									<TableCell padding="none"></TableCell>
									<TableCell padding="none"></TableCell>
									<TableCell padding="none"></TableCell>
									<TableCell padding="none">{c.firstName}</TableCell>
									<TableCell padding="none">{c.phone}</TableCell>
									<TableCell padding="none">{c.dateOfBirth}</TableCell>
									<TableCell padding="none">
										<IconButton
											aria-label="Delete"
											color="default"
											onClick={() =>
												customerActions.deleteCustomer(c.id)
											}
										>
											<DeleteIcon/>
										</IconButton>
										<IconButton
											aria-label="Edit"
											color="default"
											onClick={() => {
												const toBeUpdated = customerList.find(customer => customer.id === c.id);
												setCustomer(toBeUpdated);
												handleEditCustomer();
											}
											}
										>
											<EditIcon/>
										</IconButton>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
				{open && <CustomerDialog open={open} onClose={handleClose} customer={customer} edit={true}/>}
			</Paper>
		</>
	);
}

const useStyles = makeStyles({
	paper: {
		width: "100%",
		minWidth: 260,
		display: "inline-block",
	},
	table: {
		width: "100%",
	},
});
