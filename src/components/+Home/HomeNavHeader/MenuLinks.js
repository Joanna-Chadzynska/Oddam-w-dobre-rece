import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const options = {
	spy: true,
	smooth: true,
	duration: 500
};

const MenuLinks = () => {
	const { t } = useTranslation();
	return (
		<ul className='nav__menu--links'>
			<li>
				<NavLink to='/'>{t("mainMenu.start")}</NavLink>
			</li>
			<li>
				<Link to='simple-steps' {...options} tabIndex='0'>
					{t("mainMenu.steps")}
				</Link>
			</li>
			<li>
				<Link to='about-us' {...options} tabIndex='0'>
					{t("mainMenu.aboutus")}
				</Link>
			</li>
			<li>
				<Link to='who-we-help' {...options} tabIndex='0'>
					{t("mainMenu.whohelp")}
				</Link>
			</li>
			<li>
				<Link to='contact' {...options} tabIndex='0'>
					{t("mainMenu.contact")}
				</Link>
			</li>
		</ul>
	);
};

export default MenuLinks;
