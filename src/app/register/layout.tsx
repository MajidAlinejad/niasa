'use client';

import PlanLayout from 'src/layouts/plan';
import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthGuard>
      <PlanLayout>{children}</PlanLayout>
    </AuthGuard>
  );
}
