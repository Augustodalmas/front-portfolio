import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import styles from './Footer3.module.css';

const Footer3 = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <img src="/imgs/logo-dalmas-full.png" alt="Dalmas" className={styles.logo} />
            </div>
            <p className={styles.tagline}>
              Devagar e sempre.<br />
              <em>Software que dura.</em>
            </p>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Navegação</p>
            <a href="#sobre" className={styles.colLink}>Sobre</a>
            <a href="#trabalhos" className={styles.colLink}>Trabalhos</a>
            <a href="#contato" className={styles.colLink}>Contato</a>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Redes</p>
            <a href="https://github.com/Augustodalmas" target="_blank" rel="noopener noreferrer" className={styles.colLink}>
              <FiGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/augustordalmas/" target="_blank" rel="noopener noreferrer" className={styles.colLink}>
              <FiLinkedin /> LinkedIn
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.colLink}>
              <FiInstagram /> Instagram
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>&copy; {year} Augusto Dalmas</span>
          <span className={styles.copy}>Caxias do Sul, RS</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer3;
