import { useState } from 'react';
import Table from '../Table/Table';
import { RxCross1 } from 'react-icons/rx';
import styles from './Standings.module.css';

const Standings = ({ title, athletes, isOpen, setIsOpen }) => {
  return (
    <>
      <section className={styles.section}>
        <button className={styles.mobileBtn} onClick={() => setIsOpen(true)}>
          {title}
        </button>

        <div className={styles.desktop}>
          <Table title={title} athletes={athletes} />
        </div>
        {isOpen && (
          <div className={styles.overlay} onClick={() => setIsOpen(false)}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setIsOpen(false)}>
                <RxCross1 />
              </button>

              <Table title={title} athletes={athletes} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Standings;
