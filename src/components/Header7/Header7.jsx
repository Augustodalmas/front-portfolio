import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header7.module.css';

const Header7 = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <a href="#sobre" className={styles.logo}>
          <img src="/imgs/logo-dalmas-full.png" alt="Dalmas" />
          <span>Augusto Dalmas</span>
        </a>

        <nav className={styles.nav}>
          {[
            { name: 'Sobre', href: '#sobre' },
            { name: 'Trabalhos', href: '#trabalhos' },
            { name: 'Contato', href: '#contato' },
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={styles.navLink}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#contato"
          className={styles.ctaBtn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Fale comigo
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header7;
