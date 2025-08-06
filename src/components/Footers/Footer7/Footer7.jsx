import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../../Logo/Logo';
import styles from './Footer7.module.css';

const Footer7 = () => {
  return (
    <motion.footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wave}></div>
        <div className={styles.content}>
          <Logo variant="default" size="large" />
          <p className={styles.tagline}>Criando o futuro, uma linha de código por vez.</p>
          <div className={styles.year}>2024</div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer7;