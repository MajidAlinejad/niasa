import React from 'react';

import { Step, Stack, Stepper, StepLabel } from '@mui/material';

type Props = {};
const steps = [
  'BasicQuestions',
  'Choose a plan',
  'Payment process',
  'Basic information',
  'Enjoy the plan!',
];

const RegisterPlanStepper = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <Stack sx={{ width: '100%', fontFamily: 'Mont' }} spacing={4}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{ fontFamily: 'Mont' }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default RegisterPlanStepper;
