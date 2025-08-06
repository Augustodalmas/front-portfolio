import React from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery7.module.css';

const Gallery7 = () => {
  const images = ['/imgs/massagem-1.jpg', '/imgs/massagem-2.jpg', '/imgs/massagem-3.jpg', '/imgs/massagem-4.jpg'];

  return (
    <motion.section className={styles.gallery}>
      <div className={styles.container}>
        <h2>Galeria Circular</h2>
        <div className={styles.circle}>
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={styles.item}
              style={{ '--index': index }}
              whileHover={{ scale: 1.2 }}
            >
              <img src={src} alt={`Projeto ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery7;