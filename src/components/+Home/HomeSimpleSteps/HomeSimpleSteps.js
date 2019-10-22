import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CustomTitle } from "../../Layouts";
import icon1 from "../../../assets/Icon-1.svg";
import icon2 from "../../../assets/Icon-2.svg";
import icon3 from "../../../assets/Icon-3.svg";
import icon4 from "../../../assets/Icon-4.svg";
import { useTranslation } from "react-i18next";

const HomeSimpleSteps = ({ currentUser }) => {
	const { t } = useTranslation();
	return (
		<div className='home__simpleSteps' id='simple-steps'>
			<CustomTitle>{t("home.simpleSteps.mainTitle")}</CustomTitle>
			<div className='home__steps'>
				<div className='home__step'>
					<img src={icon1} alt='' className='home__icon' />
					<span>{t("home.simpleSteps.stepOne-1")}</span>
					<hr />
					<p>{t("home.simpleSteps.stepOne-2")}</p>
				</div>
				<div className='home__step'>
					<img src={icon2} alt='' className='home__icon' />
					<span>{t("home.simpleSteps.stepTwo-1")}</span>
					<hr />
					<p>{t("home.simpleSteps.stepTwo-2")}</p>
				</div>
				<div className='home__step '>
					<img src={icon3} alt='' className='home__icon' />
					<span>{t("home.simpleSteps.stepThree-1")}</span>
					<hr />
					<p>{t("home.simpleSteps.stepThree-2")}</p>
				</div>
				<div className='home__step '>
					<img src={icon4} alt='' className='home__icon' />
					<span>{t("home.simpleSteps.stepFour-1")}</span>
					<hr />
					<p>{t("home.simpleSteps.stepFour-2")}</p>
				</div>
			</div>

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
				</ul>
			</div>
		</div>
	);
};

const mapState = (state) => ({
	currentUser: state.userReducer.currentUser
});

export default connect(
	mapState,
	null
)(HomeSimpleSteps);
