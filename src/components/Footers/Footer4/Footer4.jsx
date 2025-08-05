import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import Logo from '../../Logo/Logo';
import styles from './Footer4.module.css';

const Footer4 = () => {
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
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.left}>
            <Logo variant="default" size="medium" />
            <p>Criando experiências digitais memoráveis</p>
          </div>

          <div className={styles.center}>
            <nav className={styles.nav}>
              <a href="#">Início</a>
              <a href="#">Sobre</a>
              <a href="#">Trabalhos</a>
              <a href="#">Contato</a>
            </nav>
          </div>

          <div className={styles.right}>
            <div className={styles.social}>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiTwitter />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.bottom}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.divider}></div>
          <p>
            Feito com <FiHeart className={styles.heart} /> por Desenvolvedor
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer4;