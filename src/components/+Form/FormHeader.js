import React from "react";
import { CustomTitle, StepsDiamonds } from "../Layouts";
import { useTranslation } from "react-i18next";

const FormHeader = () => {
	const { t } = useTranslation();

	return (
		<div className='form__header'>
			<div className='form__hero'></div>
			<br />
			<div className='form__mainPanel'>
				<div className='form__mainBox'>
					<CustomTitle>
						{t("form.header.mainTitle-1")} <br />
						<span>{t("form.header.mainTitle-2")}</span>
					</CustomTitle>
					<h1 className='form__mainTitle'>
						{t("home.simpleSteps.mainTitle")}:
					</h1>
					<StepsDiamonds />
				</div>
			</div>
		</div>
	);
};

export default FormHeader;
