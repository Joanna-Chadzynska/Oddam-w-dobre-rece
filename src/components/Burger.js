import React from "react";

const Burger = ({ toggleMenu, isMenuOpen }) => {
	return (
		<div
			className={isMenuOpen ? "isopen styledBurger" : "styledBurger"}
			onClick={toggleMenu}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};

export default Burger;
