import React from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery6.module.css';

const Gallery6 = () => {
  const images = [
    { id: 1, src: '/imgs/massagem-1.jpg', title: 'Projeto 1' },
    { id: 2, src: '/imgs/massagem-2.jpg', title: 'Projeto 2' },
    { id: 3, src: '/imgs/massagem-3.jpg', title: 'Projeto 3' },
    { id: 4, src: '/imgs/massagem-4.jpg', title: 'Projeto 4' }
  ];

  return (
    <motion.section className={styles.gallery}>
      <div className={styles.container}>
        <h2>Galeria Polaroid</h2>
        <div className={styles.polaroids}>
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={styles.polaroid}
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: index % 2 === 0 ? 5 : -5 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <img src={image.src} alt={image.title} />
              <p>{image.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery6;