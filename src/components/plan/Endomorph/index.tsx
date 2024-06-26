'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr';
import React from 'react';
import { useParams } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';

import { IPersons } from 'src/interfaces';
import { ManVector } from 'src/assets/svgs/man';
import { WomanVector } from 'src/assets/svgs/woman';

type Props = {};

const Endomorph = (props: Props) => {
  const params = useParams<{ ':id': string }>();
  const id = params[':id'];
  const { data } = useSWR<AxiosResponse<IPersons>>(`/api?id=${id}`, axios);
  return (
    <div className="border-2 border-gray rounded-[28px] flex items-center justify-center flex-col pt-[32px]">
      <span className="text-[24px] text-text">Endomorph</span>
      {data?.data.gender === 'male' ? <ManVector /> : ''}
      {data?.data.gender === 'female' ? <WomanVector /> : ''}
    </div>
  );
};

export default Endomorph;
