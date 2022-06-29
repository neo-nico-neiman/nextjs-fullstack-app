import Footer from '@components/navigation/Footer';
import Header from '@components/navigation/Header';
import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>GoogleX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        <Header className="sticky top-0" />
        <main>{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
