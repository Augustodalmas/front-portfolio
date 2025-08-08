import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiHome, FiMessageSquare, FiHeart } from 'react-icons/fi';
import styles from './Form2.module.css';

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    petInterest: '',
    message: ''
  });

  const dogs = ['Luna', 'Max', 'Bella', 'Rex', 'Thor', 'Nina', 'Qualquer um'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form2 submitted:', formData);
  };

  return (
    <motion.section 
      className={styles.formSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.info}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Interesse em Adoção</h2>
            <p>Preencha o formulário e entraremos em contato para agendar uma visita.</p>
            <div className={styles.features}>
              <div className={styles.feature}>✓ Processo responsável</div>
              <div className={styles.feature}>✓ Acompanhamento completo</div>
              <div className={styles.feature}>✓ Suporte pós-adoção</div>
            </div>
          </motion.div>

          <motion.form 
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <FiUser className={styles.icon} />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <FiMail className={styles.icon} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <FiPhone className={styles.icon} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <FiHome className={styles.icon} />
                <input
                  type="text"
                  name="address"
                  placeholder="Endereço"
                  value={formData.address}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <select
                name="petInterest"
                value={formData.petInterest}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">🐕 Cachorro de interesse *</option>
                {dogs.map(dog => (
                  <option key={dog} value={dog}>{dog}</option>
                ))}
              </select>
            </div>

            <div className={styles.inputGroup}>
              <FiMessageSquare className={styles.icon} />
              <textarea
                name="message"
                placeholder="Conte-nos sobre sua experiência com cachorros e por que deseja adotar"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows="4"
              />
            </div>

            <motion.button
              type="submit"
              className={styles.submitBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Manifestar Interesse
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Form2;