import React from "react";

import UserBar from "./+Home/HomeNavHeader/UserBar";
import Menu from "./+Home/HomeNavHeader/Menu";

const MainMenu = ({ currentUser }) => {
	return (
		<div className='home__nav'>
			<UserBar currentUser={currentUser} />
			<br />
			<Menu />
		</div>
	);
};

export default MainMenu;
