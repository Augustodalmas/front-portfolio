import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import styles from './About5.module.css';

const About5 = () => {
  const skills = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'];

  return (
    <motion.section 
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.split}>
          <motion.div 
            className={styles.left}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Desenvolvedor Full Stack</h2>
            <p>
              Especializado em criar soluções web modernas e escaláveis. 
              Com foco em performance e experiência do usuário.
            </p>
            
            <div className={styles.skills}>
              <h3>Tecnologias</h3>
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className={styles.skillItem}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <FiCheck />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.right}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.card}>
              <img src="/imgs/massagem-4.jpg" alt="Desenvolvedor" />
              <div className={styles.cardContent}>
                <h4>5+ Anos</h4>
                <p>Experiência em desenvolvimento</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About5;