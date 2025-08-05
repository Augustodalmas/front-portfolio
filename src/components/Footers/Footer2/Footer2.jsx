import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import styles from './Footer2.module.css';

const Footer2 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.left}>
            <h3>Vamos trabalhar juntos?</h3>
            <p>Entre em contato e vamos criar algo incrível</p>
            <a href="mailto:contato@email.com" className={styles.email}>
              contato@email.com
            </a>
          </div>

          <div className={styles.right}>
            <div className={styles.social}>
              <a href="#"><FiGithub /></a>
              <a href="#"><FiLinkedin /></a>
              <a href="#"><FiTwitter /></a>
            </div>
            
            <button className={styles.scrollTop} onClick={scrollToTop}>
              <FiArrowUp />
            </button>
          </div>
        </motion.div>

        <motion.div 
          className={styles.bottom}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>&copy; 2024 - Desenvolvido com ❤️</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer2;