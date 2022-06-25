import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const MainQuest = () => {
    useEffect(() => {
      fetchProfiles()
    }, [])
    async function fetchProfiles() {
     try {
      const response = client.query(recommendProfiles).toPromise()
      console.log({response})
     } catch (err) {
      console.log({err})
     }
    }
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
  };
  
  export default MainQuest;
  