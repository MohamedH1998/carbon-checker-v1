import { Disclosure } from '@headlessui/react';
import { ReactNode } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

interface Props {
  iconColor: string;
  title: string;
  icon: ReactNode;
  text: string;
}

export default function Dropdown({ iconColor, title, icon, text }: Props) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-sm font-medium">
            <div className="w-full flex items-center justify-start space-x-4">
              <i className={`sm:text-4xl text-lg p-3 rounded-xl ${iconColor}`}>
                {icon}
              </i>
              <h6 className="font-medium text-lg">{title}</h6>
            </div>
            <BsChevronUp
              className={`${
                open ? 'rotate-180 transform' : ''
              } text-xl font-bold text-powder-white self-center`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 py-4 text-sm text-gray-400">
            <p className="text-heather-field text-base sm:text-lg sm:w-1/2 md:w-full">
              {text}
            </p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
