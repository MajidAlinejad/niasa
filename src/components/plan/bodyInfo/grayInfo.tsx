'use client';

import React from 'react';

import InfoCapsule from './infoCapsule';

type Props = {};

const GrayInfo = (props: Props) => (
  <section className="flex flex-col gap-[16px]">
    <InfoCapsule colorMode="Gray" tag="Your current weight:" value="78 Kg" />
    <InfoCapsule colorMode="Gray" tag="Your height:" value="178 cm" />
    <InfoCapsule colorMode="Gray" tag="Fitness level:" value="Intermediate" />
  </section>
);

export default GrayInfo;
