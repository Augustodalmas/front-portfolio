import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import Logo from '../../Logo/Logo';
import styles from './Footer6.module.css';

const Footer6 = () => {
  return (
    <motion.footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Logo variant="light" size="medium" />
            <p>Transformando ideias em realidade digital desde 2019.</p>
          </div>
          
          <div className={styles.right}>
            <div className={styles.newsletter}>
              <h3>Newsletter</h3>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Seu email" />
                <button>Inscrever</button>
              </div>
            </div>
            
            <div className={styles.social}>
              <a href="#"><FiGithub /></a>
              <a href="#"><FiLinkedin /></a>
              <a href="#"><FiTwitter /></a>
              <a href="#"><FiInstagram /></a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2024 Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer6;