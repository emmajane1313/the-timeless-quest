import { useEffect, useState } from "react";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      fetch(
        "https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test1"
      )
        .then((res) => res.json())
        .then((data) => {
          setImages1(data?.data.map((item) => item.data));
        });

      fetch(
        "https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test2"
      )
        .then((res) => res.json())
        .then((data) => {
          setImages2(data?.data.map((item) => item.data));
        });
    };

    fetchContents();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 CC0 Open Library</title>
        <meta name="description" content="Web3 CC0 Open Library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.section1}>
          <h1 className={styles.title}>Web3 CC0 Open Library</h1>
          <h3 className={styles.subText}>
            The Web3 CC0 Open Library is a curated assemblage of content and
            projects within web3 that are entirely CC0. The index provides
            creators with a generative discovery mechanism for CC0 source
            content, featured original CC0 works, and the means to amplify their
            greatest derivatives.
          </h3>
        </section>

        <section className={styles.section2}>
          {images1.map((item) => (
            <div className={styles.sliderItem} key={item.image}>
              <img className={styles.sliderImage} src={item.image} />
              <div className={styles.sliderBody}>
                <p className={styles.sliderTitle}>{item.title}</p>
                <p className={styles.sliderDescription}>{item.description}</p>
                <a
                  className={styles.sliderBuyNow}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View & Collect{" "}
                </a>
              </div>
            </div>
          ))}
        </section>
        <section className={styles.section5} />

        <section className={styles.section3}>
          {images2.map((item) => (
            <div className={styles.sliderItem} key={item.image}>
              <img className={styles.sliderImage} src={item.image} />
              <div className={styles.sliderBody}>
                <p className={styles.sliderTitle}>{item.title}</p>
                <p className={styles.sliderDescription}>{item.description}</p>
                <a
                  className={styles.sliderBuyNow}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View & Collect{" "}
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section4}>
          <h1 className={styles.title}>CC0 Index</h1>
          <ul>
            <li>
              <a href="https://www.cryptoadz.io/" target= "_blank" rel="noreferrer">Cryptoadz</a>
            </li>
            <li>
              <a href="https://www.blitmap.com/" target= "_blank" rel="noreferrer">Blitmap</a>
            </li>
            <li>
              <a href="https://nouns.wtf/" target= "_blank" rel="noreferrer">Nouns</a>
            </li>
            <li>
              <a href="https://opensea.io/collection/8megs" target= "_blank" rel="noreferrer">8megs</a>
            </li>
            <li>
              <a href="https://docs.f3manifesto.xyz/" target= "_blank" rel="noreferrer">F₃Manifesto</a>
            </li>
            <li>
              <a href="https://technomorph.gitbook.io/technomorph/overv1ew/intro" target= "_blank" rel="Techn0m0rph">8megs</a>
            </li>
            <li>
              <a href="https://twitter.com/HimeXRealm" target= "_blank" rel="HimeX">8megs</a>
            </li>
            <li>
              <a href="https://blitnauts.blitmap.com/" target= "_blank" rel="noreferrer">Blitnauts</a>
            </li>
            <li>
              <a href="https://www.chainrunners.xyz/faq" target= "_blank" rel="noreferrer">Chain Runners</a>
            </li>
            <li>
              <a href="https://linktr.ee/heroesnftcollection" target= "_blank" rel="noreferrer">Merlin the Blue</a>
            </li>
            <li>
              <a href="http://digitalax.xyz/" target= "_blank" rel="noreferrer">DIGITALAX</a>
            </li>
            <li>
              <a href="designers.digitalax.xyz/" target= "_blank" rel="noreferrer">Global Designer Network</a>
            </li>
            <li>
              <a href="https://models.digitalax.xyz/" target= "_blank" rel="noreferrer">Global Models Sydnicate</a>
            </li>
            <li>
              <a href="https://digifizzy.xyz/" target= "_blank" rel="noreferrer">DIGIFIZZY</a>
            </li>
            <li>
              <a href="https://www.arpeggi.io/" target= "_blank" rel="noreferrer">Arpeggi Labs</a>
            </li>
            <li>
              <a href="https://opensea.io/collection/larva-lads" target= "_blank" rel="noreferrer">Larva Lads</a>
            </li>
            <li>
              <a href="https://opensea.io/collection/uma-no-copyright" target= "_blank" rel="noreferrer">UMA NO COPYRIGHT</a>
            </li>
            <li>
              <a href="https://opensea.io/collection/mfers" target= "_blank" rel="noreferrer">mfers</a>
            </li>
            <li>
              <a href="https://hyperlootproject.com/" target= "_blank" rel="noreferrer">Hyperloot</a>
            </li>
            <li>
              <a href="https://www.lootproject.com/" target= "_blank" rel="noreferrer">Loot</a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
