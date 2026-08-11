import styles from './Footer.module.css';
import logoPpb from '../../assets/logo-ppb.png';
import logoAcme from '../../assets/logo-acme.jpg';
import logoRoeckl from '../../assets/logo-roeckl.png';
import logoShayan from '../../assets/logo-shayan.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>Спонсори Федерації біатлону України</div>
      <div className={styles.sponsors}>
        <a
          href="http://ppb.com.ua/ua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoPpb} alt="logo-first-private-browary" />
        </a>
        <a
          href="https://www.roeckl.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoRoeckl} alt="logo-roeckl" />
        </a>
        <a href="http://acme.com.ua/" target="_blank" rel="noopener noreferrer">
          <img src={logoAcme} alt="logo-acme" />
        </a>
        <a
          href="https://apartel-resorts.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoShayan} alt="logo-shayan" />
        </a>
      </div>
      <div className={styles.info}>© 2006-2026</div>
    </footer>
  );
};

export default Footer;
