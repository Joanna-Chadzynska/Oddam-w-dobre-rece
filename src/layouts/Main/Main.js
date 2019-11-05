import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { Sidebar, Topbar, Footer } from "./components";
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
	const [isAdmin, setAdmin] = useState(false);
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
	if (props.currentUser !== null) {
		// setAdmin(true);
		console.log(props.currentUser.id);
	}
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
			{props.currentUser !== null &&
				props.currentUser.id === "hkXfn2yHRLNDu0IZJSvGj8fqPCn2" && (
					<Sidebar
						onClose={handleSidebarClose}
						open={shouldOpenSidebar}
						currentuser={props.currentUser}
						variant={isDesktop ? "persistent" : "temporary"}
					/>
				)}

			<main className={classes.content}>
				{/* {routes()} */}
				<Routes />
				{/* <Footer /> */}
			</main>
		</div>
	);
};

Main.propTypes = {
	children: PropTypes.node
};

export default Main;
