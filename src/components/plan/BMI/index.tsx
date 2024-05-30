import React from 'react';

type Props = {};

const BMI = (props: Props) => (
  <div>
    <BmiSlider />
    <h2 className="text-greenLight font-semibold pl-[28px]">Healthy BMI</h2>
    <p className="text-text text-[16px]">
      Your initial body situation is here. It’s crucial for starting a very healthy diet and
      exercise plan.
    </p>
  </div>
);

export default BMI;

function BmiSlider() {
  return <section className="border-2 border-gray rounded-[32px]">yoyo</section>;
}
