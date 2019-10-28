import React from 'react';

const Burger = ({ toggleMenu, isMenuOpen }) => (
  <div
    className={isMenuOpen ? 'isopen styledBurger' : 'styledBurger'}
    onClick={toggleMenu}
  >
    <span />
    <span />
    <span />
  </div>
);

export default Burger;
