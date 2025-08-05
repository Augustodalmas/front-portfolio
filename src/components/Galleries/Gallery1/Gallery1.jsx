import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './Gallery1.module.css';

const Gallery1 = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Terapia Relaxante',
      category: 'terapia',
      description: 'Massagem terapêutica para alívio do estresse',
      image: '/imgs/massagem-1.jpg',
      tech: ['Relaxamento', 'Bem-estar']
    },
    {
      id: 2,
      title: 'Pedras Quentes',
      category: 'especial',
      description: 'Técnica com pedras aquecidas',
      image: '/imgs/massagem-2.jpg',
      tech: ['Pedras', 'Calor']
    },
    {
      id: 3,
      title: 'Reflexologia',
      category: 'terapia',
      description: 'Massagem nos pés e pontos reflexos',
      image: '/imgs/massagem-3.jpg',
      tech: ['Pés', 'Reflexos']
    },
    {
      id: 4,
      title: 'Aromaterapia',
      category: 'especial',
      description: 'Massagem com óleos essenciais',
      image: '/imgs/massagem-4.jpg',
      tech: ['Óleos', 'Aromas']
    },
    {
      id: 5,
      title: 'Massagem Sueca',
      category: 'terapia',
      description: 'Técnica clássica de relaxamento',
      image: '/imgs/massagem-5.jpg',
      tech: ['Clássica', 'Sueca']
    },
    {
      id: 6,
      title: 'Drenagem Linfática',
      category: 'especial',
      description: 'Desintoxicação e redução de inchaço',
      image: '/imgs/massagem-6.jpg',
      tech: ['Drenagem', 'Linfática']
    }
  ];

  const filters = ['all', 'terapia', 'especial'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Meu Portfólio</h2>
          <p>Alguns dos meus trabalhos mais recentes</p>
        </motion.div>

        <motion.div 
          className={styles.filters}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'Todos' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className={styles.grid}
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              layout
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <div className={styles.actions}>
                    <button className={styles.actionBtn}>
                      <FiExternalLink />
                    </button>
                    <button className={styles.actionBtn}>
                      <FiGithub />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tech}>
                  {project.tech.map(tech => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery1;