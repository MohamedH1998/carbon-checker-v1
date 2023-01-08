import React, { useRef } from 'react';
import Header from '../components/header';
import AverageSite from '../containers/average-site';
import CalcSegment from '../containers/calc-segment';
import Calculate from '../containers/calculate';
import Emissions from '../containers/emissions';
import Limitations from '../containers/limitations';
import ReduceFootprint from '../containers/reduce-footprint';
import WhyCare from '../containers/why-care';

const Home = () => {
  const calculateRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className="flex w-full bg-off-black px-4 py-4 font-primary justify-center">
      <div className="max-w-[580px] md:max-w-none">
        <Header calculateRef={calculateRef} />
        <div className="space-y-2 pt-4 md:space-y-0 md:flex md:py-6">
          <Emissions />
          <AverageSite />
          <CalcSegment />
        </div>
        <Calculate calculateRef={calculateRef} />
        <div className="pt-4 flex flex-col justify-center md:flex-row md:space-x-3">
          <ReduceFootprint />
          <WhyCare />
          <Limitations />
        </div>
      </div>
    </div>
  );
};

export default Home;
