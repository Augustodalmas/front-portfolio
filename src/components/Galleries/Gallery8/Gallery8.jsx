import React from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery8.module.css';

const Gallery8 = () => {
  const images = [
    { id: 1, src: '/imgs/massagem-1.jpg', title: 'Projeto A', size: 'large' },
    { id: 2, src: '/imgs/massagem-2.jpg', title: 'Projeto B', size: 'small' },
    { id: 3, src: '/imgs/massagem-3.jpg', title: 'Projeto C', size: 'medium' },
    { id: 4, src: '/imgs/massagem-4.jpg', title: 'Projeto D', size: 'small' },
    { id: 5, src: '/imgs/massagem-5.jpg', title: 'Projeto E', size: 'medium' },
    { id: 6, src: '/imgs/massagem-6.jpg', title: 'Projeto F', size: 'large' }
  ];

  return (
    <motion.section className={styles.gallery}>
      <div className={styles.container}>
        <h2>Galeria Mosaico</h2>
        <div className={styles.mosaic}>
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={`${styles.tile} ${styles[image.size]}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image.src} alt={image.title} />
              <div className={styles.overlay}>
                <h3>{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery8;