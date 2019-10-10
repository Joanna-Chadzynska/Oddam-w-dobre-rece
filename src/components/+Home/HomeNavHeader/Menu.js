import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const options = {
  spy: true,
  smooth: true,
  duration: 500
};

const Menu = () => {
  return (
    <div className='menu'>
      <ul>
        <li>
          <NavLink to='/'>Start</NavLink>
        </li>
        <li>
          <Link to='simple-steps' {...options}>
            O co chodzi?
          </Link>
        </li>
        <li>
          <Link to='about-us' {...options}>
            O nas
          </Link>
        </li>
        <li>
          <Link to='who-we-help' {...options}>
            Fundacja i organizacje
          </Link>
        </li>
        <li>
          <Link to='contact' {...options}>
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
