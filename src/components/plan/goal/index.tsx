'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr';
import React from 'react';
import { Icon } from '@iconify/react';
import { useParams } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';

import { IPersons } from 'src/interfaces';
import { ManGoal } from 'src/assets/svgs/goal/manGoal';
import { WomanGoal } from 'src/assets/svgs/goal/womanGoal';
import { ManCurrent } from 'src/assets/svgs/goal/manCurrent';
import { WomanCurrent } from 'src/assets/svgs/goal/womanCurrent';

type Props = {};

const Goal = (props: Props) => {
  const params = useParams<{ ':id': string }>();
  const id = params[':id'];
  const { data } = useSWR<AxiosResponse<IPersons>>(`/api?id=${id}`, axios);

  return (
    <div className="flex flex-col col-span-1 lg:col-span-2 gap-y-[16px]">
      <section className="flex w-full min-h-[240px] max-h-[380px] gap-x-[16px] relative">
        <div className="rounded-[32px] bg-gray grow h-[240px] lg:h-[380px] flex justify-center items-center flex-col gap-y-[23px] ">
          <span className="bg-white text-text h-[56px] flex items-center justify-center lg:w-[152px] w-[136px] rounded-[28px]  absolute  lg:top-[25px] top-[16px] ">
            Now
          </span>
          {data?.data.gender === 'female' ? (
            <WomanCurrent className="lg:w-[183px] lg:h-[276px] w-[85px] h-[131px] absolute bottom-0 " />
          ) : (
            ''
          )}
          {data?.data.gender === 'male' ? (
            <ManCurrent className="lg:w-[183px] lg:h-[231px] w-[130px] h-[150px] absolute bottom-0 " />
          ) : (
            ''
          )}
        </div>
        <Icon
          className="lg:p-[36px] p-[18px] lg:h-[96px] lg:w-[96px] h-[56px] w-[56px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#C9D6E2]"
          icon="ph:caret-right"
        />
        <div className="rounded-[32px] bg-gray grow h-[240px] lg:h-[380px] flex justify-center items-center flex-col gap-y-[23px] ">
          <span className="bg-white text-text h-[56px] flex items-center justify-center lg:w-[152px] w-[136px] rounded-[28px] absolute  lg:top-[25px] top-[16px]  ">
            Your goal
          </span>
          {data?.data.gender === 'female' ? (
            <WomanGoal className="lg:w-[183px] lg:h-[276px] w-[85px] h-[131px] absolute bottom-0 " />
          ) : (
            ''
          )}
          {data?.data.gender === 'male' ? (
            <ManGoal className="lg:w-[196px] lg:h-[231px] w-[130px] h-[150px] absolute bottom-0 " />
          ) : (
            ''
          )}
        </div>
      </section>
      <section className="rounded-[28px] h-[88px] flex items-center justify-around border-2 border-gray relative">
        <span className="text-[14px] lg:text-[16px]">Excess body fat</span>
        <Icon
          width={40}
          height={40}
          className="p-[8px] border-2 border-gray rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          icon="ph:caret-right"
        />
        <span className="text-[14px] lg:text-[16px]">Normal body fat</span>
      </section>
      <section className="rounded-[28px] h-[88px] flex items-center justify-around border-2 border-gray relative">
        <div className="flex items-center justify-center gap-[16px]">
          <span className="text-[12px] lg:text-[14px] font-semibold">Current weight:</span>
          <span className="text-[16px] lg:text-[24px]">{data?.data.currentWeight} Kg</span>
        </div>
        <Icon
          width={40}
          height={40}
          className="p-[8px] border-2 border-gray rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          icon="ph:caret-right"
        />
        <div className="flex items-center justify-center gap-[16px]">
          <span className="text-[12px] lg:text-[14px] font-semibold">Ideal weight:</span>
          <span className="text-[16px] lg:text-[24px]">70 Kg</span>
        </div>
      </section>
    </div>
  );
};

export default Goal;
