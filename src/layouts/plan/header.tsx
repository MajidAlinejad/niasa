import { Icon } from '@iconify/react';

import HealthLogo from 'src/components/healthLogo';
import RegisterPlanStepper from 'src/components/stepper';

// ----------------------------------------------------------------------

export default function Header() {
  return (
    <header className="grid grid-cols-6 grid-rows-2 lg:grid-rows-1  lg:h-[112px] border-b px-[17px] lg:px-[46px] pt-[80px] lg:pt-0 gap-y-[46px]  ">
      <section className="col-span-3 lg:col-span-2  flex items-center justify-start pl-[10px]">
        <HealthLogo />
      </section>
      <section className="col-span-6 lg:col-span-2 row-start-2 lg:row-auto  flex items-center justify-center">
        <RegisterPlanStepper />
      </section>
      <section className="col-span-3 lg:col-span-2  flex items-center justify-end">
        <Icon
          icon="mingcute:close-line"
          width={40}
          height={40}
          className="border rounded-full  border-[#F0F4F7] p-[8px] cursor-pointer"
        />
      </section>
    </header>
  );
}
