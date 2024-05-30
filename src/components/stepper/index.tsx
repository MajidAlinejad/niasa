// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import React from 'react';
import { Icon } from '@iconify/react';

type Props = {};
const steps = [
  'Basic Questions',
  'Choose a plan',
  'Payment process',
  'Basic information',
  'Enjoy the plan!',
];

const RegisterPlanStepper = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <section className="flex w-full">
      {steps.map((step, inx) => (
        <StepComponent key={inx} {...{ inx, step, activeStep }} />
      ))}
    </section>
  );
};

export default RegisterPlanStepper;

//
function StepComponent({
  activeStep,
  inx,
  step,
}: {
  inx: number;
  step: string;
  activeStep: number;
}): React.JSX.Element {
  const Typography = (
    <span
      className={clsx(
        'h-[32px] max-w-[60px] md:h-[32px] font-semibold md:max-w-[81px] text-[12px] md:text-[14px] text-center select-none ',
        inx < activeStep && '!text-green',
        inx === activeStep ? 'text-text' : 'text-disableText'
      )}
    >
      {step}
    </span>
  );
  //
  const Border = (
    <hr
      className={clsx(
        'absolute border-t-2 w-full border-gray inset-0 translate-x-1/2 translate-y-[18px] -z-10',
        inx < activeStep && 'border-greenLight'
      )}
      hidden={inx === steps.length - 1}
    />
  );
  //
  const Circle = (
    <circle
      className={clsx(
        'h-[40px] w-[40px]  rounded-full font-semibold flex items-center justify-center text-[14px] select-none',
        inx < activeStep && '!bg-greenLight border-none ',
        inx === activeStep
          ? 'bg-gray border-none text-text'
          : 'bg-white border-gray border-2 text-disableText'
      )}
    >
      {inx < activeStep ? (
        <Icon icon="lets-icons:check-fill" color="white" width={24} height={24} />
      ) : (
        (inx + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
      )}
    </circle>
  );
  //
  return (
    <div className="flex flex-col items-center justify-center gap-[8px] cursor-pointer grow relative">
      {Circle}
      {Border}
      {Typography}
    </div>
  );
}
