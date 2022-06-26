import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { client, recommendProfiles } from '../../api.js'
import Link from 'next/link'
import Image from 'next/image'

const MainQuest = () => {

    const [profiles, setProfiles] = useState([])

    useEffect(() => {
      fetchProfiles()
    }, [])
    async function fetchProfiles() {
     try {
      const response = client.query(recommendProfiles).toPromise()
      console.log({response})
      setProfiles(await response.data.recommendedProfiles)
     } catch (err) {
      console.log({err})
     }
    }
    return (
      <>
        <div>
          <div className={styles.box}>
            {
            profiles.map((profile, index) => 
              <Link href={'/profile/${profile.id}'}>
              <a><div>
                {
                profile.picture ? (
                  <Image
                    src={profile.picture.original.url}
                    width="2vw"
                    height="2vh"
                  />
                ) :(
                  <div style={{width:'2vw', height:'2vh'}}/>
                )
                }
              </div></a>
              </Link>
                )
              }
          </div>
        </div>
      </>
    );
  };
  
  export default MainQuest;
  