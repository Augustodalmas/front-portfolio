import React from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery4.module.css';

const Gallery4 = () => {
  const images = [
    { id: 1, src: '/imgs/massagem-1.jpg', title: 'Projeto 1' },
    { id: 2, src: '/imgs/massagem-2.jpg', title: 'Projeto 2' },
    { id: 3, src: '/imgs/massagem-3.jpg', title: 'Projeto 3' },
    { id: 4, src: '/imgs/massagem-4.jpg', title: 'Projeto 4' },
    { id: 5, src: '/imgs/massagem-5.jpg', title: 'Projeto 5' },
    { id: 6, src: '/imgs/massagem-6.jpg', title: 'Projeto 6' }
  ];

  return (
    <motion.section className={styles.gallery}>
      <div className={styles.container}>
        <h2>Galeria Carousel</h2>
        <div className={styles.carousel}>
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={styles.slide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={image.src} alt={image.title} />
              <h3>{image.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery4;