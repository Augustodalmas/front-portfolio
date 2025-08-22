import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../Logo/Logo';
import styles from './Header7.module.css';

const Header7 = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>

          <motion.nav
            className={styles.nav}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { name: 'Sobre', href: '#sobre' },
              { name: 'Trabalhos', href: '#trabalhos' },
              { name: 'Contato', href: '#contato' }
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={styles.navLink}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header7;