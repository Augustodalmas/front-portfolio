import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery5.module.css';

const Gallery5 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const images = [
    {
      id: 2,
      src: '/imgs/voleiAPP.jpg',
      category: 'Sistema',
      title: 'Volei APP',
      description: 'Sistema para organização de partidas de vôlei juntamente com um check-in.',
      tech: 'Django • SQlite',
      href: 'https://github.com/Augustodalmas/APP-VoleiAPP'
    },
    {
      id: 3,
      src: '/imgs/anaro.jpg',
      category: 'LandingPage',
      title: 'Landing Page - AnaRo',
      description: 'Site responsivo com +40% aumento em conversões.',
      tech: 'React • CSS3 • Framer Motion',
      href: 'https://anaromassagens.vercel.app/'
    },
    {
      id: 4,
      src: '/imgs/amor-de-la-pet.jpg',
      category: 'LandingPage',
      title: 'Landing Page - Amor de la Pet',
      description: 'Site responsivo para atrair novos clientes para o pet shop.',
      tech: 'React • CSS3 • Framer Motion',
      href: 'https://amor-de-la-pet.vercel.app/'
    },
    {
      id: 5,
      src: '/imgs/fakestore.jpg',
      category: 'Sistema',
      title: 'E-commerce Fakestore',
      description: 'Projeto desenvolvido para compreender tecnologias da empresa.',
      tech: 'React • Node.Js • Mongoose • Stripe',
      href: 'https://github.com/Augustodalmas/API-Fakestore'
    },
  ];

  const tabs = ['all', 'Sistema', 'LandingPage', 'API'];
  const filteredImages = activeTab === 'all' ? images : images.filter(img => img.category === activeTab);

  return (
    <motion.section id="trabalhos" className={styles.gallery}>
      <div className={styles.container}>
        <h2>Trabalhos realizados</h2>

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
            <motion.a
              key={image.id}
              href={image.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.item}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={image.src} alt={image.title} />
              <div className={styles.overlay}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <span className={styles.tech}>{image.tech}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery5;