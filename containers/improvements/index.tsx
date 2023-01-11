import React from 'react';
import Limitations from '../limitations';
import ReduceFootprint from '../reduce-footprint';
import WhyCare from '../why-care';

const Improvements = () => {
  return (
    <div className="px-4 md:px-20 text-off-black">
      {/* <h3 className="text-3xl md:text-5xl py-10">
        Learn how to make a difference
      </h3> */}
      <div className="flex flex-col justify-center md:flex-row md:space-x-6">
        <ReduceFootprint />
        <WhyCare />
        <Limitations />
      </div>
    </div>
  );
};

export default Improvements;
