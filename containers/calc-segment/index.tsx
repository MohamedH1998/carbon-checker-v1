import React from 'react';
import {
  IoFootsteps,
  IoCalculator,
  IoGitNetworkSharp,
  IoHardwareChip,
} from 'react-icons/io5';
import { VscDeviceMobile } from 'react-icons/vsc';
import { MdOutlineCenterFocusStrong } from 'react-icons/md';

const CalcSegment = () => {
  return (
    <section className="px-6 py-6 space-y-8 border-2 border-iron text-powder-white rounded-xl flex flex-col items-start justify-center md:w-4/12">
      <div className="">
        <small className="rounded-md  bg-gradient-to-r from-off-black to-renaissance text-kittens-eye pr-2 py-2 md:text-lg">
          <i className="inline-block text-xl md:text-2xl pr-2 align-bottom">
            <IoCalculator />
          </i>
          Carbon footprint
        </small>
      </div>
      <div className="">
        <ul className="md:grid md:grid-rows-2 md:grid-flow-col md:gap-2 md:items-baseline flex flex-col items-start justify-start space-y-4">
          <li className="text-dover-grey">
            <i className="inline-block text-xl pr-2 align-bottom">
              <VscDeviceMobile />
            </i>
            Device use
          </li>
          <li className="text-dover-grey">
            <i className="inline-block text-xl pr-2 align-bottom">
              <IoGitNetworkSharp />
            </i>
            Network use
          </li>
          <li className="text-dover-grey">
            <i className="inline-block text-xl pr-2 align-bottom">
              <MdOutlineCenterFocusStrong />
            </i>
            Data center use
          </li>
          <li className="text-dover-grey">
            <i className="inline-block text-xl pr-2 align-bottom">
              <IoHardwareChip />
            </i>
            Hardware production
          </li>
        </ul>
      </div>
      <div className="">
        <h4 className="text-powder-white text-2xl md:text-3xl font-medium">
          System Segments
        </h4>
        <p className="block py-2">
          We have defined broad system boundaries for a comprehensive carbon
          footprint and segmented impact for more insight.
        </p>
      </div>
    </section>
  );
};

export default CalcSegment;
