import clsx from 'clsx';
import React from 'react';

type Props = {};

const BMI = (props: Props) => (
  <div>
    <BmiSlider />
    <h2 className="text-greenLight font-semibold pl-[28px]">Healthy BMI</h2>
    <p className="text-text text-[16px] text-justify">
      Your initial body situation is here. It’s crucial for starting a very healthy diet and
      exercise plan.
    </p>
  </div>
);

export default BMI;

function BmiSlider() {
  return (
    <section className="border-2 border-gray rounded-[32px] p-[32px]">
      <div className="flex grow justify-between pb-[64px]">
        <span className="text-text text-[18px] font-extrabold ">BMI</span>
        <span className="text-green text-[14px] font-semibold ">Normal</span>
      </div>
      <div className="flex flex-col gap-[8px]" dir="rtl">
        <div className="flex justify-between items-center">
          {Array(28)
            .fill(1)
            .map((i, inx) => (
              <span key={inx} className="bg-gray w-[2px] h-[24px] rounded-md">
                {/* <span className="absolute -translate-y-4 text-[8px]">{inx + 12}</span> */}
              </span>
            ))}
        </div>
        <div className="relative">
          <div className="flex grow relative">
            <span className="bg-text h-[4px] grow rounded-lg after:w-[12px] after:h-[12px] after:bg-text after:absolute relative after:left-0 after:-translate-x-1/2 after:top-0 after:-translate-y-[4px]  after:z-[10] after:rounded-full after:border-white after:border-[4px]" />
            <span className="bg-greenLight h-[4px] grow rounded-lg after:w-[12px] after:h-[12px] after:bg-text after:absolute relative after:left-0 after:-translate-x-1/2 after:top-0 after:-translate-y-[4px]  after:z-[10] after:rounded-full after:border-white after:border-[4px]" />
            <span className="bg-disableText h-[4px] grow rounded-lg after:w-[12px] after:h-[12px] after:bg-text after:absolute relative after:left-0 after:-translate-x-1/2 after:top-0 after:-translate-y-[4px]  after:z-[10] after:rounded-full after:border-white after:border-[4px]" />
            <span className="bg-text h-[4px] grow rounded-lg  relative " />
          </div>
          <span
            className={clsx(
              'absolute z-[20] w-[16px] h-[16px]  bg-white border-[6px] rounded-full top-[2px] -translate-y-1/2 translate-x-1/2',
              'border-greenLight',
              'right-[50%]'
            )}
          />
          <span
            className={clsx(
              'absolute flex items-center justify-center z-[20] w-[72px] h-[40px] rounded-[20px] -top-[15px] -translate-y-full translate-x-0 rounded-br-none shadow-lg ',
              ' bg-green shadow-[#AAE23A60]',
              'text-white',
              'right-[50%]'
            )}
          >
            23.5
          </span>
        </div>
      </div>
    </section>
  );
}
