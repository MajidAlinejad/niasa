import BMI from 'src/components/plan/BMI';
import Endomorph from 'src/components/plan/Endomorph';
import GrayInfo from 'src/components/plan/bodyInfo/grayInfo';
import GreenInfo from 'src/components/plan/bodyInfo/greenInfo';

export const metadata = {
  title: 'register your plan!',
};

export default function Plans() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[16px]">
      <Endomorph />
      <BMI />
      <GrayInfo />
      <GreenInfo />
    </div>
  );
}
