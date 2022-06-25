import React, { useState } from "react";
import styles from "./styles.module.scss";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.wrapper}>
        <img src="/images/navlogo_2x.png" className={styles.logo} />
        <div className={styles.button} onClick={() => setShow(!show)}>
          <div></div>
          <div></div>
          <div></div>
          <ConnectButton label="Begin Quest" showBalance={false} chainStatus="icon" accountStatus={{ smallScreen: 'avatar', largeScreen: 'avatar', }}/>
        </div>
      </div>
    </>
  );
};

export default Header;
