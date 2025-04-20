import React from 'react'
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import styles from '../components/src/styles/hidraulica.module.css'

const HidraulicaBasicaDetalhamento = () => {
  return (
    <div>
      <Layout />

      <div className={styles.hidraulica}>
        <h2>Hidráulica básica</h2>
      </div>

      <div>
          <h4>Objetivo</h4>
      </div>
    </div>
  )
}

export default HidraulicaBasicaDetalhamento