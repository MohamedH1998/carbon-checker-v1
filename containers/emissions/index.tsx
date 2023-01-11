import Image from 'next/image';
import React from 'react';

const Emissions = () => {
  return (
    <div className="flex flex-col items-start justify-between space-y-4 border-2 border-iron text-powder-white rounded-xl md:w-4/12 py-8 px-6 md:min-w-[250px] tablet:min-w-[480px]">
      <h5 className="text-2xl md:text-3xl font-medium">
        Impact of digital emissions
      </h5>
      <p className="text-lg">
        The Internet devours a staggering 307 gigawatts of electricity every
        year. Responsbile for 3% of global carbon emissions, the emissions
        caused by the Internet are comparable those of the aviation industry.
      </p>
      <small>International Energy Agency, 2019</small>
    </div>
  );
};

export default Emissions;
