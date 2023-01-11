import React, { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  description: string;
  stat: string;
  skeleton?: boolean;
  loadingData?: boolean;
}

const Card = ({
  icon,
  description,
  stat,
  skeleton,
  loadingData,
}: CardProps) => {
  return (
    <div
      className={`flex items-center justify-start py-2 w-full ${
        loadingData && 'animate-pulse'
      }`}
    >
      {icon}

      {loadingData ? (
        <div className="space-y-2 pl-3">
          <div className="h-3 bg-iron rounded w-36"></div>
          <div className="h-3 bg-iron rounded w-[200px]"></div>
          <div className="h-3 bg-iron rounded w-[200px]"></div>{' '}
        </div>
      ) : (
        <div className="space-y-2 pl-3">
          <small>{description}</small>
          <p className="text-xl md:text-2xl">{stat}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
