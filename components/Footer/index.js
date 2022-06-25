import React from 'react'
import styles from './styles.module.scss'

const LandingFooter = () => {
  return (
    <footer className={styles.footer}>
        
        <div className={styles.centerWrapper}>
          <div className={styles.footerText}>
            Made with CC0 &hearts; at ETH Global NYC. No Rights Reserved. Created for the public domain.
          </div>        
        </div>
    </footer>
  )
}

export default LandingFooter

