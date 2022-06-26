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

          <img src="/../images/bubble.png" className={styles.bubble} />

          <img src="/../images/girl_1.png" className={styles.girl1} />

          <h3 className={styles.h3}>Chart your own course.</h3>
          <h4 className={styles.h4}>Publish & collect nfts that</h4>
          <h5 className={styles.h5}>count.</h5>

          <h6 className={styles.h6}>Turn the clock forward, Not</h6>
          <h7 className={styles.h7}>back... There’s no time to waste!</h7>

          <img src="/../images/girl_2.png" className={styles.girl2} />

          <h8 className={styles.h8}>a web3 social quest</h8>
          <h9 className={styles.h9}>to make all the keys</h9>
          <h10 className={styles.h10}>we get more useful</h10>
          <h11 className={styles.h11}>w/ time</h11>

          <img src="/../images/bubble.png" className={styles.bubble2} />


          <img src="/../images/hackathonclock2.png" className={styles.bottomImage} />

          <div className={styles.button}>
            <ConnectButton label="Begin Quest" showBalance={false} chainStatus="icon" accountStatus={{ smallScreen: 'avatar', largeScreen: 'full', }}/>
          </div>

       
      </main>

      <Footer />
    </div>
  );
}