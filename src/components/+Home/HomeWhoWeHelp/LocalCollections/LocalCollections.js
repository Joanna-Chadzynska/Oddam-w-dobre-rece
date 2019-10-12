import React, { useState } from "react";
import Local from "./Local";
import { CustomDescription, pagination } from "../../../Layouts";
import db from "../../../../database/db.json";

const LocalCollections = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const locales = db.locales;

  const indexOfLast = currentPage * 3;

  const indexOfFirst = indexOfLast - 3;

  const setPageNumber = (i) => {
    setCurrentPage(i);
  };

  return (
    <div className='home__locals'>
      <CustomDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </CustomDescription>
      <div>
        <ul>
          {locales.slice(indexOfFirst, indexOfLast).map((local) => (
            <Local key={local.id} local={local} />
          ))}
        </ul>
        <ul className='home__orgList-pagination'>
          {pagination(locales, currentPage, setPageNumber)}
        </ul>
      </div>
    </div>
  );
};

export default LocalCollections;
