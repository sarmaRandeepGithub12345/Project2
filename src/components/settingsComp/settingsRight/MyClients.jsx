import React from 'react'
import profile from "../settingsNav/icon.jpg"
import styles from "./MyClient.module.css"

function MyClients() { 
  const client = [
    {
      name: "Vasai Musk",
      country: "USA", 
    },
    {
      name: "Vasai Musk",
      country: "ITALY", 
    },
    {
      name: "Vasai Musk",
      country: "USA", 
    },
    {
      name: "Vasai Musk",
      country: "FRANCE", 
    },
    {
      name: "Vasai Musk",
      country: "USA", 
    }
  ]
  return (
    <div className={styles.clientCard}>
        <p className={styles.mcText}>My Clients</p>
    
        {client?.map((client)=>(
                    <div className={styles.cccontainer}>
                    <img  src={profile} alt='profilePic' className={`${styles.imgClass}`} />
                    <div className={styles.cct}>
                      <p className={styles.cctOne}>{client.name}</p>
                      <p className={styles.cctTwo}>{client.country}</p>
                    </div>
                  </div>
          ))}
    </div>
  )
}

export default MyClients