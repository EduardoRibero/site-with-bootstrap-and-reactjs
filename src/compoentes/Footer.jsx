import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.conteiner}>
            <address className={styles.address}>
                R. Aberal Lamar, N° 17, Alameda Dos Princepes, São João - RJ CEP:88067-67
            </address>
            <nav className={styles.nav}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/about">About</Link>
                <Link className={styles.link} to="/doubts">Doubts</Link>
                <Link className={styles.link} to="/contact">Contact</Link>
            </nav>
        </div>

        <div className={styles.ass}>
            <p>&copy; 2024 Eduardo Ribeiro Domingues</p>
        </div>
        
    </footer>
  )
}

export default Footer