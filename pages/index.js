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
                  Buy Now{" "}
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
                  Buy Now{" "}
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section4}>
          <h1 className={styles.title}>CC0 Index</h1>
          <ul>
            <li>
              <a href="">Link One</a>
            </li>
            <li>
              <a href="">Link Two</a>
            </li>
            <li>
              <a href="">Link Three</a>
            </li>
            <li>
              <a href="">Link Four</a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
