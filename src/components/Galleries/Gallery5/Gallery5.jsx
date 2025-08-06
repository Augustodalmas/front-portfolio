import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery5.module.css';

const Gallery5 = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const images = [
    { id: 1, src: '/imgs/massagem-1.jpg', category: 'web', title: 'Website' },
    { id: 2, src: '/imgs/massagem-2.jpg', category: 'mobile', title: 'App Mobile' },
    { id: 3, src: '/imgs/massagem-3.jpg', category: 'web', title: 'E-commerce' },
    { id: 4, src: '/imgs/massagem-4.jpg', category: 'design', title: 'Branding' },
    { id: 5, src: '/imgs/massagem-5.jpg', category: 'mobile', title: 'App iOS' },
    { id: 6, src: '/imgs/massagem-6.jpg', category: 'design', title: 'Logo' }
  ];

  const tabs = ['all', 'web', 'mobile', 'design'];
  const filteredImages = activeTab === 'all' ? images : images.filter(img => img.category === activeTab);

  return (
    <motion.section className={styles.gallery}>
      <div className={styles.container}>
        <h2>Galeria com Tabs</h2>
        
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={styles.item}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
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

export default Gallery5;