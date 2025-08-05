import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiHeart } from 'react-icons/fi';
import styles from './Gallery3.module.css';

const Gallery3 = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Terapia Relaxante',
      category: 'Massagem',
      image: '/imgs/massagem-1.jpg',
      views: '2.5k',
      likes: '180'
    },
    {
      id: 2,
      title: 'Pedras Quentes',
      category: 'Especial',
      image: '/imgs/massagem-2.jpg',
      views: '1.8k',
      likes: '95'
    },
    {
      id: 3,
      title: 'Reflexologia',
      category: 'Terapia',
      image: '/imgs/massagem-3.jpg',
      views: '3.2k',
      likes: '240'
    },
    {
      id: 4,
      title: 'Aromaterapia',
      category: 'Especial',
      image: '/imgs/massagem-4.jpg',
      views: '1.1k',
      likes: '67'
    },
    {
      id: 5,
      title: 'Massagem Sueca',
      category: 'Clássica',
      image: '/imgs/massagem-5.jpg',
      views: '4.1k',
      likes: '320'
    },
    {
      id: 6,
      title: 'Drenagem Linfática',
      category: 'Terapia',
      image: '/imgs/massagem-6.jpg',
      views: '2.9k',
      likes: '210'
    }
  ];

  return (
    <motion.section
      className={styles.gallery}
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
          <div className={styles.titleSection}>
            <span className={styles.subtitle}>Trabalhos Selecionados</span>
            <h2>Portfolio Criativo</h2>
          </div>
          <p>Uma coleção cuidadosamente selecionada dos meus melhores projetos</p>
        </motion.div>

        <div className={styles.bento}>
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${styles.bentoItem} ${styles[`item${item.id}`]}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} />

                <motion.div
                  className={styles.overlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.overlayContent}>
                    <div className={styles.stats}>
                      {/* <div className={styles.stat}>
                        <FiEye />
                        <span>{item.views}</span>
                      </div>
                      <div className={styles.stat}>
                        <FiHeart />
                        <span>{item.likes}</span>
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className={styles.content}>
                <span className={styles.category}>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery3;