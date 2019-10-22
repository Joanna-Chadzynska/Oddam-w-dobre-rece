import React from "react";
// import Wrapper from "../../Layouts/Wrapper";
import { useTranslation } from "react-i18next";

const HomeThreeColumns = () => {
	const { t } = useTranslation();
	return (
		<div className='home__threeColumns'>
			{/* <Wrapper> */}
			<div className='home__threeColumns-box'>
				<div className='home__column'>
					<h1>10</h1>
					<p>{t("home.threeColumns.titleOne")}</p>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
						enim a elit viverra elementuma. Aliquam erat volutpat.
					</span>
				</div>
				<div className='home__column'>
					<h1>5</h1>
					<p>{t("home.threeColumns.titleTwo")}</p>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
						enim a elit viverra elementuma. Aliquam erat volutpat.
					</span>
				</div>
				<div className='home__column'>
					<h1>7</h1>
					<p>{t("home.threeColumns.titleThree")}</p>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
						enim a elit viverra elementuma. Aliquam erat volutpat.
					</span>
				</div>
			</div>
			{/* </Wrapper> */}
		</div>
	);
};

export default HomeThreeColumns;
