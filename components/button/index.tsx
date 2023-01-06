import React, { ReactNode } from 'react';

interface Props {
  children: string | ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <div className="bg-off-black text-xs font-light text-white px-3 py-1 rounded-full md:text-base md:px-4">
      {children}
    </div>
  );
};

export default Button;
