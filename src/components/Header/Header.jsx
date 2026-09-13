import { useState, useEffect } from 'react';
import Standings from '../Standings/Standings';
import { menAthletes, womenAthletes } from '../../../public/data/athletes';
import styles from './Header.module.css';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import mainFoto from '../../assets/biathlon-main.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStandingsMenOpen, setStandingsMenOpen] = useState(false);
  const [isStandingsWomenOpen, setStandingsWomenOpen] = useState(false);
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

  const navItems = [
    { id: 1, title: 'Main' },
    { id: 1, title: 'Team' },
    { id: 1, title: 'News' },
    { id: 1, title: 'Tournament' },
    { id: 1, title: 'Contacts' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.heroSection}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
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
            {navItems.map((item) => {
              return (
                <li key={item.id} className={styles.listItem}>
                  <a
                    className={styles.navLink}
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.fotoWrapper}>
        <img
          className={styles.mainFoto}
          src={mainFoto}
          alt="main foto biathlon"
        />
        <div className={styles.tableMen}>
          <Standings
            title="Men`s Score"
            athletes={menAthletes}
            isOpen={isStandingsMenOpen}
            setIsOpen={setStandingsMenOpen}
          />
        </div>
        <div className={styles.tableWomen}>
          <Standings
            title="Women`s Score"
            athletes={womenAthletes}
            isOpen={isStandingsWomenOpen}
            setIsOpen={setStandingsWomenOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
