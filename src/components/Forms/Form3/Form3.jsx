import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import styles from './Form3.module.css';

const Form3 = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form3 submitted:', email);
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <motion.section 
      className={styles.formSection}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.header}>
            <h2>Newsletter</h2>
            <p>Receba as últimas novidades e insights diretamente no seu email</p>
          </div>

          {!isSubscribed ? (
            <motion.form 
              className={styles.form}
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.inputWrapper}>
                <FiMail className={styles.icon} />
                <input
                  type="email"
                  placeholder="Digite seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.input}
                />
                <motion.button
                  type="submit"
                  className={styles.submitBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiArrowRight />
                </motion.button>
              </div>
              
              <p className={styles.disclaimer}>
                * Sem spam. Cancele quando quiser.
              </p>
            </motion.form>
          ) : (
            <motion.div 
              className={styles.success}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <div className={styles.checkmark}>✓</div>
              <p>Obrigado! Você foi inscrito com sucesso.</p>
            </motion.div>
          )}

          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <span className={styles.dot}></span>
              <span>Conteúdo exclusivo</span>
            </div>
            <div className={styles.benefit}>
              <span className={styles.dot}></span>
              <span>Dicas semanais</span>
            </div>
            <div className={styles.benefit}>
              <span className={styles.dot}></span>
              <span>Acesso antecipado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Form3;