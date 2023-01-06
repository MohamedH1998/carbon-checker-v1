import React from 'react'

const RadialProgresBar = () => {
    const radius = 150;
    const stroke = 25;
    const progress = 60;


    const normalizedRadius = radius - stroke * 2;
    
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress / 100 * circumference;
    const fullStrokeDashoffset = circumference + (100 - progress) / 100 * circumference;

  
    return (
        <div x-data="scrollProgress" className="inline-flex items-center justify-center rounded-full bottom-5 left-5 w-full">
        <svg
        height={radius * 2}
        width={radius * 2}
        >
  <circle
          className="stroke-dover-grey"
          strokeDasharray={circumference}
          strokeDashoffset={fullStrokeDashoffset}
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          stroke-width={ stroke }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
        />
        <circle
          fill="transparent"
          className="stroke-vegan-mastermind"
          strokeWidth={ stroke }
          strokeDasharray={ circumference + ' ' + circumference }
          style={ { strokeDashoffset } }
          stroke-width={ stroke }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
          />
      </svg>
      <span className="absolute text-5xl text-center text-white" x-text={progress}>{progress}%</span>
      </div>
    );
}

export default RadialProgresBar