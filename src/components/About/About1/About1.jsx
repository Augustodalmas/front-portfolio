import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCoffee } from 'react-icons/fi';
import styles from './About1.module.css';

const About1 = () => {
  const stats = [
    { icon: FiAward, number: '50+', label: 'Projetos' },
    { icon: FiUsers, number: '30+', label: 'Clientes' },
    { icon: FiCoffee, number: '500+', label: 'Cafés' }
  ];

  return (
    <motion.section 
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.imageSection}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img src="/imgs/massagem-1.jpg" alt="Sobre mim" />
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.textSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2>Sobre Mim</h2>
            <p className={styles.intro}>
              Sou um desenvolvedor apaixonado por criar experiências digitais únicas e funcionais.
            </p>
            
            <p className={styles.description}>
              Com mais de 5 anos de experiência em desenvolvimento web, especializo-me em React, 
              Node.js e design responsivo. Acredito que a tecnologia deve ser acessível e 
              intuitiva para todos.
            </p>

            <p className={styles.description}>
              Quando não estou codando, gosto de explorar novas tecnologias, ler sobre UX/UI 
              e tomar um bom café enquanto planejo o próximo projeto.
            </p>

            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon className={styles.statIcon} />
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About1;