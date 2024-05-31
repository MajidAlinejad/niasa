'use client';

import React from 'react';
import { useParams } from 'next/navigation';

type Props = {};

const Checkout = (props: Props) => {
  const params = useParams<{ ':id': string }>();
  const id = params[':id'];
  return (
    <div className="grid justify-center items-center h-full text-[16px] text-text font-semibold">
      Checkout plan with id :{id}
    </div>
  );
};

export default Checkout;
