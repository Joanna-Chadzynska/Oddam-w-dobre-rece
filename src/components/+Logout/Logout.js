import React from "react";
import { Link } from "react-router-dom";
import { CustomTitle } from "../Layouts";
import Menu from "../+Home/HomeNavHeader/Menu";
import UserBar from "../+Home/HomeNavHeader/UserBar";
const Logout = () => {
	return (
		<div className='login'>
			<div className='home__nav'>
				<UserBar />
				<br />
				<Menu />
			</div>
			<div className='login__container'>
				<CustomTitle className='logout__title'>
					Wylogowanie nastąpiło <br /> pomyślnie!
				</CustomTitle>
				<Link to='/' className='logout__link'>
					Strona główna
				</Link>
			</div>
		</div>
	);
};

export default Logout;
