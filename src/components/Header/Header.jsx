import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.imgContainer}>
        <img
          className={styles.image}
          src="/src/assets/biathlon-logo.svg"
          alt="biathlon logo"
        />
      </div>

      <div className={styles.burger} onClick={toggleMenu}>
        {isOpen ? <RxCross1 size={40} /> : <RxHamburgerMenu size={40} />}
      </div>
      {isOpen && <div className={styles.backdrop} onClick={toggleMenu}></div>}
      <nav className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a
              className={styles.navLink}
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Main
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.navLink}
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.navLink}
              href="#"
              onClick={() => setIsOpen(false)}
            >
              News
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.navLink}
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Tournament
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={styles.navLink}
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
