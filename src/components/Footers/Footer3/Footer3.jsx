import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import Logo from '../../Logo/Logo';
import styles from './Footer3.module.css';

const Footer3 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.wave}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />

        <div className={styles.content}>
          <motion.div
            className={styles.brand}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p>Transformando ideias em realidade digital</p>
          </motion.div>

          <motion.div
            className={styles.social}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className={styles.socialGrid}>
              <a href="#" className={styles.socialLink}>
                <FiGithub />
                <span>GitHub</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <FiTwitter />
                <span>Twitter</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <FiInstagram />
                <span>Instagram</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <FiMail />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className={styles.line} />
          <p>&copy; {currentYear} Creative Studio. Feito com paixão.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer3;