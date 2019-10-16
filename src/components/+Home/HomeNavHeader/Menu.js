import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const options = {
	spy: true,
	smooth: true,
	duration: 500
};

const Menu = () => {
	return (
		<div className='nav-menu container'>
			<ul>
				<li>
					<NavLink to='/'>Start</NavLink>
				</li>
				<li>
					<Link to='simple-steps' {...options} tabIndex='0'>
						O co chodzi?
					</Link>
				</li>
				<li>
					<Link to='about-us' {...options} tabIndex='0'>
						O nas
					</Link>
				</li>
				<li>
					<Link to='who-we-help' {...options} tabIndex='0'>
						Fundacja i organizacje
					</Link>
				</li>
				<li>
					<Link to='contact' {...options} tabIndex='0'>
						Kontakt
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
