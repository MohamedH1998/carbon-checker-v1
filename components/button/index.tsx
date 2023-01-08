import React, { ReactNode } from 'react';

interface Props {
  children: string | ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-off-black text-xs font-light text-white px-3 py-1 rounded-full md:text-base md:px-4"
    >
      {children}
    </button>
  );
};

export default Button;
