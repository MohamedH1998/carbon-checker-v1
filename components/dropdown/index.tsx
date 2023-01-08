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
          <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium">
            <div className="w-full flex items-center justify-start space-x-4">
              <i
                className={`sm:text-4xl text-2xl p-4 sm:mt-5 rounded-xl sm:self-start ${iconColor}`}
              >
                {icon}
              </i>
              <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
            </div>
            <BsChevronUp
              className={`${
                open ? 'rotate-180 transform' : ''
              } text-xl font-bold text-powder-white self-center`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 text-sm text-gray-400">
            <p className="text-heather-field text-base sm:text-lg sm:w-1/2">
              {text}
            </p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
