'use client';

import PlanLayout from 'src/layouts/plan';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <PlanLayout>{children}</PlanLayout>;
}
