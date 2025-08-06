import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Form4.module.css';

const Form4 = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: ''
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.section 
      className={styles.form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{width: `${(step/3)*100}%`}}></div>
        </div>

        <motion.div 
          className={styles.formContent}
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div className={styles.step}>
              <h2>Informações Pessoais</h2>
              <input name="name" placeholder="Nome completo" onChange={handleChange} />
              <input name="email" type="email" placeholder="Email" onChange={handleChange} />
              <input name="phone" placeholder="Telefone" onChange={handleChange} />
              <button onClick={handleNext} className={styles.nextBtn}>Próximo</button>
            </div>
          )}

          {step === 2 && (
            <div className={styles.step}>
              <h2>Detalhes do Projeto</h2>
              <select name="service" onChange={handleChange}>
                <option>Selecione o serviço</option>
                <option>Website</option>
                <option>E-commerce</option>
                <option>App Mobile</option>
              </select>
              <select name="budget" onChange={handleChange}>
                <option>Orçamento</option>
                <option>R$ 5.000 - R$ 10.000</option>
                <option>R$ 10.000 - R$ 25.000</option>
                <option>R$ 25.000+</option>
              </select>
              <div className={styles.buttons}>
                <button onClick={handlePrev} className={styles.prevBtn}>Anterior</button>
                <button onClick={handleNext} className={styles.nextBtn}>Próximo</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.step}>
              <h2>Mensagem</h2>
              <textarea name="message" placeholder="Descreva seu projeto..." onChange={handleChange}></textarea>
              <div className={styles.buttons}>
                <button onClick={handlePrev} className={styles.prevBtn}>Anterior</button>
                <button className={styles.submitBtn}>Enviar</button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Form4;