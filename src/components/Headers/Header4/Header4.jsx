import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../../Logo/Logo';
import styles from './Header4.module.css';

const Header4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <Logo variant="default" size="medium" />

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={styles.navLink}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#000",
                color: "#fff"
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header4;