import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap } from 'react-icons/fi';
import styles from './About2.module.css';

const About2 = () => {
  const skills = [
    { icon: FiCode, title: 'Desenvolvimento', desc: 'React, Node.js, JavaScript' },
    { icon: FiLayers, title: 'Design', desc: 'UI/UX, Figma, Adobe' },
    { icon: FiZap, title: 'Performance', desc: 'Otimização, SEO, Speed' }
  ];

  return (
    <motion.section 
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className={styles.subtitle}>Conheça mais</span>
          <h2>Minha História</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className={styles.mainText}>
              Comecei minha jornada no desenvolvimento há mais de 5 anos, movido pela 
              curiosidade de entender como as coisas funcionam por trás das telas. 
              O que começou como um hobby rapidamente se tornou uma paixão.
            </p>

            <p className={styles.description}>
              Hoje, trabalho criando soluções digitais que fazem a diferença na vida 
              das pessoas. Cada projeto é uma oportunidade de aprender algo novo e 
              superar desafios únicos.
            </p>

            <p className={styles.description}>
              Acredito que a melhor tecnologia é aquela que as pessoas nem percebem 
              que está lá - simplesmente funciona de forma intuitiva e elegante.
            </p>
          </motion.div>

          <motion.div 
            className={styles.skillsGrid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className={styles.skillCard}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <skill.icon className={styles.skillIcon} />
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className={styles.quote}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <blockquote>
            "O código é poesia em movimento, e cada linha conta uma história."
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About2;