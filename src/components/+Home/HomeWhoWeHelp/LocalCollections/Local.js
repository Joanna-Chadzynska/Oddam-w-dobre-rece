import React from 'react';

const Local = ({ local }) => (
  <div className="home__orgList-item">
    <div className="home__orgList-details">
      <h2>{local.name}</h2>
      <p>{local.description}</p>
    </div>
    <span>{local.additional}</span>
  </div>
);

export default Local;
