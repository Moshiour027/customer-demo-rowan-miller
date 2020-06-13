import { Button, Grid, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { CustomerDialog } from "../components/CustomerDialog";
import { CustomerTable } from "../components/CustomerTable";

export function CustomerPage() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleAddCustomer = () => {
		setOpen(true);
	};

	return (
		<Grid container className={classes.root}>
			<CustomerDialog open={open} onClose={handleClose} customer={""}  edit={false}/>
			<Grid item xs={6}>
				<Typography variant="h4" gutterBottom>
					Customer List
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<div className={classes.buttonContainer}>
					<Button
						className={classes.button}
						variant="contained"
						color="secondary"
						onClick={handleAddCustomer}
					>
						Add Customer
					</Button>
				</div>
			</Grid>
			<Grid item xs={12}>
				<CustomerTable/>
			</Grid>
		</Grid>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: 20,
		[theme.breakpoints.down("md")]: {
			paddingTop: 50,
			paddingLeft: 15,
			paddingRight: 15,
		},
	},

	buttonContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
	},

	button: {
		marginBottom: 15,
	},
}));
