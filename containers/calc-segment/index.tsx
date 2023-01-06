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
    <div className="border-2 border-dover-grey text-powder-white rounded-xl py-4 px-1 flex flex-col items-center justify-center mx-2 md:shrink md:w-4/12">
      <div className="flex items-center md:self-start md:px-4">
        <small className="rounded-md bg-gradient-to-r from-off-black to-storm-dust text-sandpiper px-3 py-2">
          <i className="inline-block text-xl pr-2 align-bottom">
            <IoFootsteps />
          </i>
          Carbon footprints
        </small>
        <small className="rounded-md  bg-gradient-to-r from-off-black to-renaissance text-kittens-eye px-3 py-2">
          <i className="inline-block text-xl pr-2 align-bottom">
            <IoCalculator />
          </i>
          Carbon footprint
        </small>
      </div>
      <div className="self-start px-10 py-8">
        <ul className="space-y-1">
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
      <div className="self-start px-4 space-y-3">
        <h4 className="text-powder-white text-2xl">System Segments</h4>
        <p className="block">
          The system segments and percentages used in the calculations are based
          on Anders Andrae’s study
        </p>
      </div>
    </div>
  );
};

export default CalcSegment;
