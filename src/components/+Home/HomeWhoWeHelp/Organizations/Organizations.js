import React, { useState } from "react";
import Organization from "./Organization";
import { CustomDescription, pagination } from "../../../Layouts";
import db from "../../../../database/db.json";

const Organizations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const organizations = db.goverments;

  const indexOfLast = currentPage * 3;

  const indexOfFirst = indexOfLast - 3;

  const setPageNumber = (i) => {
    setCurrentPage(i);
  };

  return (
    <div className='home__organizations'>
      <CustomDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </CustomDescription>
      <div>
        <ul>
          {organizations
            .slice(indexOfFirst, indexOfLast)
            .map((organization) => (
              <Organization key={organization.id} organization={organization} />
            ))}
        </ul>
        <ul>{pagination(organizations, currentPage, setPageNumber)}</ul>
      </div>
    </div>
  );
};

export default Organizations;
