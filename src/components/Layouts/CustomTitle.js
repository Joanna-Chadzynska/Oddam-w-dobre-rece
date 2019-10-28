import React from 'react';

const CustomTitle = ({ children }) => (
  <div className="home__mainBox-title">
    <h1>{children}</h1>
    <div className="decoration" />
  </div>
);

export default CustomTitle;
