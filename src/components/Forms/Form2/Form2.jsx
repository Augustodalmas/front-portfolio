import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiBriefcase, FiMessageSquare } from 'react-icons/fi';
import styles from './Form2.module.css';

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const services = ['Web Design', 'Desenvolvimento', 'Consultoria', 'Marketing Digital', 'Outro'];

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
            <h2>Solicite um Orçamento</h2>
            <p>Preencha o formulário e receba uma proposta personalizada em até 24 horas.</p>
            <div className={styles.features}>
              <div className={styles.feature}>✓ Resposta rápida</div>
              <div className={styles.feature}>✓ Orçamento gratuito</div>
              <div className={styles.feature}>✓ Consultoria incluída</div>
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
                <FiBriefcase className={styles.icon} />
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Selecione um serviço *</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className={styles.inputGroup}>
              <FiMessageSquare className={styles.icon} />
              <textarea
                name="message"
                placeholder="Descreva seu projeto"
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
              Solicitar Orçamento
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Form2;