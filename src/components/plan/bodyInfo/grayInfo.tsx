'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr';
import React from 'react';
import { useParams } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';

import { IPersons } from 'src/interfaces';

import InfoCapsule from './infoCapsule';

type Props = {};

const GrayInfo = (props: Props) => {
  const params = useParams<{ ':id': string }>();
  const id = params[':id'];
  const { data } = useSWR<AxiosResponse<IPersons>>(`/api?id=${id}`, axios);

  return (
    <section className="flex flex-col gap-[16px]">
      <InfoCapsule
        colorMode="Gray"
        tag="Your current weight:"
        value={`${data?.data.currentWeight} Kg`}
      />
      <InfoCapsule colorMode="Gray" tag="Your height:" value={`${data?.data.height} Cm`} />
      <InfoCapsule colorMode="Gray" tag="Fitness level:" value={data?.data.FitnessLevel} />
    </section>
  );
};

export default GrayInfo;
