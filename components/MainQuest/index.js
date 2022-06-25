import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { client, recommendProfiles } from './api.js'


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
        <div >
          <div className={styles.box}>
          </div>
        </div>
      </>
    );
  };
  
  export default MainQuest;
  