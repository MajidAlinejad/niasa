import Header from './header';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function PlanLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="grid pt-[28px] md:pt-[26px] md:px-[220px] px-[26px] ">{children}</main>
    </>
  );
}
