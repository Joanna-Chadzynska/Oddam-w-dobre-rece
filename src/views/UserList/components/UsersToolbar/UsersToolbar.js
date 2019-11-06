import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import exportToExcel from "./exportToExcel";
import SearchInput from "../../../../components/SearchInput";
import moment from "moment-timezone";

const useStyles = makeStyles((theme) => ({
	root: {},
	row: {
		height: "42px",
		display: "flex",
		alignItems: "center",
		marginTop: theme.spacing(1)
	},
	spacer: {
		flexGrow: 1
	},
	importButton: {
		marginRight: theme.spacing(1)
	},
	exportButton: {
		marginRight: theme.spacing(1)
	},
	searchInput: {
		marginRight: theme.spacing(1)
	}
}));

const UsersToolbar = (props) => {
	const { className, users, searchUser, filteruservalue, ...rest } = props;
	const convertTimestamp = (timestamp) => {
		const newDate = new Date(timestamp * 1000);
		const dateWithTimezone = moment(newDate)
			.tz("Europe/Warsaw")
			.format("ddd, DD MMM YYYY, HH:mm:ss, Z");

		return dateWithTimezone;
	};
	const dataToExport = users.map(
		(user) =>
			user.createdAt !== undefined && {
				id: user.id,
				email: user.email,
				name: user.displayName,
				createdAt: convertTimestamp(user.createdAt.seconds)
			}
	);
	const classes = useStyles();

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<div className={classes.row}>
				<span className={classes.spacer} />
				<Button className={classes.importButton}>Import</Button>
				<Button
					className={classes.exportButton}
					onClick={() => exportToExcel(dataToExport)}>
					Export
				</Button>
				<Button color='primary' variant='contained'>
					Add user
				</Button>
			</div>
			<div className={classes.row}>
				<SearchInput
					users={users}
					className={classes.searchInput}
					placeholder='Search user'
					searchUser={searchUser}
					filteruservalue={filteruservalue}
				/>
			</div>
		</div>
	);
};

UsersToolbar.propTypes = {
	className: PropTypes.string
};

export default UsersToolbar;
