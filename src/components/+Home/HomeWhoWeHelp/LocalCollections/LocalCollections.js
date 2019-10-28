import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Local from './Local';
import { CustomDescription, pagination } from '../../../Layouts';
import db from '../../../../database/db.json';

const LocalCollections = () => {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);

  const { locales } = db;

  const indexOfLast = currentPage * 3;

  const indexOfFirst = indexOfLast - 3;

  const setPageNumber = i => {
    setCurrentPage(i);
  };

  return (
    <div className="home__locals">
      <CustomDescription>{t('home.whoWeHelp.local.desc')}</CustomDescription>
      <div className="home__orgList">
        <ul>
          {locales.slice(indexOfFirst, indexOfLast).map(local => (
            <Local key={local.id} local={local} />
          ))}
        </ul>
        <ul className="home__orgList-pagination">
          {pagination(locales, currentPage, setPageNumber)}
        </ul>
      </div>
    </div>
  );
};

export default LocalCollections;
