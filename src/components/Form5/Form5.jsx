import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import styles from './Form5.module.css';

const Form5 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '5554984096156'; // Substitua pelo seu número
    const message = `*Novo contato do portfólio*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Assunto:* ${formData.subject}\n*Mensagem:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section
      id="contato"
      className={styles.form}
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
          <h2>Vamos Trabalhar Juntos</h2>
          <p>Conte-me sobre seu projeto e vamos criar algo incrível</p>
        </motion.div>

        <motion.form
          className={styles.formGrid}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.inputGroup}>
            <FiUser className={styles.inputIcon} />
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <FiMail className={styles.inputIcon} />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <FiMessageSquare className={styles.inputIcon} />
            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
            <textarea
              name="message"
              placeholder="Descreva seu projeto..."
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>

          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiSend />
            Enviar Mensagem
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Form5;