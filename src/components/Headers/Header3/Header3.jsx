import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import Logo from '../../Logo/Logo';
import styles from './Header3.module.css';

const Header3 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Início', 'Projetos', 'Experiência', 'Blog', 'Contato'];

  return (
    <motion.header 
      className={styles.header}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.logoSection}
          whileHover={{ x: 5 }}
        >
          <Logo variant="default" size="large" />
          <div className={styles.tagline}>Portfolio</div>
        </motion.div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={styles.navLink}
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span>{item}</span>
              <FiArrowRight className={styles.arrow} />
            </motion.a>
          ))}
        </nav>

        <motion.button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header3;