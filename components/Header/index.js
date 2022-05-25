import React, { useState } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
        <img src="/images/logo.png" className={styles.logo} />
        <div className={styles.links}>
        <a href="https://f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Home Port
          </a>
          <a href="https://market.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Digital Fashion Market
          </a>
          <a href="https://popup.f3manifesto.xyz" className={styles.link} target="_blank" rel="noreferrer">
            IRL Fashion & Collectibles
          </a>
          <a href="https://web3fashionmanifesto.f3manifesto.xyz/manifesto/1/" className={styles.link} target="_blank" rel="noreferrer">
            Web3 Fashion Manifesto
          </a>
          <a href="https://themanifest.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            The Manifest Gallery
          </a>
          <a href="https://mypocketempire.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            My Pocket Empire
          </a>
        </div>
        <button className={styles.mobileBtn} onClick={() => setShow(!show)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      {show && (
        <div className={styles.mobileWrapper}>
          <div className={styles.links}>
          <a href="https://market.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            Digital Fashion Market
          </a>
          <a href="https://popup.f3manifesto.xyz" className={styles.link} target="_blank" rel="noreferrer">
            IRL Fashion & Collectibles
          </a>
          <a href="https://web3fashionmanifesto.xyz/manifesto/1/" className={styles.link} target="_blank" rel="noreferrer">
            Web3 Fashion Manifesto
          </a>
          <a href="https://themanifest.f3manifesto.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            The Manifest Gallery
          </a>
          <a href="https://mypocketempire.xyz/" className={styles.link} target="_blank" rel="noreferrer">
            My Pocket Empire
          </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
