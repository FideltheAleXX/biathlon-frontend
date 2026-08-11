import styles from './LeftSideBar.module.css';
import foto from '../../assets/fotogalery.jpg';
const LeftSideBar = () => {
  const infoBlock = [
    { id: 1, name: 'Усе про біатлон' },
    { id: 2, name: 'Чат' },
    { id: 3, name: 'Блоги' },
    { id: 4, name: 'Інтервю' },
    { id: 5, name: 'Преса' },
    { id: 6, name: 'Голосування' },
    { id: 7, name: 'Трансляції на ТБ' },
    { id: 8, name: 'Сайти про біатлон' },
    { id: 9, name: 'Контакти' },
  ];

  const worldCup = [
    { id: 1, name: 'Календар' },
    { id: 2, name: 'Кубок світу' },
    { id: 3, name: 'Кубок IBU' },
    { id: 4, name: 'Юніорський кубок IBU' },
    { id: 5, name: 'Результати' },
    { id: 6, name: 'Кубок націй' },
    { id: 7, name: 'Кубок націй IBU' },
    { id: 8, name: 'Статистика стрільби' },
    { id: 9, name: 'Швидкість спортсменів' },
    { id: 10, name: 'Біатлонна статистика' },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.title}>ФОТОГРАФІЇ</div>
      <img className={styles.img} src={foto} alt="biathlon-foto" />
      <div>Головна</div>
      <div>Обговорення</div>
      <div className={styles.tournament}>Tournament</div>
      <ul className={styles.list}>
        {infoBlock.map((info) => (
          <li key={info.id}>{info.name}</li>
        ))}
      </ul>
      <p className={styles.name}>Кубок світу</p>
      <ul className={styles.list}>
        {worldCup.map((cup) => (
          <li key={cup.id}>{cup.name}</li>
        ))}
      </ul>
      <div className={styles.name}>Наша команда</div>
      <ul className={styles.list}>
        <li>Наша збірна</li>
        <li>Автографкарти</li>
        <li>Фотогалереї збірної</li>
        <li>Особисті фотографії</li>
        <li>Чемпіонати України</li>
        <li>Спорт-школи України</li>
      </ul>
      <div className={styles.name}>Мультимедіа</div>
      <ul className={styles.list}>
        <li>Профайли</li>
        <li>Фотогалереї</li>
      </ul>
      <div className={styles.title}>ЗАРЕЄСТРУЙТЕСЬ</div>
      <ul className={styles.list}>
        <li>Реєстрація</li>
        <li>Вхід</li>
        <li>Мій профайл</li>
      </ul>
      <div className={styles.title}>НАСТУПНА ГОНКА</div>
      <div className={styles.nextRace}>Кубок світу, Отепяя</div>
      <p>2026-03-12 15:15 (СЕТ)</p>
      <p>Спринт 10 км, Чоловіки</p>
    </section>
  );
};

export default LeftSideBar;
