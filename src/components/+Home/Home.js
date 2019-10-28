import React from 'react';
import HomeNavHeader from './HomeNavHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContact from './HomeContact';

const Home = () => (
  <div className="home">
    <HomeNavHeader />
    <HomeThreeColumns />
    <HomeSimpleSteps />
    <HomeAboutUs />
    <HomeWhoWeHelp />
    <HomeContact />
  </div>
);

export default Home;
