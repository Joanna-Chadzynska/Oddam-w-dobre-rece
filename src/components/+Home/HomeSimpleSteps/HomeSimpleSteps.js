import React from "react";
import { Link } from "react-router-dom";
import CustomTitle from "../../Layouts/CustomTitle";

const HomeSimpleSteps = () => {
  return (
    <div className='home__simpleSteps' id='simple-steps'>
      <CustomTitle>Wystarczą 4 proste kroki</CustomTitle>

      <div className='home__steps'>
        <div className='home__step'>
          <div className='home__icon home__icon-stepOne' />
          <span>Wybierz rzeczy</span>
          <hr />
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className='home__step'>
          <div className='home__icon home__icon-stepTwo' />
          <span>Spakuj je</span>
          <hr />
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className='home__step '>
          <div className='home__icon home__icon-stepThree' />
          <span>Zdecyduj komu chcesz pomóc</span>
          <hr />
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className='home__step '>
          <div className='home__icon home__icon-stepFour' />
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
