import React from "react";
import { Link } from "react-router-dom";

const UserBar = () => {
  return (
    <div className='home__nav-userBar'>
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
