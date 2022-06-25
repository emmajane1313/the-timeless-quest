import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainQuest from "../components/MainQuest";
import styles from "../styles/Home.module.scss";
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
          <img src="/../images/clockbackground1.png" className={styles.firstImage} />
          <MainQuest className={styles.mainQuest}/>

          <h1 className={styles.h1}>DITCH THE FOMO.</h1>
          <h2 className={styles.h2}>The web3 way to own your timeline.</h2>

          <img src="/../images/messageBoard.png" className={styles.messageBoard} />

          <img src="/../images/girl_1.png" className={styles.girl1} />
          <img src="/../images/girl_2.png" className={styles.girl2} />

          <img src="/../images/hackathonclock2.png" className={styles.bottomImage} />

          <div className={styles.button}>
            <ConnectButton label="Begin Quest" showBalance={false} chainStatus="icon" accountStatus={{ smallScreen: 'avatar', largeScreen: 'full', }}/>
          </div>
      </main>

      <Footer />
    </div>
  );
}