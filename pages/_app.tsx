import Providers from '@state/providers';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import './globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>;
}

export default MyApp;
