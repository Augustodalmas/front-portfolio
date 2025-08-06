import React from 'react';
import { motion } from 'framer-motion';
import styles from './About7.module.css';

const About7 = () => {
  return (
    <motion.section 
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.number}>01</div>
          <h2>Sobre Mim</h2>
          <p className={styles.intro}>
            Desenvolvedor apaixonado por criar soluções elegantes e funcionais.
          </p>
          <p className={styles.description}>
            Com mais de 6 anos de experiência, trabalho com as mais modernas 
            tecnologias para entregar projetos que fazem a diferença. Cada linha 
            de código é pensada para criar a melhor experiência possível.
          </p>
          <div className={styles.signature}>
            <span>João Silva</span>
            <div className={styles.line}></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About7;