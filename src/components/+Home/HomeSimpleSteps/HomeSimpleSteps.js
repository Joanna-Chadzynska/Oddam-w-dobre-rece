import React from "react";
import { Link } from "react-router-dom";
import { CustomTitle } from "../../Layouts";
import icon1 from "../../../assets/Icon-1.svg";
import icon2 from "../../../assets/Icon-2.svg";
import icon3 from "../../../assets/Icon-3.svg";
import icon4 from "../../../assets/Icon-4.svg";

const HomeSimpleSteps = () => {
	return (
		<div className='home__simpleSteps' id='simple-steps'>
			<CustomTitle>Wystarczą 4 proste kroki</CustomTitle>
			<div className='home__steps'>
				<div className='home__step'>
					<img src={icon1} alt='' className='home__icon' />
					<span>Wybierz rzeczy</span>
					<hr />
					<p>ubrania, zabawki, sprzęt i inne</p>
				</div>
				<div className='home__step'>
					<img src={icon2} alt='' className='home__icon' />
					<span>Spakuj je</span>
					<hr />
					<p>skorzystaj z worków na śmieci</p>
				</div>
				<div className='home__step '>
					<img src={icon3} alt='' className='home__icon' />
					<span>Zdecyduj komu chcesz pomóc</span>
					<hr />
					<p>wybierz zaufane miejsce</p>
				</div>
				<div className='home__step '>
					<img src={icon4} alt='' className='home__icon' />
					<span>Zamów kuriera</span>
					<hr />
					<p>kurier przyjedzie w dogodnym terminie</p>
				</div>
			</div>

			<div className='home__mainBox-btns'>
				<ul>
					<li>
						<Link to='/logowanie'>oddaj rzeczy</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomeSimpleSteps;
