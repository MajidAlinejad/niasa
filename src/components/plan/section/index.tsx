import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

const PlanSection = ({ title, children }: Props) => (
  <div className="grid lg:grid-cols-2 grid-cols-1 gap-[16px]">
    <h2 className="col-span-1 lg:col-span-2 w-full text-center text-text font-semibold text-[32px] pb-[8px]">
      {title}
    </h2>
    {children}
  </div>
);

export default PlanSection;
