import React from 'react';
import { SlEnergy } from 'react-icons/sl';
import { MdSpeed } from 'react-icons/md';
import { RiPlantFill } from 'react-icons/ri';
import Section from '../../components/section';
import Dropdown from '../../components/dropdown';

const ReduceFootprint = () => {
  const actionArr = [
    {
      title: 'Use an energy-Efficient host',
      icon: <SlEnergy />,
      text: 'A web hosting provider that uses renewable energy and has a strong track record of energy efficiency can help reduce your emissions.',
      iconColor: 'bg-[#524F4C] text-white',
    },
    {
      title: 'Optimize your website',
      icon: <MdSpeed />,
      text: 'A faster loading site uses less energy and generates fewer emissions, there are many ways to optimise for this i.e., optimising images, caching, and reducing number of plugins.',
      iconColor: 'bg-aeronautic text-white',
    },
    {
      title: 'Support reforestation projects',
      icon: <RiPlantFill />,
      text: 'Reforestation and conservation projects can help to absorb carbon dioxide from the atmosphere, offsetting the emissions associated with your website.',
      iconColor: 'bg-green-800 text-white',
    },
  ];
  return (
    <Section
      subtitle="Act now"
      title="Reduce your carbon footprint"
      className="md:border-2 md:border-dover-grey rounded-xl md:w-8/12"
    >
      <div className="flex flex-col space-y-6 md:space-y-0 py-5 items-start justify-between">
        {actionArr.map((action, i) => (
          <Dropdown {...action} key={i} />
        ))}
      </div>
    </Section>
  );
};

export default ReduceFootprint;
