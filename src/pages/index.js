import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Socialbar from "../components/Socialbar"
import styles from "./index.module.css"
console.log(styles);

export default () => (
  <div>
    <div className={styles.navBarLeft}>
      <Socialbar />
    </div>
    <div className={styles.navBarRight}>
      <Navbar />
    </div>
    <div className={styles.welcomeSection}>
      <Header />
    </div>
  </div>
  )
