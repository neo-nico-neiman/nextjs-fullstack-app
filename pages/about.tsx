import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>This is the about page</h1>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
