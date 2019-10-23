import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase.utils";

const UserBar = ({ currentUser }) => {
	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<div className='nav-userBar'>
			<ul>
				{currentUser !== null ? (
					<>
						<li>
							<button onClick={() => changeLanguage("pl")}>pl</button>
						</li>
						<li>
							<button onClick={() => changeLanguage("en")}>en</button>
						</li>
						<li>
							<button onClick={() => changeLanguage("ru")}>ru</button>
						</li>
						<li className='nav__userBar-hello'>
							<span>
								{t("userbar.hello")} &nbsp;
								{currentUser.email}!
							</span>
						</li>
						<li>
							<Link to='/oddaj-rzeczy'>{t("userbar.oddaj")}</Link>
						</li>
						<li>
							<Link to='/wylogowano' onClick={() => auth.signOut()}>
								{t("userbar.logout")}
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<button onClick={() => changeLanguage("pl")}>pl</button>
						</li>
						<li>
							<button onClick={() => changeLanguage("en")}>en</button>
						</li>
						<li>
							<button onClick={() => changeLanguage("ru")}>ru</button>
						</li>
						<li>
							<Link to='/logowanie'>{t("userbar.login")}</Link>
						</li>
						<li>
							<Link to='/rejestracja'>{t("userbar.konto")}</Link>
						</li>
					</>
				)}
			</ul>
		</div>
	);
};

export default UserBar;
