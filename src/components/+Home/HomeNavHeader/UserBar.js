import React from "react";
import { Link } from "react-router-dom";

const UserBar = () => {
  return (
    <div className='userbar'>
      <ul>
        <li>
          <Link to='/logowanie'>Zaloguj</Link>
        </li>
        <li>
          <Link to='/rejestracja'>Załóż konto</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserBar;
