import React from 'react';
import Section from '../../components/section';

const WhyCare = () => {
  return (
    <Section
      title="Why measure your site’s carbon footprint?"
      subtitle="Why care?"
      className="border-2 border-iron rounded-xl md:w-7/12"
    >
      <p className="py-4">
        The carbon emissions of a website can have a significant impact on the
        environment. In fact, the internet is responsible for approximately 3%
        of global carbon emissions, and this number is expected to continue
        rising.
        <br />
        <br />
        By measuring and reducing the carbon footprint of your website, you can
        help to combat this trend and do your part to protect the planet. Every
        website has the potential to make a difference, and every little bit
        helps.
      </p>
    </Section>
  );
};

export default WhyCare;
