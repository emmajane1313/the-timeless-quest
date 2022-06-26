import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { client, getProfiles, getPublications } from '../../api.js'
import Image from 'next/image'
import ABI from '../../abi.json'
import ethers from 'ethers'

const address = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d"

export function Profile() {
    const router = useRouter()
    const [profile, setProfile] = useState()
    const [pubs, setPubs] = useState([])
    const { id } = router.query

    useEffect(() => {
        if (id) {
          fetchProfile()
        }
    }, [id])

    async function fetchProfile() {
        try {
            const response = await client.query(getProfiles, { id }).toPromise();
            console.log( 'response:', response)
            setProfile(response.data.profiles.items[0])
            console.log({ id })
            const publicationData = await client.query(getPublications, { id }).toPromise()
            console.log({ publicationData })
            setPubs(publicationData.data.publications.items)
        } catch(err) {
            console.log({err})
        }
    }

    async function connect() {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })
        console.log({ accounts })
    }

    async function followUser() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        const contract = new ethers.Contract(0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d, ABI, signer)

        try {
            const tx = contract.follow(
                [id], [0x0], 
            )
            await tx.wait()
            console.log("User followed successfully")
        } catch(err) {
            console.log({err})
        }

    }

    if (!profile) return null

    return (
        <div>
            <button onClick={connect}>Connect</button>
            {
                Profile.picture ? (
                    <Image
                    src={profile.picture.original.url}
                    width="2vw"
                    height="2vh"
                  />
                ) : (
                    <div style={{width:'2vw', height:'2vh'}}/>
                  )
            }
            <div>
                <h1>{profile.handle}</h1>
                <p>{profile.bio}</p>
                <p>Followers: {profile.stats.totalFollowers}</p>
                <p>Following: {profile.stats.totalFollowing}</p>
            </div>
            <button onClick={followUser}>Follow</button>
            <div>
                {
                pubs.map((pub, index) => (
                    <div>
                        {pub.metadata.content}
                    </div>
                ))
                }
            </div>
        </div>
    )
}