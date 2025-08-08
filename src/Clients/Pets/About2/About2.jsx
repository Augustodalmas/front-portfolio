import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiHome, FiUsers } from 'react-icons/fi';
import styles from './About2.module.css';

const About2 = () => {
  const values = [
    { icon: FiHeart, title: 'Amor', desc: 'Cada pet merece uma família amorosa' },
    { icon: FiHome, title: 'Lar', desc: 'Encontramos o lar perfeito para cada um' },
    { icon: FiUsers, title: 'Cuidado', desc: 'Acompanhamento completo na adoção' }
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
          <span className={styles.subtitle}>Nossa Missão</span>
          <h2>Conectando Corações</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className={styles.mainText}>
              Nossa jornada começou com um sonho simples: dar uma segunda chance 
              para pets que precisam de amor. Cada animal que passa por aqui 
              carrega uma história única e merece encontrar sua família perfeita.
            </p>

            <p className={styles.description}>
              Trabalhamos incansavelmente para conectar corações, criando laços 
              que transformam vidas - tanto dos pets quanto das famílias que os 
              acolhem. Cada adoção é uma vitória compartilhada.
            </p>

            <p className={styles.description}>
              Acreditamos que todo animal merece amor, cuidado e uma segunda chance. 
              Nossa missão é fazer essa conexão acontecer de forma responsável e amorosa.
            </p>
          </motion.div>

          <motion.div 
            className={styles.skillsGrid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className={styles.skillCard}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <value.icon className={styles.skillIcon} />
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
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
            "Cada pet que encontra um lar é uma história de amor que começa."
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About2;