import React from 'react';
import { motion } from 'framer-motion';
import styles from './About3.module.css';

const About3 = () => {
  const timeline = [
    { year: '2022', title: 'Início da Jornada', desc: 'Ingressei em Engenharia da Computação.' },
    { year: '2023', title: 'Linguagem C', desc: 'Primeiro contato com programação.' },
    { year: '2023', title: 'Git & Github', desc: 'Primeiro commit no Github.' },
    { year: '2023', title: 'Conhecimento Python', desc: 'Inicio de aplicações em Python.' },
    { year: '2023', title: 'Especialização em Python', desc: 'Desenvolvimento de aplicativos com Django.' },
    { year: '2025', title: 'Primeira Oportunidade', desc: 'Inicio do meu estágio na área do desenvolvimento.' },
    { year: '2025', title: 'Saga JavaScript', desc: 'Desenvolvimento de APIs em Node, e páginas com React.' }
  ];

  return (
    <motion.section
      id="sobre"
      className={styles.about}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.imageContainer}>
              <img src="/imgs/perfil.jpg" alt="Perfil" />
              <div className={styles.imageBorder}></div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contentSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.header}>
              <h2>Olá, eu sou o Augusto</h2>
              <p className={styles.role}>Desenvolvedor Back-End</p>
            </div>

            <div className={styles.description}>
              <p>
                Transformo ideias em experiências digitais memoráveis. Com paixão
                por código limpo e design intuitivo, crio soluções que conectam
                pessoas e tecnologia de forma natural.
              </p>

              <p>
                Especializado em desenvolvimento web moderno, sempre em busca de
                novas tecnologias e metodologias que possam melhorar a experiência
                do usuário final.
              </p>
            </div>

            <div className={styles.timeline}>
              <h3>Minha Trajetória</h3>
              <div className={styles.timelineList}>
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
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