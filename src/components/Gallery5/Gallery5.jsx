import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Gallery5.module.css';

const projects = [
  {
    id: 1,
    src: '/projetos/Dauth/tela-inicial.png',
    category: 'Sistema',
    title: 'Dauth',
    description: 'Sistema completo de agendamento para salões de beleza — controle de clientes, profissionais, pacotes e financeiro.',
    tech: ['React', 'Express.js', 'Supabase'],
    href: 'https://dauth.com.br',
  },
  {
    id: 2,
    src: '/imgs/arquitetura.svg',
    category: 'Dados',
    title: 'CS2 Data Engineering',
    description: 'Pipeline medalhão que extrai dados de partidas (.dem), processa via parsers Python, ingere na camada bronze e transforma com DBT até a camada analítica, disponibilizada por API.',
    tech: ['Python', 'DBT', 'Docker', 'API'],
    href: 'https://github.com/Augustodalmas/data-enginnering-cs2-stats',
  },
  {
    id: 3,
    src: '/projetos/Uminum/pagina-inicial.png',
    category: 'LandingPage',
    title: 'Uminum',
    description: 'Site institucional moderno desenvolvido para empresa local.',
    tech: ['React', 'Vite', 'Tailwind'],
    href: 'https://uminum.com.br',
  },
  {
    id: 4,
    src: '/projetos/Uminum Node/pagina-inicial.png',
    category: 'Sistema',
    title: 'System Uminum',
    description: 'Sistema interno de gerenciamento de jobs e projetos com filtragem avançada e CRUD completo.',
    tech: ['Django', 'Python', 'Bootstrap', 'SQLite'],
    href: null,
  },
  {
    id: 5,
    src: '/projetos/Cache/pagina-inicial.png',
    category: 'API',
    title: 'Cache em APIs',
    description: 'Estudo prático do impacto de cache em APIs — redução de 1000 queries para 1 em cenários de alto volume.',
    tech: ['Node.js', 'MongoDB', 'Docker'],
    href: 'https://github.com/Augustodalmas/Cache-NodeJS-Memory',
  },
  {
    id: 6,
    src: '/projetos/RabbitMq/pagina-github.png',
    category: 'API',
    title: 'RabbitMQ + Resend',
    description: 'Arquitetura de microsserviços com filas de mensagens — API Node.js publica eventos consumidos por worker Python para disparo de emails.',
    tech: ['Node.js', 'Python', 'RabbitMQ', 'Docker'],
    href: 'https://github.com/Augustodalmas/RabbitMQ-Resend',
  },
];

const tabs = [
  { key: 'all', label: 'Todos' },
  { key: 'Sistema', label: 'Sistema' },
  { key: 'LandingPage', label: 'Landing Page' },
  { key: 'API', label: 'API' },
  { key: 'Dados', label: 'Dados' },
];

const Gallery5 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <motion.section
      id="trabalhos"
      className={styles.gallery}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Portfólio</p>
          <h2 className={styles.title}>Trabalhos <em>realizados</em></h2>
        </div>

        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`${styles.tab} ${activeTab === tab.key ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
              >
                <div className={styles.cardImage}>
                  {project.src
                    ? <img src={project.src} alt={project.title} />
                    : <div className={styles.imagePlaceholder} />
                  }
                  {project.badge && (
                    <span className={styles.badge}>{project.badge}</span>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.category}>{project.category}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.techList}>
                    {project.tech.map(t => (
                      <span key={t} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                </div>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`Ver projeto ${project.title}`}
                  >
                    <span>Ver projeto</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery5;
