import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./btn.module.css"

const btn = ({children}) => {
  return (
    <button  className={styles.btn}>
        <Link className={styles.link} to="/budget">{children}</Link>
    </button>
  )
}

export default btn