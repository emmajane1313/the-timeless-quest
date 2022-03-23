import { useEffect, useState } from "react";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import Audio from "../components/Audio";

export default function Home() {
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);
  const [images4, setImages4] = useState([]);

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

      fetch(
         "https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test3"
        )
          .then((res) => res.json())
          .then((data) => {
            setImages3(data?.data.map((item) => item.data));
          });
      
      fetch(
        "https://7kuwlltzmc.execute-api.eu-central-1.amazonaws.com/latest/cc0-images?collection=cc0-test4"
        )
          .then((res) => res.json())
          .then((data) => {
            setImages4(data?.data.map((item) => item.data));
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
            <div
              className={styles.sliderItem}
              key={item.audio || item.image || item.video}
            >
              {item.video && (
                <video autoPlay muted loop className={styles.sliderImage}>
                  <source src={item.video} />
                </video>
              )}
              {item.audio && (
                <div className={styles.sliderImage}>
                  <img src={item.image} />
                  <Audio src={item.audio} classNames={styles.audio} />
                </div>
              )}
              {!item.audio && item.image && (
                <img className={styles.sliderImage} src={item.image} />
              )}
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
            <div
              className={styles.sliderItem}
              key={item.audio || item.image || item.video}
            >
              {item.video && (
                <video autoPlay muted loop className={styles.sliderImage}>
                  <source src={item.video} />
                </video>
              )}
              {item.audio && (
                <div className={styles.sliderImage}>
                  <img src={item.image} />
                  <Audio src={item.audio} classNames={styles.audio} />
                </div>
              )}
              {!item.audio && item.image && (
                <img className={styles.sliderImage} src={item.image} />
              )}
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

        <section className={styles.section6}>
           {images3.map((item) => (
            <div
              className={styles.sliderItem}
              key={item.audio || item.image || item.video}
            >
              {item.video && (
                <video autoPlay muted loop className={styles.sliderImage}>
                  <source src={item.video} />
                </video>
              )}
              {item.audio && (
                <div className={styles.sliderImage}>
                  <img src={item.image} />
                  <Audio src={item.audio} classNames={styles.audio} />
                </div>
              )}
              {!item.audio && item.image && (
                <img className={styles.sliderImage} src={item.image} />
              )}
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
        
        <section className={styles.section7}>
           {images4.map((item) => (
            <div
              className={styles.sliderItem}
              key={item.audio || item.image || item.video}
            >
              {item.video && (
                <video autoPlay muted loop className={styles.sliderImage}>
                  <source src={item.video} />
                </video>
              )}
              {item.audio && (
                <div className={styles.sliderImage}>
                  <img src={item.image} />
                  <Audio src={item.audio} classNames={styles.audio} />
                </div>
              )}
              {!item.audio && item.image && (
                <img className={styles.sliderImage} src={item.image} />
              )}
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
          <h1 className={styles.title}>Web3 CC0 Index</h1>
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
              <a href="https://technomorph.gitbook.io/technomorph/overv1ew/intro" target= "_blank" rel="Techn0m0rph">Techn0m0rph</a>
            </li>
            <li>
              <a href="https://twitter.com/HimeXRealm" target= "_blank" rel="HimeX">HimeX</a>
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
              <a href="https://pluglife.gitbook.io/plug-life/overview/plug-life" target= "_blank" rel="HimeX">Plug Life</a>
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
            <li>
              <a href="https://xmfers.com/" target= "_blank" rel="noreferrer">xmfers</a>
            </li>
            <li>
              <a href="https://tubbycats.xyz/home" target= "_blank" rel="noreferrer">Tubby Cats</a>
            </li>
            <li>
              <a href="https://twitter.com/cryptostellas" target= "_blank" rel="noreferrer">CryptoStellas</a>
            </li>
            <li>
              <a href="http://nounpunks.com/" target= "_blank" rel="noreferrer">NounPunks</a>
            </li>
            <li>
              <a href="https://linktr.ee/3Mfer" target= "_blank" rel="noreferrer">3Mfers</a>
            </li>
            <li>
              <a href="https://linktr.ee/punkforce" target= "_blank" rel="noreferrer">PunkForce</a>
            </li>
            <li>
              <a href="https://www.chromacats.com/" target= "_blank" rel="noreferrer">Chroma Cats</a>
            </li>
            <li>
              <a href="https://gnars.wtf/" target= "_blank" rel="noreferrer">Gnars</a>
            </li>
            <li>
              <a href="https://larvalads.com/" target= "_blank" rel="noreferrer">Larva Lads</a>
            </li>
            <li>
              <a href="https://linktr.ee/kaizennft" target= "_blank" rel="noreferrer">Kaizan</a>
            </li>
            <li>
              <a href="https://opensea.io/collection/derage" target= "_blank" rel="noreferrer">Derage</a>
            </li>
            <li>
              <a href="https://solo.to/supernormal" target= "_blank" rel="noreferrer">SuperNormal</a>
            </li>
            <li>
              <a href="https://www.monfter.com/" target= "_blank" rel="noreferrer">Monfters Club</a>
            </li>
            <li>
              <a href="https://twitter.com/HOWLERZNFT" target= "_blank" rel="noreferrer">HOWLERZ</a>
            </li>
            <li>
              <a href="https://www.cryptodickbutts.com/" target= "_blank" rel="noreferrer">CryptoDickbutts</a>
            </li>
            <li>
              <a href="https://twitter.com/TheBoanez" target= "_blank" rel="noreferrer">Boanez</a>
            </li>
            <li>
              <a href="https://linktr.ee/CrypToadettez" target= "_blank" rel="noreferrer">CrypToadettez</a>
            </li>
            <li>
              <a href="https://www.worldofnoun.com/" target= "_blank" rel="noreferrer">World of Noun</a>
            </li>
            <li>
              <a href="https://twitter.com/D3ELD3" target= "_blank" rel="noreferrer">D3ELD3</a>
            </li>
            <li>
              <a href="https://touns.wtf/" target= "_blank" rel="noreferrer">Tounz</a>
            </li>
            <li>
              <a href="https://twitter.com/thenoadz" target= "_blank" rel="noreferrer">Noadz</a>
            </li>
            <li>
              <a href="https://twitter.com/Greta_gremplin" target= "_blank" rel="noreferrer">Greta Mash-up Club</a>
            </li>
            <li>
              <a href="https://linktr.ee/theboneys" target= "_blank" rel="noreferrer">The Boneys</a>
            </li>
            <li>
              <a href="https://www.croakz.io/" target= "_blank" rel="noreferrer">CROAKZ</a>
            </li>
            <li>
              <a href="https://ricracequestrianclub.com/" target= "_blank" rel="noreferrer">Ric Rac Equestrian Club</a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
