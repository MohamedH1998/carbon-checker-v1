import React from 'react';
import Header from '../components/header';
import AverageSite from '../containers/average-site';
import CalcSegment from '../containers/calc-segment';
import Emissions from '../containers/emissions';
import Info from '../containers/info';

const Home = () => {
  return (
    <div className="block w-full bg-off-black px-4 py-4 font-primary">
      <Header />
      <div className="space-y-5 md:space-y-0 md:flex md:px-8 md:py-6">
        <Emissions />
        <AverageSite />
        <CalcSegment />
      </div>
      <Info />
    </div>
  );
};

export default Home;
