import styles from './Footer.module.css';
import logoSangushko from '../../assets/logo-sangushko.jpg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>Спонсори </div>
      <div className={styles.sponsors}>
        <a
          href="https://www.slavuta-pivzavod.com.ua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.footerImg}
            src={logoSangushko}
            alt="logo-sangushko"
          />
        </a>
      </div>
      <div className={styles.info}>© 2006-2026</div>
    </footer>
  );
};

export default Footer;
