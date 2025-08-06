import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import styles from './About6.module.css';

const About6 = () => {
  return (
    <motion.section 
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Criativo & Técnico</h2>
            <p>
              Combino criatividade com conhecimento técnico para criar 
              experiências digitais que realmente importam.
            </p>
            <button className={styles.btn}>
              Saiba Mais <FiArrowRight />
            </button>
          </motion.div>

          <motion.div 
            className={styles.imageBlock}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img src="/imgs/massagem-5.jpg" alt="Trabalho" />
          </motion.div>

          <motion.div 
            className={styles.statsBlock}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className={styles.stat}>
              <span className={styles.number}>100+</span>
              <span className={styles.label}>Projetos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>5+</span>
              <span className={styles.label}>Anos</span>
            </div>
          </motion.div>

          <motion.div 
            className={styles.quoteBlock}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <blockquote>
              "Design não é apenas como algo parece, mas como funciona."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About6;