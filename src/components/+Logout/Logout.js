import React from "react";
import { Link } from "react-router-dom";
import { CustomTitle } from "../Layouts";

const Logout = () => {
	return (
		<div className='login'>
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
