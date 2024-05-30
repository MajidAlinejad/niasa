'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr';
import React from 'react';
import { useParams } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';

import { IPersons } from 'src/interfaces';

import InfoCapsule from './infoCapsule';

type Props = {};

const GreenInfo = (props: Props) => {
  const params = useParams<{ ':id': string }>();
  const id = params[':id'];
  const { data } = useSWR<AxiosResponse<IPersons>>(`/api?id=${id}`, axios);
  return (
    <section className="flex flex-col gap-[16px]">
      <InfoCapsule colorMode="Green" tag="Your food taste:" value={data?.data.foodTaste} />
      <InfoCapsule colorMode="Green" tag="Your lifestyle:" value={data?.data.lifestyle} />
      <InfoCapsule colorMode="Green" tag="Metabolism:" value={data?.data.Metabolism} />
    </section>
  );
};

export default GreenInfo;
