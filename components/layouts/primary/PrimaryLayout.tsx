import Footer from '@components/navigation/Footer';
import Header from '@components/navigation/Header';
import Head from 'next/head';
import { ReactNode } from 'react';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
}) => {
  return (
    <>
      <Head>
        <title>GoogleX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`min-h-screen flex flex-col ${justify}`}>
        <Header className="sticky top-0" />
        <main className="px-4">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
