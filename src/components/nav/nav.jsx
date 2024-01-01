import React,{useState} from "react"
import logo from "../../sujalassets/Group 889.svg"
import Navig from "../../sujalassets/Navigation.png"
import Avatar from "../../sujalassets/Avatar.png"
import Bell from "../../sujalassets/bell.png"
import Beel from "../../sujalassets/beel2.png"
import styles from "./nav.module.css"
function Nav(){
   const [ison,setison]=useState(false);
    return (<div className={`flex flex-row bg-[white] sticky top-[0] z-[10] w-[100%] justify-between shadow-[5px_5px_15px_3px_rgba(0,0,0,0.3)]`}>
     <img src={logo}/>
     <div className={`${styles.mid}`}>
     <img src={Navig}/>
        <p>Become a specialist</p>
     </div>
     <button className={`${styles.sidelogin}`} onClick={()=>{ setison(prevvalue=>!prevvalue)
     }}>Click</button>
     <ul style={{display:ison?"flex":"none",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className="dialog">
      <li >Profile</li>
      <li>Setting</li>
      <li className={`${styles.logout}`}>Logout</li>
     </ul>
     <div className={`${styles.last}`}>
     <div className={`${styles.login}`}>
     <img style={{marginRight:10}} className={`${styles.avatar}`} src={Avatar}/>
        <p>Yondu</p>
        </div>
        <img className={`${styles.side}`} src={Bell}/>
        <img className={`${styles.side}`} src={Beel}/>
     </div>
    </div>)
}

export default Nav;