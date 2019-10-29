import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../../../../../firebase/firebase.utils";
import LanguageButtons from "./LanguageButtons";
import { makeStyles } from "@material-ui/styles";
import {
	AppBar,
	Toolbar,
	Badge,
	Hidden,
	IconButton,
	Typography,
	MenuItem,
	Menu
} from "@material-ui/core";

import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	title: {
		display: "none",
		color: "white",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	userbar: {
		display: "flex",
		justifyContent: "space-between"
	},
	link: {
		textDecoration: "none",
		color: "white"
	}
}));

const Userbar = ({ currentuser }) => {
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<>
			{currentuser !== null ? (
				<ul className={classes.userbar}>
					<LanguageButtons />

					<MenuItem>
						<span className={classes.link}>
							{t("userbar.hello")} &nbsp;
							{currentuser.displayName}!
						</span>
					</MenuItem>

					<MenuItem>
						<IconButton>
							<Link to='/panel' className={classes.link}>
								<AccountCircle />
							</Link>
						</IconButton>
					</MenuItem>

					<MenuItem>
						<Link to='/oddaj-rzeczy' className={classes.link}>
							{t("userbar.oddaj")}
						</Link>
					</MenuItem>

					<MenuItem>
						<Link
							to='/wylogowano'
							className={classes.link}
							onClick={() => auth.signOut()}>
							{t("userbar.logout")}
						</Link>
					</MenuItem>
				</ul>
			) : (
				<ul className={classes.userbar}>
					<LanguageButtons />

					<MenuItem>
						<Link to='/logowanie' className={classes.link}>
							{t("userbar.login")}
						</Link>
					</MenuItem>

					<MenuItem>
						<Link to='/rejestracja' className={classes.link}>
							{t("userbar.konto")}
						</Link>
					</MenuItem>
				</ul>
			)}
		</>
	);
};

export default Userbar;
