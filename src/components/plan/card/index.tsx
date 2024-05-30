// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import React from 'react';

import { IAvailablePlans } from 'src/interfaces';

interface Props extends IAvailablePlans {
  selected?: boolean;
  onSelect?: () => void;
}

const PlanCard = ({
  description,
  discountPrice,
  popular,
  price,
  title,
  onSelect,
  selected,
}: Props) => {
  console.log(selected);
  return (
    <div
      className={clsx(
        'md:h-[328px] h-[300px] flex items-end rounded-[32px] grow relative',
        popular ? 'bg-green' : 'bg-transparent'
      )}
    >
      <h2
        className="absolute top-0 -translate-x-1/2 left-1/2 translate-y-[12px] text-[18px] text-white"
        hidden={!popular}
      >
        Most Popular
      </h2>
      <div className="bg-gray md:h-[280px] h-[252px] text-text rounded-[32px]  grow cursor-pointer px-[32px] pt-[32px] pb-[38px] flex flex-col justify-between ">
        <h2 className="text-[24px]">{title}</h2>
        <p className="text-[16px]">{description}</p>
        <div className="flex flex-col">
          <span className="text-[18px] text-disableText line-through">{price}</span>
          <div className="flex items-baseline">
            <span className="text-disableText text-[24px] ">$</span>
            <span className="text-[32px]">{discountPrice}</span>
            <span className="text-[#F41616] text-[16px]">(Special discount)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
