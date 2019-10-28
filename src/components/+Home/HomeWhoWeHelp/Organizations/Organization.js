import React from 'react';

const Organization = ({ organization }) => (
  <div className="home__orgList-item">
    <div className="home__orgList-details">
      <h2>{organization.name}</h2>
      <p>{organization.description}</p>
    </div>
    <span>{organization.additional}</span>
  </div>
);

export default Organization;
