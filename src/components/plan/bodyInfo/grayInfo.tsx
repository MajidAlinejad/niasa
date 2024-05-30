import React from 'react';

import { Stack } from '@mui/material';

import InfoCapsule from './infoCapsule';

type Props = {};

const GrayInfo = (props: Props) => (
  <Stack direction="column" spacing={2}>
    <InfoCapsule colorMode="Gray" tag="Your current weight:" value="78 Kg" />
    <InfoCapsule colorMode="Gray" tag="Your height:" value="178 cm" />
    <InfoCapsule colorMode="Gray" tag="Fitness level:" value="Intermediate" />
  </Stack>
);

export default GrayInfo;
