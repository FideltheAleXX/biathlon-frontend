import styles from './Table.module.css';

const Table = ({ title, athletes }) => {
  const getPositionClass = (index) => {
    if (index === 0) return styles.position1;
    if (index === 1) return styles.position2;
    if (index === 2) return styles.position3;
    return '';
  };

  return (
    <>
      <section className={styles.section}>
        <p className={styles.title}>{title}</p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Athlete</th>
              <th className={styles.points}>Pts</th>
            </tr>
          </thead>
          <tbody>
            {athletes.map((athlete, index) => (
              <tr key={athlete.id}>
                <td className={`${styles.position} ${getPositionClass(index)}`}>
                  {index + 1}
                </td>
                <td>{athlete.name}</td>
                <td className={styles.points}>{athlete.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
