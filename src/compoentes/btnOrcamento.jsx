import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./btnOrcamento.module.css"

const btnOrcamento = () => {
  return (
    <button  className={styles.btn}>
        <Link className={styles.link} to="/orcamento">Orçamento</Link>
    </button>
  )
}

export default btnOrcamento