import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../../Logo/Logo';
import styles from './Header8.module.css';

const Header8 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.brand}
          whileHover={{ scale: 1.05 }}
        >
          <Logo variant={scrolled ? "default" : "light"} size="medium" />
        </motion.div>

        <nav className={styles.nav}>
          {['Portfolio', 'Services', 'Blog', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={styles.navLink}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={styles.linkDot}></span>
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.div 
          className={styles.social}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className={styles.socialDots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header8;