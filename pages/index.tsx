import PrimaryLayout from '@components/layouts/primary/PrimaryLayout';
import Search from '@components/utility/Search';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const [locale, setLocale] = useState<string>('en');
  return (
    <section className="flex flex-col justify-center items-center mt-12 sm:mt-36 gap-y-5">
      <Image
        src="/images/Google_2015_logo.svg"
        width={272}
        height={92}
        alt="Google logo"
        priority
      />
      <Search />
      <div className="text-sm">
        Google offered in:{' '}
        <Link href="/" locale={locale === 'en' ? 'fr' : 'en'}>
          <a
            className="underline text-blue-600"
            onClick={() => setLocale(locale == 'en' ? 'fr' : 'en')}
          >
            {locale === 'en' ? 'Français' : 'English'}
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
