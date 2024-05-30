// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import React from 'react';

type Props = {
  tag: string;
  value?: string;
  colorMode: 'Green' | 'Gray';
};

const InfoCapsule = ({ tag, value, colorMode }: Props) => (
  <div
    className={clsx(
      ' rounded-[32px] h-[88px] flex items-center justify-center gap-[16px] text-text',
      colorMode === 'Gray' ? 'bg-gray' : 'bg-greenDisable'
    )}
  >
    <span className="text-[14px] font-semibold">{tag}</span>
    <span className="text-[24px]">{value}</span>
  </div>
);

export default InfoCapsule;
