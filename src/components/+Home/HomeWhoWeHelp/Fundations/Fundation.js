import React from 'react';

const Fundation = ({ fundation }) => (
  <div className="home__orgList-item">
    <div className="home__orgList-details">
      <h2>{fundation.name}</h2>
      <p>{fundation.description}</p>
    </div>
    <span>{fundation.additional}</span>
  </div>
);

export default Fundation;
