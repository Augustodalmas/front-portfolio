import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiInstagram, FiFacebook, FiPhone } from 'react-icons/fi';
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
            <h3>Quer adotar um amiguinho?</h3>
            <p>Entre em contato e encontre seu novo companheiro</p>
            <a href="mailto:adocao@petslove.com" className={styles.email}>
              adocao@petslove.com
            </a>
          </div>

          <div className={styles.right}>
            <div className={styles.social}>
              <a href="#"><FiInstagram /></a>
              <a href="#"><FiFacebook /></a>
              <a href="tel:+5511999999999"><FiPhone /></a>
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
          <p>&copy; 2024 PetsLove - Conectando corações com ❤️</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer2;