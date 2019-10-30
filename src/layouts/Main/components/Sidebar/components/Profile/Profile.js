import React from "react";

import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Typography } from "@material-ui/core";
import userlogo from "../../../../../../assets/account_box-24px.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		minHeight: "fit-content"
	},
	avatar: {
		width: 60,
		height: 60
	},
	name: {
		marginTop: theme.spacing(1)
	}
}));

const Profile = (props) => {
	const { className, ...rest } = props;
	const { currentuser } = props;
	const classes = useStyles();

	// const user = {
	// 	name: currentuser.displayName,
	// 	avatar: userlogo,
	// 	bio: "Brain Director"
	// };

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			{currentuser !== null ? (
				<>
					<Avatar
						alt='Person'
						className={classes.avatar}
						component={RouterLink}
						src={userlogo}
						to='/settings'
					/>
					<Typography className={classes.name} variant='h4'>
						{currentuser.displayName}
					</Typography>
					<Typography variant='body2'>{currentuser.email}</Typography>
				</>
			) : (
				<h2>dupa</h2>
			)}
		</div>
	);
};

Profile.propTypes = {
	className: PropTypes.string
};

export default Profile;
