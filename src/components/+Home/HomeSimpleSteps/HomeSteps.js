import React from 'react';
import { useTranslation } from 'react-i18next';
import icon1 from '../../../assets/Icon-1.svg';
import icon2 from '../../../assets/Icon-2.svg';
import icon3 from '../../../assets/Icon-3.svg';
import icon4 from '../../../assets/Icon-4.svg';

const HomeSteps = () => {
  const { t } = useTranslation();

  return (
    <div className="home__steps--content">
      <div className="home__step">
        <img src={icon1} alt="" className="home__icon" />
        <span>{t('home.simpleSteps.stepOne-1')}</span>
        <hr />
        <p>{t('home.simpleSteps.stepOne-2')}</p>
      </div>
      <div className="home__step">
        <img src={icon2} alt="" className="home__icon" />
        <span>{t('home.simpleSteps.stepTwo-1')}</span>
        <hr />
        <p>{t('home.simpleSteps.stepTwo-2')}</p>
      </div>
      <div className="home__step ">
        <img src={icon3} alt="" className="home__icon" />
        <span>{t('home.simpleSteps.stepThree-1')}</span>
        <hr />
        <p>{t('home.simpleSteps.stepThree-2')}</p>
      </div>
      <div className="home__step ">
        <img src={icon4} alt="" className="home__icon" />
        <span>{t('home.simpleSteps.stepFour-1')}</span>
        <hr />
        <p>{t('home.simpleSteps.stepFour-2')}</p>
      </div>
    </div>
  );
};

export default HomeSteps;
