import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import styles from './SettingsLeft.module.css';
import { objItems } from '../../../utils/commonObjects';

function SettingsLeft({setindex}) {
  return (
    <div className={styles.leftCard}>
      {
        objItems?.map((item,id)=>(
          <Link key={id} 
            onClick={e=>{
            e.preventDefault()
            setindex(id);
            }} to={`settings/${item.link}`} style={{textDecoration:"none"}}>
              <button className={`${styles.buttonClass}`}>
                  {item.icon}
                  <div className={styles.buttonText}>
                    <p className={styles.buttonTextOne}>{item.heading}</p>
                    <p className={styles.buttonTextTwo}>{item.body}</p>
                  </div>
                  <FaAngleRight color='rgb(85, 85, 85)' size="20px"/>
              </button>
          </Link>
        ))
      }
    <button className={styles.btn}>Logout</button>
  </div>
  )
}

export default SettingsLeft 