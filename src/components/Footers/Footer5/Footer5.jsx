import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import Logo from '../../Logo/Logo';
import styles from './Footer5.module.css';

const Footer5 = () => {
  return (
    <motion.footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo variant="light" size="large" />
          <p>Criando experiências digitais únicas</p>
          <button className={styles.backToTop}>
            <FiArrowUp />
          </button>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer5;