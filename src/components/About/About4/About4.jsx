import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import styles from './About4.module.css';

const About4 = () => {
  const personalInfo = [
    { icon: FiMail, label: 'Email', value: 'joao@email.com' },
    { icon: FiPhone, label: 'Telefone', value: '+55 (11) 99999-9999' },
    { icon: FiMapPin, label: 'Localização', value: 'São Paulo, SP' }
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
          className={styles.hero}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.heroContent}>
            <h1>João Silva</h1>
            <p className={styles.tagline}>Desenvolvedor & Designer</p>
            <p className={styles.description}>
              Criando experiências digitais que fazem a diferença. 
              Especialista em desenvolvimento web moderno e design centrado no usuário.
            </p>
            
            <motion.button 
              className={styles.downloadBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Download CV
            </motion.button>
          </div>

          <motion.div 
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.imageWrapper}>
              <img src="/imgs/massagem-3.jpg" alt="João Silva" />
              <div className={styles.imageFrame}></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.details}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className={styles.story}>
            <h2>Minha História</h2>
            <p>
              Comecei minha carreira há 6 anos, sempre movido pela curiosidade de entender 
              como a tecnologia pode melhorar a vida das pessoas. Cada projeto é uma nova 
              oportunidade de criar algo significativo.
            </p>
            <p>
              Trabalho com empresas de diversos tamanhos, desde startups até grandes 
              corporações, sempre focando em entregar soluções que realmente importam 
              para o negócio e para os usuários finais.
            </p>
          </div>

          <div className={styles.contact}>
            <h3>Vamos Conversar</h3>
            <div className={styles.contactList}>
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className={styles.contactItem}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <info.icon className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>{info.label}</span>
                    <span className={styles.contactValue}>{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About4;