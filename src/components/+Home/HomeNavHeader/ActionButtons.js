import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ActionButtons = ({ currentUser }) => {
	const { t } = useTranslation();
	return (
		<div className='home__mainBox-btns'>
			<ul>
				<li>
					{currentUser !== null ? (
						<Link to='/oddaj-rzeczy'>
							{t("home.action.btnOne-1")} <br /> {t("home.action.btnOne-2")}
						</Link>
					) : (
						<Link to='/logowanie'>
							{t("home.action.btnOne-1")} <br /> {t("home.action.btnOne-2")}
						</Link>
					)}
				</li>
				<li>
					<Link to='/logowanie'>{t("home.action.btnTwo")}</Link>
				</li>
			</ul>
		</div>
	);
};

const mapState = (state) => ({
	currentUser: state.userReducer.currentUser
});

export default connect(
	mapState,
	null
)(ActionButtons);
