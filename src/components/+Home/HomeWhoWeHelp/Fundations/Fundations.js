import React, { useState } from "react";
import { CustomDescription, pagination } from "../../../Layouts";
import Fundation from "./Fundation";
import db from "../../../../database/db.json";

const Fundations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const fundations = db.foundations;

  const indexOfLast = currentPage * 3;

  const indexOfFirst = indexOfLast - 3;

  const setPageNumber = (i) => {
    setCurrentPage(i);
  };

  return (
    <div className='home__fundtations'>
      <CustomDescription>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </CustomDescription>
      <div>
        <ul>
          {fundations.slice(indexOfFirst, indexOfLast).map((fundation) => (
            <Fundation key={fundation.id} fundation={fundation} />
          ))}
        </ul>
        <ul>{pagination(fundations, currentPage, setPageNumber)}</ul>
      </div>
    </div>
  );
};

export default Fundations;
