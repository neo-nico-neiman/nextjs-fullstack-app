import PrimaryLayout from '@components/layouts/primary/PrimaryLayout';
import Search from '@components/utility/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      logo
      <Search />
      lang toggle
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
