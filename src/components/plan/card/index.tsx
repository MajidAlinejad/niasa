/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import React from 'react';

import { IAvailablePlans } from 'src/interfaces';

interface Props extends IAvailablePlans {
  selected?: number;
  onSelect?: (id: number) => void;
}

const PlanCard = ({
  id,
  description,
  discountPrice,
  popular,
  price,
  title,
  onSelect,
  selected,
}: Props) => {
  const isSelected = selected === id;
  return (
    <div
      className={clsx(
        'xl:h-[328px]  flex items-end rounded-[32px] grow relative',
        popular ? 'bg-green h-[300px]' : 'bg-transparent h-[252px]'
      )}
    >
      <h2
        className="absolute top-0 -translate-x-1/2 left-1/2 translate-y-[12px] text-[18px] text-white"
        hidden={!popular}
      >
        Most Popular
      </h2>
      <div
        onClick={() => onSelect?.(id as number)}
        className={clsx(
          ' xl:h-[280px] h-[252px] text-text rounded-[32px]  grow cursor-pointer px-[32px] pt-[32px] pb-[38px] flex flex-col justify-between',
          isSelected ? 'bg-text' : 'bg-gray'
        )}
      >
        <h2 className={clsx('text-[24px]', isSelected ? 'text-white' : 'text-text')}>{title}</h2>
        <p className={clsx('text-[16px]', isSelected ? 'text-white' : 'text-text')}>
          {description}
        </p>
        <div className="flex flex-col">
          <span className="text-[18px] text-disableText line-through">{price}</span>
          <div className="flex items-baseline">
            <span className="text-disableText text-[24px] ">$</span>
            <span className={clsx('text-[32px]', isSelected ? 'text-white' : 'text-text')}>
              {discountPrice}
            </span>
            <span className="text-[#F41616] text-[16px]">(Special discount)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
