import React, { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  description: string;
  stat: string;
  skeleton?: boolean;
}

const Card = ({ icon, description, stat, skeleton }: CardProps) => {
  return (
    <div
      className={`flex items-center justify-start py-2 px-4 w-full ${
        skeleton && 'opacity-30'
      }`}
    >
      {icon}
      <div className="space-y-2 pl-3">
        <small>{description}</small>
        <p className="text-2xl">{stat}</p>
      </div>
    </div>
  );
};

export default Card;
