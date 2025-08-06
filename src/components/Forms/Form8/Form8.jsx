import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Form8.module.css';

const Form8 = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.section className={styles.form}>
      <div className={styles.container}>
        <motion.div 
          className={styles.trigger}
          onClick={() => setIsVisible(!isVisible)}
        >
          <h2>Interessado? Clique aqui</h2>
        </motion.div>

        {isVisible && (
          <motion.div 
            className={styles.formWrapper}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <form className={styles.formContent}>
              <h3>Vamos conversar!</h3>
              <div className={styles.row}>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Assunto" />
              <textarea placeholder="Sua mensagem..." rows="4"></textarea>
              <button type="submit">Enviar</button>
            </form>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Form8;