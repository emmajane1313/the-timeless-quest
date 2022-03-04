import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";

const Audio = ({ src, classNames }) => {
  const [play, setPlay] = useState(false);
  const ref = useRef();

  return (
    <div className={`${styles.wrapper} ${classNames}`}>
      <audio ref={ref} className={styles.audio}>
        <source src={src} />
      </audio>
      <button
        className={styles.btn}
        onClick={() => {
          if (!play) {
            ref.current.play();
          } else {
            ref.current.pause();
          }
          setPlay(!play);
        }}
      >
        <img src={play ? "/images/pause.png" : "/images/play.png"} />
      </button>
    </div>
  );
};

export default Audio;
