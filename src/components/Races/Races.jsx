import styles from './Races.module.css';
import { useEffect, useState } from 'react';
import formatDate from '../../utils/formatDate';

const Races = () => {
  const [stages, setStages] = useState([]);

  useEffect(() => {
    fetch('/data/calendar.json')
      .then((res) => res.json())
      .then((data) => setStages(data))
      .catch((err) => console.error('Ошибка загрузки:', err));
  }, []);

  return (
    <main className={styles.section}>
      <div className={styles.title}>Races</div>
      {stages.map((stage) => (
        <div key={stage.id} className={styles.stage}>
          <div className={styles.stageName}>
            {stage.name}{' '}
            <span className={styles.location}>({stage.location})</span>
          </div>

          <p className={styles.startDate}>
            {stage.startDate} — {stage.endDate}
          </p>

          {stage.competitions.map((race) => (
            <div key={race.id}>
              <div className={styles.raceInfo}>
                <div>{formatDate(race.date)}</div>
                <div>
                  {race.discipline} {race.distance}, {race.gender}
                </div>
                <div>{race.status}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
};

export default Races;
