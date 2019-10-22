import React from "react";
import { CustomTitle } from "../../Layouts";
import { useTranslation } from "react-i18next";

const HomeAboutUs = () => {
	const { t } = useTranslation();
	return (
		<div className='home__aboutUs' id='about-us'>
			<div className='home__description-box'>
				<CustomTitle>{t("mainMenu.aboutus")}</CustomTitle>
				<div className='home__desc'>
					<p>
						Nori grape silver beet broccoli kombu beet greens fava bean potato
						quandong celery. Bunya nuts black-eyed pea prairie turnip leek
						lentil turnip greens parsnip.
					</p>
				</div>

				<div className='home__signature'></div>
			</div>
			<div className='home__banner'></div>
		</div>
	);
};

export default HomeAboutUs;
