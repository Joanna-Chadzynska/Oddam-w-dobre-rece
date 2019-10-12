import React from "react";
import { CustomTitle, Tabs } from "../../Layouts";
import Fundations from "./Fundations";
import Organizatins from "./Organizations";
import LocalCollecions from "./LocalCollections";

const HomeWhoWeHelp = () => {
  return (
    <div className='home__whoWeHelp' id='who-we-help'>
      <CustomTitle>Komu pomagamy?</CustomTitle>
      <div className='home__helping'>
        <Tabs>
          <div label='Fundacjom'>
            <Fundations />
          </div>
          <div label='Organizacjom pozarządowym'>
            <Organizatins />
          </div>
          <div label='Lokalnym zbiórkom'>
            <LocalCollecions />
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default HomeWhoWeHelp;
