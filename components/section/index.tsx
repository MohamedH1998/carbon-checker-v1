import React, { ReactNode } from 'react';

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}

const Section = React.forwardRef<Ref, Props>(
  ({ title, subtitle, children, className }, ref) => (
    <section
      ref={ref && ref}
      className={`w-full py-5 px-4 text-powder-white flex flex-col md:items-between md:px-6 ${
        className && className
      }`}
    >
      <div className="w-full">
        <small className="block text-dover-grey uppercase my-2">
          {subtitle}
        </small>
        <h5 className="text-2xl font-medium">{title}</h5>
      </div>
      {children}
    </section>
  )
);
export default Section;
