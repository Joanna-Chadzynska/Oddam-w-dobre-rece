import React from "react";

const CustomTitle = ({ children }) => {
  return (
    <div className='home__mainBox-title'>
      <h1>{children}</h1>
      <div className='decoration'></div>
    </div>
  );
};

export default CustomTitle;
