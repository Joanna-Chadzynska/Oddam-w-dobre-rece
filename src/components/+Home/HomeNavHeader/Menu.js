import React, { useState } from "react";
import Burger from "../../Burger";
import MenuLinks from "./MenuLinks";

const Menu = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = (e) => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<div className='nav-menu container'>
			<Burger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
			{window.outerWidth > 426 ? <MenuLinks /> : isMenuOpen && <MenuLinks />}
		</div>
	);
};

export default Menu;
