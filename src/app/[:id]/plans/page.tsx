import BMI from 'src/components/plan/BMI';
import Goal from 'src/components/plan/goal';
import LossWeight from 'src/components/plan/loss';
import Endomorph from 'src/components/plan/Endomorph';
import PlanSection from 'src/components/plan/section';
import MakePayment from 'src/components/plan/makePayment';
import GrayInfo from 'src/components/plan/bodyInfo/grayInfo';
import GreenInfo from 'src/components/plan/bodyInfo/greenInfo';

export const metadata = {
  title: 'register your plan!',
};

export default function Plans() {
  return (
    <main className="grid gap-y-[120px] py-[95px]">
      <PlanSection title="Here is your wellness profile">
        <Endomorph />
        <BMI />
        <GrayInfo />
        <GreenInfo />
      </PlanSection>
      {/*  */}
      <PlanSection title="By using our plans, you can reach your goal">
        <Goal />
      </PlanSection>
      {/*  */}
      <PlanSection title="Choose your plan just now!">
        <MakePayment />
      </PlanSection>
      {/*  */}
      <PlanSection title="Your selected 2-month plan is ready!">
        <LossWeight />
      </PlanSection>
    </main>
  );
}
