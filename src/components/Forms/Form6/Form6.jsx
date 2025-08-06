import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Form6.module.css';

const Form6 = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <motion.section className={styles.form}>
      <div className={styles.container}>
        <motion.div className={styles.card}>
          <h2>Contato Rápido</h2>
          <form className={styles.formGrid}>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Mensagem" rows="4"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Form6;