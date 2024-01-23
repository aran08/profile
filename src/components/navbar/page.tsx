'use client'

import React from 'react'
import "./navbar.module.css"
import styles from "./navbar.module.css"
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <div className={styles.leftcontainer} >
          <div className={styles.image}>
             {/* <img src="/images/logo.png" alt="Logo" className={styles.photo}/> */}
          </div>
           <p className={styles.logo}>Aran</p>
        </div>
        <div className={styles.menu}>
          <div onClick={() => router.push('/')} >Home</div>
          <div onClick={() => router.push('/about')} >About</div>
          <div onClick={() => router.push('/portfolio')} >Portfolio</div>
          <div onClick={() => router.push('/services')} >Services</div>
          <div onClick={() => router.push('/contact')} >Contact</div>
        </div>
      </div>
    </div>
  )
}

export default Page