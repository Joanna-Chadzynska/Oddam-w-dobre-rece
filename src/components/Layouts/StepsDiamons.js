import React from "react";

const StepsDiamonds = () => {
	return (
		<div className='form__mainSteps'>
			<div className='form__diamond'>
				<div className='form__diamondItem'>
					<h1>1</h1>
					<span>
						Wybierz <br /> rzeczy
					</span>
				</div>
			</div>
			<div className='form__diamond'>
				<div className='form__diamondItem'>
					<h1>2</h1>
					<span>
						Spakuj je <br /> w worki
					</span>
				</div>
			</div>
			<div className='form__diamond'>
				<div className='form__diamondItem'>
					<h1>3</h1>
					<span>
						Wybierz <br /> fundację
					</span>
				</div>
			</div>
			<div className='form__diamond'>
				<div className='form__diamondItem'>
					<h1>4</h1>
					<span>
						Zamów <br /> kuriera
					</span>
				</div>
			</div>
		</div>
	);
};

export default StepsDiamonds;
