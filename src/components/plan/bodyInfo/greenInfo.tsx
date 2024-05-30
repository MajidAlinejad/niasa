import React from 'react';

import InfoCapsule from './infoCapsule';

type Props = {};

const GreenInfo = (props: Props) => (
  <section className="flex flex-col gap-[16px]">
    <InfoCapsule colorMode="Green" tag="Your food taste:" value="Vegan" />
    <InfoCapsule colorMode="Green" tag="Your lifestyle:" value="Sedentary" />
    <InfoCapsule colorMode="Green" tag="Metabolism:" value="Moderate, Narrowly" />
  </section>
);

export default GreenInfo;
