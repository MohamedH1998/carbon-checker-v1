import Image from 'next/image';
import React from 'react';
import { CgCoffee } from 'react-icons/cg';
import { IoMdRocket } from 'react-icons/io';
import Card from '../../components/card';

const AverageSite = () => {
  const averageInfo = [
    {
      stat: '60kg CO2',
      description: 'Every year, the average website emits',
      icon: (
        <i className="rounded-md p-3 text-sandpiper bg-iron text-3xl md:text-4xl md:p-4 ">
          <IoMdRocket />
        </i>
      ),
    },
    {
      stat: '2,857 cups of coffee ',
      description: 'Equivalent to',
      icon: (
        <i className="rounded-md p-3 text-kittens-eye bg-aeronautic text-3xl md:text-4xl md:p-4">
          <CgCoffee />
        </i>
      ),
    },
  ];
  return (
    // <div className="border-2 border-iron text-powder-white rounded-xl py-6 px-6 mx-2 md:w-4/12 tablet:min-w-[400px]">
    <div className="border-2 border-iron text-powder-white rounded-xl py-6 px-6 md:w-4/12">
      <h5 className="text-2xl md:text-3xl">Average Website</h5>
      <small className="font-light text-sm md:text-base pt-2 block">
        With 10,000 visitors a month
      </small>
      <div className=" flex flex-col items-center justify-center py-4">
        {averageInfo.map((card, i) => (
          <Card
            icon={card.icon}
            description={card.description}
            stat={card.stat}
            key={i}
            loadingData={false}
          />
        ))}
      </div>
      <small className="text-xs md:text-base text-dover-grey">
        As per Website Carbon Calculator
      </small>
    </div>
  );
};

export default AverageSite;
