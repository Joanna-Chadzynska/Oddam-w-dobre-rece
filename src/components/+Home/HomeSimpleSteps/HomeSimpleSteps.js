import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CustomTitle } from '../../Layouts';
import HomeSteps from './HomeSteps';

const HomeSimpleSteps = ({ currentUser }) => {
  const { t } = useTranslation();
  return (
    <div className="home__simpleSteps " id="simple-steps">
      <CustomTitle>{t('home.simpleSteps.mainTitle')}</CustomTitle>
      <div className="home__steps">
        <div className="wrapper">
          <HomeSteps />
        </div>
      </div>

      <div className="home__mainBox-btns">
        <ul>
          <li>
            {currentUser !== null ? (
              <Link to="/oddaj-rzeczy">
                {t('home.action.btnOne-1')} <br /> {t('home.action.btnOne-2')}
              </Link>
            ) : (
              <Link to="/logowanie">
                {t('home.action.btnOne-1')} <br /> {t('home.action.btnOne-2')}
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapState = state => ({
  currentUser: state.userReducer.currentUser,
});

export default connect(
  mapState,
  null
)(HomeSimpleSteps);
