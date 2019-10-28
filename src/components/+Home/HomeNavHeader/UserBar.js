/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../../firebase/firebase.utils';
import LanguageButtons from './LanguageButtons';

const UserBar = ({ currentUser }) => {
  const { t } = useTranslation();

  return (
    <div className="nav-userBar">
      <ul>
        {currentUser !== null ? (
          <>
            <LanguageButtons />
            <li className="nav__userBar-hello">
              <span>
                {t('userbar.hello')} &nbsp;
                {currentUser.displayName}!
              </span>
            </li>
            <li>
              <Link to="/panel">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="/oddaj-rzeczy">{t('userbar.oddaj')}</Link>
            </li>
            <li>
              <Link to="/wylogowano" onClick={() => auth.signOut()}>
                {t('userbar.logout')}
              </Link>
            </li>
          </>
        ) : (
          <>
            <LanguageButtons />
            <li>
              <Link to="/logowanie">{t('userbar.login')}</Link>
            </li>
            <li>
              <Link to="/rejestracja">{t('userbar.konto')}</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default UserBar;
