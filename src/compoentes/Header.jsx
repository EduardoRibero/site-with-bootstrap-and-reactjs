import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.css"
import Btn from './btn'

const Header = () => {
  return (
    <header className={styles.header}>
        <img className={styles.logo} src="https://i.pinimg.com/736x/c1/3a/63/c13a63f39bb1b7bc71fda2e4686ef620.jpg" alt="logoImg" />
        <nav className={styles.nav}>
            <Link className={styles.link} to="/">Home</Link>
            <Link className={styles.link} to="/about">About</Link>
            <Link className={styles.link} to="/doubts">Doubts</Link>
            <Link className={styles.link} to="/contact">Contact</Link>
        </nav>
        <Btn>scheduling</Btn>
    </header>
  )
}

export default Header