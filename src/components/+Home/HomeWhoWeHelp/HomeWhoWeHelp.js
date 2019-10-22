import React from "react";
import { CustomTitle, Tabs } from "../../Layouts";
import Fundations from "./Fundations";
import Organizatins from "./Organizations";
import LocalCollecions from "./LocalCollections";
import { useTranslation } from "react-i18next";

const HomeWhoWeHelp = () => {
	const { t } = useTranslation();
	return (
		<div className='home__whoWeHelp' id='who-we-help'>
			<CustomTitle>{t("home.whoWeHelp.mainTitle")}</CustomTitle>
			<div className='home__helping'>
				<Tabs>
					<div label={t("home.whoWeHelp.labelOne")}>
						<Fundations />
					</div>
					<div label={t("home.whoWeHelp.labelTwo")}>
						<Organizatins />
					</div>
					<div label={t("home.whoWeHelp.labelThree")}>
						<LocalCollecions />
					</div>
				</Tabs>
			</div>
		</div>
	);
};

export default HomeWhoWeHelp;
