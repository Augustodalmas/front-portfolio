import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import styles from './Form7.module.css';

const Form7 = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <motion.section className={styles.form}>
      <div className={styles.container}>
        <div className={styles.split}>
          <motion.div className={styles.info}>
            <h2>Entre em Contato</h2>
            <p>Vamos conversar sobre seu próximo projeto</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FiPhone />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className={styles.contactItem}>
                <FiMail />
                <span>contato@email.com</span>
              </div>
              <div className={styles.contactItem}>
                <FiMapPin />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </motion.div>
          
          <motion.form className={styles.formSection}>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Mensagem" rows="5"></textarea>
            <button type="submit">Enviar Mensagem</button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Form7;