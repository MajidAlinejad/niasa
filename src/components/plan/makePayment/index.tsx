'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr';
import React from 'react';
import { useParams } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';

import { IPersons } from 'src/interfaces';

import PlanCard from '../card';

type Props = {};

const MakePayment = (props: Props) => {
  const params = useParams<{ ':id': string }>();
  const id = params[':id'];
  const { data } = useSWR<AxiosResponse<IPersons>>(`/api?id=${id}`, axios);

  return (
    <div className="flex gap-[34px] col-span-1 md:col-span-2">
      {data?.data.availablePlans.map((plans) => <PlanCard {...plans} />)}
    </div>
  );
};

export default MakePayment;
