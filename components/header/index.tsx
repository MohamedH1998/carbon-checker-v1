import React, { MutableRefObject, useEffect } from 'react';
import { IoEarthSharp } from 'react-icons/io5';
import Button from '../button';
import { Gradient } from '../../utils/gradient';

interface Props {
  calculateRef: MutableRefObject<HTMLDivElement | null>;
}

const Header = ({ calculateRef }: Props) => {
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

  const executeScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (!ref?.current) {
      return;
    }
    document.body.style.position = 'static';
    document.body.style.overflow = 'unset';
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-powder-white rounded-xl px-7 pt-2 pb-20 space-y-8 z-[999] py-20 md:space-y-10 md:px-20">
      <canvas
        id="gradient-canvas"
        className="absolute top-0 left-0 rounded-xl z-[-99]"
        data-transition-in
      ></canvas>
      <div className="flex items-center justify-between z-[999]">
        <i className="text-big-stone text-3xl">
          <IoEarthSharp />
        </i>
        <Button onClick={() => executeScroll(calculateRef)}>Try now</Button>
      </div>
      <h1 className="text-4xl px-0 xs:text-5xl uppercase text-big-stone z-1 md:text-7xl xs:px-10 md:px-20 md:pb-10 w-8/12">
        Estimate your website's carbon footprint
      </h1>
    </div>
  );
};

export default Header;
