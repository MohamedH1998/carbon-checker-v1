import React, { useRef, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import AverageSite from '../containers/average-site';
import CalcSegment from '../containers/calc-segment';
import Calculate from '../containers/calculate';
import Emissions from '../containers/emissions';
import Improvements from '../containers/improvements';
import Limitations from '../containers/limitations';
import ReduceFootprint from '../containers/reduce-footprint';
import WhyCare from '../containers/why-care';

const Home = () => {
  const calculateRef = useRef<null | HTMLDivElement>(null);
  const [data, setData] = useState<Data | undefined>(undefined);

  return (
    <div className="flex w-full bg-off-black px-4 py-4 font-primary justify-center">
      <main>
        <Header calculateRef={calculateRef} />
        <div className="flex justify-center">
          <div className="md:flex md:justify-center space-y-2 md:space-y-0 py-10 md:space-x-6 md:px-20">
            <AverageSite />
            <CalcSegment />
            <Emissions />
          </div>
        </div>
        <Calculate data={data} setData={setData} calculateRef={calculateRef} />
        {data && <Improvements />}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
