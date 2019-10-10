import React from "react";
import Menu from "./Menu";
import UserBar from "./UserBar";
import HeaderTitle from "./HeaderTitle";
import ActionButtons from "./ActionButtons";

const HomeNavHeader = () => {
  return (
    <div className='home__navHeader'>
      <div className='home__hero'></div>
      <div className='home__navPanel'>
        <div className='home__nav'>
          <UserBar />
          <Menu />
        </div>
        <div className='home__mainBox'>
          <HeaderTitle />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default HomeNavHeader;
