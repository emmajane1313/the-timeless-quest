import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainQuest from "../components/MainQuest";
import styles from "../styles/Home.module.scss";

export default function Home() {

  return (
    <div className={styles.container}>
     <Head>
        <title>The Timeless Quest</title>
        <meta name="The Timeless Quest" content="Token Powered Scheduling" />
        <link rel="icon" href="/favicon.ico" />
     </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.section1}>
          <img src="/../images/clockbackground1.png" className={styles.firstImage} />
          <MainQuest className={styles.mainQuest}/>
        </section>
      </main>

      <Footer />
    </div>
  );
}
