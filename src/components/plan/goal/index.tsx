'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr';
import React from 'react';
import { Icon } from '@iconify/react';
import { useParams } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';

import { IPersons } from 'src/interfaces';
import { WomanGoal } from 'src/assets/svgs/goal/womanGoal';
import { WomanCurrent } from 'src/assets/svgs/goal/womanCurrent';

type Props = {};

const Goal = (props: Props) => {
  const params = useParams<{ ':id': string }>();
  const id = params[':id'];
  const { data } = useSWR<AxiosResponse<IPersons>>(`/api?id=${id}`, axios);

  return (
    <div className="flex flex-col col-span-1 lg:col-span-2 gap-y-[16px]">
      <section className="flex w-full min-h-[240px] max-h-[380px] gap-x-[16px] relative">
        <div className="rounded-[32px] bg-gray grow h-full flex justify-center items-center flex-col gap-y-[23px] lg:pt-[25px] pt-[16px]">
          <span className="bg-white text-text h-[56px] flex items-center justify-center lg:w-[152px] w-[136px] rounded-[28px]   ">
            Now
          </span>

          <WomanCurrent />
        </div>
        <Icon
          width={96}
          height={96}
          className="p-[36px]  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#C9D6E2]"
          icon="ph:caret-right"
        />
        <div className="rounded-[32px] bg-gray grow h-full flex justify-center items-center flex-col gap-y-[23px] lg:pt-[25px] pt-[16px]">
          <span className="bg-white text-text h-[56px] flex items-center justify-center lg:w-[152px] w-[136px] rounded-[28px]   ">
            Your goal
          </span>
          <WomanGoal />
        </div>
      </section>
      <section className="rounded-[28px] h-[88px] flex items-center justify-around border-2 border-gray relative">
        <span>Excess body fat</span>
        <Icon
          width={40}
          height={40}
          className="p-[8px] border-2 border-gray rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          icon="ph:caret-right"
        />
        <span>Normal body fat</span>
      </section>
      <section className="rounded-[28px] h-[88px] flex items-center justify-around border-2 border-gray relative">
        <div className="flex items-center justify-center gap-[16px]">
          <span className="font-semibold">Current weight:</span>
          <span className="text-[24px]">{data?.data.currentWeight} Kg</span>
        </div>
        <Icon
          width={40}
          height={40}
          className="p-[8px] border-2 border-gray rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          icon="ph:caret-right"
        />
        <div className="flex items-center justify-center gap-[16px]">
          <span className="font-semibold">Ideal weight:</span>
          <span className="text-[24px]">70 Kg</span>
        </div>
      </section>
    </div>
  );
};

export default Goal;
