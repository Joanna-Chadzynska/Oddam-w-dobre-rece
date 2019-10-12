import React from "react";
import Menu from "./Menu";
import UserBar from "./UserBar";
import { CustomTitle } from "../../Layouts";
import ActionButtons from "./ActionButtons";

const HomeNavHeader = () => {
  return (
    <div className='home__navHeader'>
      <div className='home__hero'></div>
      <div className='home__navPanel'>
        <div className='home__nav'>
          <UserBar />
          <br />
          <Menu />
        </div>
        <div className='home__mainBox'>
          <CustomTitle>
            Zacznij pomagać!
            <br />
            Oddaj niechciane rzeczy w zaufane ręce
          </CustomTitle>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default HomeNavHeader;
