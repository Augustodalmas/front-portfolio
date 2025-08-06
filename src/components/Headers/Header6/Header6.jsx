import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import Logo from '../../Logo/Logo';
import styles from './Header6.module.css';

const Header6 = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo variant="default" size="medium" />
        </div>

        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.actions}>
          <motion.button 
            className={styles.searchBtn}
            onClick={() => setSearchOpen(!searchOpen)}
            whileHover={{ scale: 1.1 }}
          >
            <FiSearch />
          </motion.button>
          
          <motion.button 
            className={styles.cartBtn}
            whileHover={{ scale: 1.1 }}
          >
            <FiShoppingBag />
            <span className={styles.cartCount}>2</span>
          </motion.button>
        </div>

        {searchOpen && (
          <motion.div 
            className={styles.searchBar}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <input type="text" placeholder="Buscar..." />
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header6;