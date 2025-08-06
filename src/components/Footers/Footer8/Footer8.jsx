import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import Logo from '../../Logo/Logo';
import styles from './Footer8.module.css';

const Footer8 = () => {
  const links = [
    { title: 'Sobre', href: '#about' },
    { title: 'Trabalhos', href: '#work' },
    { title: 'Contato', href: '#contact' },
    { title: 'Blog', href: '#blog' }
  ];

  return (
    <motion.footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo variant="light" size="medium" />
            <p>Studio criativo especializado em experiências digitais únicas.</p>
          </div>
          
          <div className={styles.links}>
            <h4>Links</h4>
            <ul>
              {links.map(link => (
                <li key={link.title}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.contact}>
            <h4>Contato</h4>
            <p>contato@studio.com</p>
            <p>+55 (11) 99999-9999</p>
            <p>São Paulo, SP</p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>
            Feito com <FiHeart className={styles.heart} /> por Studio
          </p>
          <p>&copy; 2024 Todos os direitos reservados</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer8;