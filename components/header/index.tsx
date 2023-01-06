import React, { useEffect } from 'react';
import { IoEarthSharp } from 'react-icons/io5';
import Button from '../button';
import { Gradient } from '../../utils/gradient';

const Header = () => {
  useEffect(() => {
    if (!window) {
      return;
    }
    const gradient = new Gradient(
      document.querySelector('#gradient-canvas'),
      window.innerWidth,
      window.innerHeight
    );
    // @ts-ignore
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <div className="relative bg-powder-white rounded-xl px-7 pt-2 pb-14 space-y-8 z-[999] md:py-4 md:space-y-10 md:px-20">
      <canvas
        id="gradient-canvas"
        className="absolute top-0 left-0 rounded-xl z-[-99]"
        data-transition-in
      ></canvas>
      <div className="flex items-center justify-between z-[999]">
        <i className="text-big-stone text-3xl">
          <IoEarthSharp />
        </i>
        <Button>Try now</Button>
      </div>
      <h1 className="text-3xl uppercase text-big-stone z-1 md:text-7xl md:px-20 md:pb-10 md:w-9/12">
        Estimate your website's carbon footprint
      </h1>
    </div>
  );
};

export default Header;
