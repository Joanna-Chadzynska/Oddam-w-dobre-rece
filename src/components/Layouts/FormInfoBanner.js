import React from "react";
import { useTranslation } from "react-i18next";

const FormInfoBanner = ({ children }) => {
	const { t } = useTranslation();

	return (
		<div className='form__infoBanner'>
			<h1>{t("form.info.banner-title")}</h1>
			<span>{children}</span>
		</div>
	);
};

export default FormInfoBanner;
