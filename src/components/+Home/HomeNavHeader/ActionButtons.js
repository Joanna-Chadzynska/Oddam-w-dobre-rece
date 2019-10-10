import React from "react";
import { Link } from "react-router-dom";

const ActionButtons = () => {
  return (
    <div className='home__mainBox-btns'>
      <ul>
        <li>
          <Link to='/logowanie'>
            oddaj <br /> rzeczy
          </Link>
        </li>
        <li>
          <Link to='/logowanie'>zorganizuj zbiórkę</Link>
        </li>
      </ul>
    </div>
  );
};

export default ActionButtons;
