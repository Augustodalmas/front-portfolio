import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import Logo from '../../Logo/Logo';
import styles from './Footer1.module.css';

const Footer1 = () => {
  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#' },
    { name: 'Serviços', href: '#' },
    { name: 'Portfólio', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contato', href: '#' }
  ];

  const services = [
    { name: 'Web Design', href: '#' },
    { name: 'Desenvolvimento', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Consultoria', href: '#' },
    { name: 'SEO', href: '#' },
    { name: 'Manutenção', href: '#' }
  ];

  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.brand}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Logo variant="light" size="large" />
            <p>Criando experiências digitais excepcionais através de design inovador e desenvolvimento de qualidade.</p>
            
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <FiMail />
                <span>contato@studio.com</span>
              </div>
              <div className={styles.contactItem}>
                <FiPhone />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className={styles.contactItem}>
                <FiMapPin />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.links}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4>Links Rápidos</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className={styles.links}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4>Serviços</h4>
            <ul>
              {services.map((service, index) => (
                <motion.li 
                  key={service.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <a href={service.href}>{service.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className={styles.social}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4>Redes Sociais</h4>
            <p>Siga-nos para acompanhar nossos projetos e novidades</p>
            
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.bottom}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>&copy; 2024 Studio. Todos os direitos reservados.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer1;