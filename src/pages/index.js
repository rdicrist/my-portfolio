import Hero from '@/components/Hero';

import styles from '../styles/Home.module.css'
// import About from '@/components/About';
// import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
// import Contact from '@/components/Contact';

import Head from "next/head";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ricki's Portfolio</title>
        <meta name="description" content="Ricki's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        {/* <About />
        <Skills />
        <Projects />
        <Contact /> */}
      </div>
    </div>
  );
};

export default Home;