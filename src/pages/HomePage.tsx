import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { HomeBox } from "../components";
import { RootState } from "../reducers";

export function HomePage() {
	const classes = useStyles();
	const [boxColor] = React.useState("red");
	const customerList = useSelector((state: RootState) => state.customerList);

	return (
		<div className={classes.root}>
			<Typography variant="h4" gutterBottom>
				Welcome To Customer Management
			</Typography>
			<div className={classes.centerContainer}>
				<HomeBox size={300} color={boxColor} count={customerList.length} />
			</div>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		height: "100%",
		textAlign: "center",
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
	},

	centerContainer: {
		flex: 1,
		height: "90%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},

	button: {
		marginTop: 20,
	},
});
