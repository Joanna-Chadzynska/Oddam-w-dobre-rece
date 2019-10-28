import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CustomTitle } from '../Layouts';

const Logout = () => {
  const { t } = useTranslation();
  return (
    <div className="login">
      <div className="login__container">
        <CustomTitle className="logout__title">
          {t('logout.title-1')} <br /> {t('logout.title-2')}
        </CustomTitle>
        <Link to="/" className="logout__link">
          {t('logout.link')}
        </Link>
      </div>
    </div>
  );
};

export default Logout;
