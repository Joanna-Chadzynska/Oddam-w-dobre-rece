import React from "react";
import { useTranslation } from "react-i18next";

const LanguageButtons = () => {
	const { i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	return (
		<div className='language__btns'>
			<li>
				<button onClick={() => changeLanguage("pl")}>pl</button>
			</li>
			<li>
				<button onClick={() => changeLanguage("en")}>en</button>
			</li>
			<li>
				<button onClick={() => changeLanguage("ru")}>ru</button>
			</li>
		</div>
	);
};

export default LanguageButtons;
