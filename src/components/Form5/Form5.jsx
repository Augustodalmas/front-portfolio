import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import styles from './Form5.module.css';

const Form5 = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '5554984096156';
    const message = `*Novo contato do portfólio*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Assunto:* ${formData.subject}\n*Mensagem:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <motion.section
      id="contato"
      className={styles.form}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Contato</p>
          <h2>Vamos trabalhar <em>juntos</em></h2>
          <p>Conte-me sobre seu projeto e criamos algo que dura.</p>
        </div>

        <motion.form
          className={styles.formGrid}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className={styles.inputGroup}>
            <FiUser className={styles.inputIcon} />
            <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
          </div>

          <div className={styles.inputGroup}>
            <FiMail className={styles.inputIcon} />
            <input type="email" name="email" placeholder="Seu email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
            <FiMessageSquare className={styles.inputIcon} />
            <input type="text" name="subject" placeholder="Assunto" value={formData.subject} onChange={handleChange} required />
          </div>

          <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
            <textarea name="message" placeholder="Descreva seu projeto..." value={formData.message} onChange={handleChange} required />
          </div>

          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiSend />
            Enviar pelo WhatsApp
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Form5;
