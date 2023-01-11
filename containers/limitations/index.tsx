import React from 'react';
import { IoGitNetworkSharp, IoHardwareChip } from 'react-icons/io5';
import { VscDeviceMobile } from 'react-icons/vsc';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { MdOutlineCenterFocusStrong } from 'react-icons/md';

const Limitations = () => {
  return (
    <section className="border-2 border-iron  text-powder-white rounded-xl mt-10 md:mt-0 py-10 px-1 flex flex-col items-center justify-start md:w-7/12">
      <div className="self-start px-4">
        <small className="rounded-md text-lg bg-gradient-to-r from-off-black to-renaissance text-kittens-eye px-3 py-2">
          <i className="inline-block text-2xl pr-2 align-sub">
            <AiFillQuestionCircle />
          </i>
          Limitations
        </small>
      </div>
      <div className="self-start px-10 pt-16">
        <ul className="list-decimal space-y-2 pl-4">
          <li>
            The potential margin of error widens the broader your system
            boundaries get.
          </li>
          <li>
            We only test the homepage, to test all the pages in your website we
            would have to add a script.
          </li>
          <li>
            In our calculations, we assume that all users are new visitors to
            your page.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Limitations;
