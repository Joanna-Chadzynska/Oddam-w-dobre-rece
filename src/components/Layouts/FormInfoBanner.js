import React from "react";

const FormInfoBanner = ({ children }) => {
	return (
		<div className='form__infoBanner'>
			<h1>Ważne!</h1>
			<span>{children}</span>
		</div>
	);
};

export default FormInfoBanner;
