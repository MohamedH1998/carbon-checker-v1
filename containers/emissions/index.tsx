import Image from 'next/image';
import React from 'react';

const Emissions = () => {
  return (
    <div className="border-2 border-dover-grey text-powder-white rounded-xl py-4 px-3 flex mx-2 md:shrink md:w-5/12 md:pt-4">
      <div className="w-full flex flex-col items-start justify-between">
        <div className="flex items-center justify-between text-xl">
          <p>The Internet is responsible for 3% of global carbon emissions.</p>
          <Image
            className="w-4/12 md:w-full"
            src="/rocket.png"
            width="200"
            height="200"
            alt="Rocket"
          />
        </div>
        <div className="space-y-2 py-4">
          <small className="text-xs block">
            Roughly equivalent to the aviation industry
          </small>
          <small className="text-xs block">
            International Energy Agency, 2019
          </small>
        </div>
      </div>
    </div>
  );
};

export default Emissions;
