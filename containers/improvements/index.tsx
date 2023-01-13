import React from 'react';
import Limitations from '../limitations';
import ReduceFootprint from '../reduce-footprint';
import WhyCare from '../why-care';

const Improvements = () => {
  return (
    <div className="px-4 md:px-20">
      <div className="flex flex-col justify-center space-x-0 space-y-4 md:space-y-0  md:flex-row md:space-x-6">
        <ReduceFootprint />
        <WhyCare />
        <Limitations />
      </div>
    </div>
  );
};

export default Improvements;
