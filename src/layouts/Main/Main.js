import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { Sidebar, Topbar, Footer } from "./components";
import Home from "../../components/+Home";
import { Account } from "../../views";
import { Switch, Redirect, Route } from "react-router-dom";
import Routes from "../../Routes";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: 56,
		height: "100%",
		[theme.breakpoints.up("sm")]: {
			paddingTop: 64
		}
	},
	shiftContent: {
		paddingLeft: 240
	},
	content: {
		height: "100%"
	}
}));

const Main = (props) => {
	const { children } = props;
	const history = props.history.location.pathname;
	const classes = useStyles();
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
		defaultMatches: true
	});

	const [openSidebar, setOpenSidebar] = useState(false);

	const handleSidebarOpen = () => {
		setOpenSidebar(true);
	};

	const handleSidebarClose = () => {
		setOpenSidebar(false);
	};

	const shouldOpenSidebar = isDesktop ? true : openSidebar;

	console.log(props);

	return (
		<div
			className={clsx({
				[classes.root]: true,
				[classes.shiftContent]: isDesktop
			})}>
			<Topbar
				onSidebarOpen={handleSidebarOpen}
				currentuser={props.currentUser}
			/>
			<Sidebar
				onClose={handleSidebarClose}
				open={shouldOpenSidebar}
				variant={isDesktop ? "persistent" : "temporary"}
			/>
			<main className={classes.content}>
				{/* {routes()} */}
				<Routes />
				<Footer />
			</main>
		</div>
	);
};

Main.propTypes = {
	children: PropTypes.node
};

export default Main;
