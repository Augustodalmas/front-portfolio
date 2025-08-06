import React from 'react';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import styles from './About8.module.css';

const About8 = () => {
  return (
    <motion.section 
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.videoSection}>
          <motion.div 
            className={styles.videoWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src="/imgs/massagem-6.jpg" alt="Video thumbnail" />
            <motion.button 
              className={styles.playBtn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiPlay />
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className={styles.textSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className={styles.tag}>Conheça minha história</span>
          <h2>Transformando ideias em realidade digital</h2>
          <p>
            Há mais de 5 anos criando experiências digitais únicas. 
            Cada projeto é uma nova oportunidade de inovar e superar expectativas.
          </p>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.value}>150+</span>
              <span className={styles.label}>Projetos</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.value}>50+</span>
              <span className={styles.label}>Clientes</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.value}>5+</span>
              <span className={styles.label}>Anos</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About8;