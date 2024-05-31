'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr';
import React from 'react';
import { useParams } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';

import { IPersons } from 'src/interfaces';

type Props = {};

const LossWeight = (props: Props) => {
  const params = useParams<{ ':id': string }>();
  const id = params[':id'];
  const { data } = useSWR<AxiosResponse<IPersons>>(`/api?id=${id}`, axios);
  return (
    <div className="flex flex-col w-full border-2 border-gray rounded-[32px] py-[42px] px-[32px] lg:col-span-2 col-span-1">
      <section className="flex grow items-center justify-start gap-[28px]">
        <FlashIcon />
        <div className="flex flex-col">
          <h2 className="text-text text-[18px] lg:text-[24px] ">Your weight loss</h2>
          <span className="text-disableText text-[14px] lg:text-[16px] ">
            How to reach the purpose?
          </span>
        </div>
        <span className="ml-auto text-text font-semibold text-[32px] lg:text-[48px]">
          {data?.data.lossPercent}%
        </span>
      </section>

      <section className="relative pt-[64px]">
        <div className="text-disableText text-[14px] top-4 left-1 bg-gray rounded-[24px] absolute w-[96px] h-[64px] flex flex-col justify-center items-center rounded-bl-none">
          First day<span className="font-bold text-[18px] text-text">{data?.data.loss[0].w}Kg</span>
        </div>
        <div className="text-disableText right-0 bottom-9 text-[14px] bg-text rounded-[24px] absolute w-[96px] h-[64px] flex flex-col justify-center items-center rounded-br-none">
          Last day
          <span className="font-bold text-[18px] text-white">
            {data?.data.loss[(data?.data.loss.length || 1) - 1].w} Kg
          </span>
        </div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 928 184"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {data?.data.loss
            .sort((a, b) => b.bar - a.bar)
            .map((candle, inx) => (
              <g className="group">
                <rect
                  className="group-hover:fill-greenLight cursor-pointer after:w-20 after:h-20 after:absolute after:bg-red-200 after:content-['_↗']"
                  width="8"
                  height={candle.bar}
                  rx="4"
                  transform={`matrix(-1 0 0 1 ${-16 + 27 * (inx + 1)} ${184 - candle.bar})`}
                  fill="#9BD625"
                />
                <text
                  x={-18 + 24 * (inx + 1)}
                  y={184 - candle.bar}
                  className="translate-y-[12px] select-none group-hover:opacity-100 opacity-0 fill-slate-600 delay-300 duration-200 transition-all "
                >
                  {candle.w} Kg
                </text>
              </g>
            ))}
        </svg>
      </section>

      <section className="text-disableText text-[14px] flex justify-between items-center pt-[16px]">
        <span>The starting</span>
        <span>Middle of plan</span>
        <span>The end</span>
      </section>
    </div>
  );
};

export default LossWeight;
function FlashIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.66953 9.91436L8.73167 5.77133C10.711 3.09327 11.7007 1.75425 12.6241 2.03721C13.5474 2.32018 13.5474 3.96249 13.5474 7.24712V7.55682C13.5474 8.74151 13.5474 9.33386 13.926 9.70541L13.946 9.72466C14.3327 10.0884 14.9492 10.0884 16.1822 10.0884C18.4011 10.0884 19.5106 10.0884 19.8855 10.7613C19.8917 10.7724 19.8977 10.7837 19.9036 10.795C20.2576 11.4784 19.6152 12.3475 18.3304 14.0857L15.2683 18.2287C13.2889 20.9067 12.2992 22.2458 11.3758 21.9628C10.4525 21.6798 10.4525 20.0375 10.4525 16.7528L10.4526 16.4433C10.4526 15.2585 10.4526 14.6662 10.074 14.2946L10.054 14.2754C9.6673 13.9117 9.05079 13.9117 7.81775 13.9117C5.59888 13.9117 4.48945 13.9117 4.1145 13.2387C4.10829 13.2276 4.10225 13.2164 4.09639 13.205C3.74244 12.5217 4.3848 11.6526 5.66953 9.91436Z"
        stroke="#072C50"
        strokeWidth="1.5"
      />
    </svg>
  );
}
