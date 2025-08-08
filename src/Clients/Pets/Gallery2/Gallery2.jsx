import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styles from './Gallery2.module.css';

const Gallery2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dogs = [
    {
      id: 1,
      src: '/imgs/pet-1.jpg',
      title: 'Luna',
      description: 'Cadela dócil, 4 anos, castrada'
    },
    {
      id: 2,
      src: '/imgs/pet-2.jpg',
      title: 'Max',
      description: 'Cão brincalhão, 1 ano, vacinado'
    },
    {
      id: 3,
      src: '/imgs/pet-3.jpg',
      title: 'Bella',
      description: 'Cadela carinhosa, 3 anos, porte pequeno'
    },
    {
      id: 4,
      src: '/imgs/pet-4.jpg',
      title: 'Rex',
      description: 'Cão leal, 4 anos, ideal para famílias'
    },
    {
      id: 5,
      src: '/imgs/pet-5.jpg',
      title: 'Thor',
      description: 'Cão protetor, 5 anos, porte grande'
    },
    {
      id: 6,
      src: '/imgs/pet-6.jpg',
      title: 'Nina',
      description: 'Cadela energética, 1 ano, adora crianças'
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
    const nextIndex = (currentIndex + 1) % dogs.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(dogs[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? dogs.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(dogs[prevIndex]);
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
          <h2>Cachorros Disponíveis para Adoção</h2>
          <p>Conheça nossos amiguinhos de quatro patas que estão procurando um lar</p>
        </motion.div>

        <div className={styles.masonry}>
          {dogs.map((dog, index) => (
            <motion.div
              key={dog.id}
              className={styles.imageCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openModal(dog, index)}
            >
              <img src={dog.src} alt={dog.title} />
              <div className={styles.overlay}>
                <h3>{dog.title}</h3>
                <p>{dog.description}</p>
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