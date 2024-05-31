/* eslint-disable react/button-has-type */

'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr';
import NProgress from 'nprogress';
import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useParams, useRouter } from 'next/navigation';

import { IPersons } from 'src/interfaces';

import PlanCard from '../card';

type Props = {};
type IRes = {
  url: string;
};

const MakePayment = (props: Props) => {
  const params = useParams<{ ':id': string }>();
  const navigation = useRouter();
  const id = params[':id'];
  const { data } = useSWR<AxiosResponse<IPersons>>(`/api?id=${id}`, axios);
  const [selected, onSelect] = useState<number | undefined>();

  function sendReq() {
    NProgress.start();
    axios
      .post<IRes>(
        '/api/checkout',
        {
          id: selected,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        navigation.push(`${res.data.url}/${selected}`);
        NProgress.done();
      });
  }

  return (
    <div className=" col-span-1 md:col-span-2 flex flex-col justify-center items-center gap-[65px]">
      <div className="flex xl:gap-x-[34px] gap-y-[8px]  xl:flex-row flex-col w-full ">
        {data?.data.availablePlans.map((plans) => (
          <PlanCard key={plans.id} {...plans} selected={selected} onSelect={onSelect} />
        ))}
      </div>
      <button
        onClick={() => sendReq()}
        disabled={!selected}
        className="bg-green hover:bg-greenLight cursor-pointer w-[432px] h-[56px] rounded-[32px] text-[16px] disabled:opacity-25 "
      >
        Make Payment
      </button>
    </div>
  );
};

export default MakePayment;
