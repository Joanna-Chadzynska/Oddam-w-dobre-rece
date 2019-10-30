import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CustomDescription, pagination } from "../../../Layouts";
import Fundation from "./Fundation";

const Fundations = ({ foundations }) => {
	const { t } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLast = currentPage * 3;

	const indexOfFirst = indexOfLast - 3;

	const setPageNumber = (i) => {
		setCurrentPage(i);
	};

	return (
		<div className='home__fundtations'>
			<CustomDescription>
				{t("home.whoWeHelp.fundation.desc")}
			</CustomDescription>
			<div className='home__orgList'>
				<ul>
					{foundations.slice(indexOfFirst, indexOfLast).map((fundation) => (
						<Fundation key={fundation.id} fundation={fundation} />
					))}
				</ul>
				<ul className='home__orgList-pagination'>
					{pagination(foundations, currentPage, setPageNumber)}
				</ul>
			</div>
		</div>
	);
};

export default Fundations;
