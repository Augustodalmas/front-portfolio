import React from 'react';
import { motion } from 'framer-motion';
import styles from './About3.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const About3 = () => {
  const timeline = [
    { year: '2022', title: 'Início da Jornada', desc: 'Ingressei em Engenharia da Computação.' },
    { year: '2023', title: 'Linguagem C', desc: 'Primeiro contato com programação.' },
    { year: '2023', title: 'Git & Github', desc: 'Primeiro commit no Github.' },
    { year: '2023', title: 'Python', desc: 'Início de aplicações em Python e Django.' },
    { year: '2025', title: 'Primeiro Estágio', desc: 'Início do estágio na área de desenvolvimento.' },
    { year: '2025', title: 'JavaScript', desc: 'APIs em Node.js e interfaces com React.' },
    { year: '2026', title: 'Caminho de Dados', desc: 'Entrada na área de Dados — pipelines, engenharia de dados e transformação com DBT.' },
    { year: '2026', title: 'Infraestrutura Cloud', desc: 'Especialização em AWS — arquitetura, deploy e escalabilidade de aplicações na nuvem.' },
  ];

  return (
    <motion.section id="sobre" className={styles.about} {...fadeUp()}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <motion.div className={styles.imageSection} {...fadeUp(0.1)}>
            <div className={styles.imageContainer}>
              <img src="/imgs/perfil.jpeg" alt="Foto de Augusto Dalmas" />
              <div className={styles.imageBorder} />
            </div>
          </motion.div>

          <motion.div className={styles.contentSection} {...fadeUp(0.2)}>
            <p className={styles.eyebrow}>Sobre mim</p>

            <div className={styles.header}>
              <h2>Olá, eu sou o <em>Augusto</em></h2>
              <p className={styles.role}>Desenvolvedor Back-End & Dados</p>
            </div>

            <div className={styles.description}>
              <p>
                Transformo ideias em experiências digitais que funcionam de verdade.
                Com foco em código limpo e soluções duráveis, conecto pessoas e tecnologia
                de forma natural.
              </p>
              <p>
                Especializado em desenvolvimento web moderno — APIs, sistemas e landing pages
                que entregam resultado.
              </p>
            </div>

            <div className={styles.timeline}>
              <h3>Trajetória</h3>
              <div className={styles.timelineList}>
                {timeline.map((item, index) => (
                  <motion.div
                    key={`${item.year}-${item.title}`}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
                  >
                    <div className={styles.timelineYear}>{item.year}</div>
                    <div className={styles.timelineContent}>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About3;
