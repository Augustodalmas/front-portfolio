import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './Gallery2.module.css';

const Gallery2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: '/imgs/massagem-1.jpg',
      title: 'Terapia Relaxante',
      description: 'Massagem terapêutica completa'
    },
    {
      id: 2,
      src: '/imgs/massagem-2.jpg',
      title: 'Massagem Pedras Quentes',
      description: 'Relaxamento profundo'
    },
    {
      id: 3,
      src: '/imgs/massagem-3.jpg',
      title: 'Reflexologia',
      description: 'Técnicas especializadas'
    },
    {
      id: 4,
      src: '/imgs/massagem-4.jpg',
      title: 'Aromaterapia',
      description: 'Óleos essenciais naturais'
    },
    {
      id: 5,
      src: '/imgs/massagem-5.jpg',
      title: 'Massagem Sueca',
      description: 'Técnica clássica'
    },
    {
      id: 6,
      src: '/imgs/massagem-6.jpg',
      title: 'Drenagem Linfática',
      description: 'Desintoxicação corporal'
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <motion.section 
      className={styles.gallery}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Galeria de Trabalhos</h2>
          <p>Clique nas imagens para visualizar em tamanho completo</p>
        </motion.div>

        <div className={styles.masonry}>
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={styles.imageCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openModal(image, index)}
            >
              <img src={image.src} alt={image.title} />
              <div className={styles.overlay}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className={styles.modalContent}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.closeBtn} onClick={closeModal}>
                  <FiX />
                </button>
                
                <button className={styles.navBtn} onClick={prevImage}>
                  <FiChevronLeft />
                </button>
                
                <div className={styles.imageWrapper}>
                  <img src={selectedImage.src} alt={selectedImage.title} />
                  <div className={styles.imageInfo}>
                    <h3>{selectedImage.title}</h3>
                    <p>{selectedImage.description}</p>
                  </div>
                </div>
                
                <button className={`${styles.navBtn} ${styles.next}`} onClick={nextImage}>
                  <FiChevronRight />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Gallery2;