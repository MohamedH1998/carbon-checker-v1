import React from 'react';
import { IoGitNetworkSharp, IoHardwareChip } from 'react-icons/io5';
import { VscDeviceMobile } from 'react-icons/vsc';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { MdOutlineCenterFocusStrong } from 'react-icons/md';

const Limitations = () => {
  return (
    <section className="border-2 border-dover-grey text-powder-white rounded-xl py-10 px-1 flex flex-col items-center justify-start md:w-7/12">
      <div className="self-start px-4">
        <small className="rounded-md  bg-gradient-to-r from-off-black to-renaissance text-kittens-eye px-3 py-2">
          <i className="inline-block text-xl pr-2 align-bottom">
            <AiFillQuestionCircle />
          </i>
          Limitations
        </small>
      </div>
      <div className="self-start px-10 py-8">
        <ul className="list-decimal space-y-2 pl-4">
          <li>
            The potential margin of error widens the broader your system
            boundaries get
          </li>
          <li>
            We only test the homepage, to test all the pages in your website we
            would have to add a script to your site
          </li>
          <li>We assume that all users are new visitors to your page</li>
          <li>Hardware production</li>
        </ul>
      </div>
      {/* <div className="self-start px-4 space-y-3">
        <h4 className="text-powder-white text-2xl">System Segments</h4>
        <p className="block">
          Calculating digital emissions is difficult due to network boundaries.
          We have defined broad system boundaries for a comprehensive carbon
          footprint and segmented impact for more insight.
        </p>
      </div> */}
    </section>
  );
};

export default Limitations;
