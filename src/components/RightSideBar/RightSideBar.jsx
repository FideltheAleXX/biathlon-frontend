import styles from './RightSideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSquareFacebook,
  faTelegram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const RightSideBar = () => {
  const totalVotes = 186;

  const options = [
    { name: 'у топ-10 (7-10 місце)', votes: 62 },
    { name: 'у топ-15 (11-15 місце)', votes: 49 },
    { name: "у 'квітковій церемонії' (4-6 місце)", votes: 33 },
    { name: 'у топ-20 (16-20 місце)', votes: 27 },
    { name: 'у топ-20 (16-20 місце)', votes: 15 },
  ];

  const athletes = [
    {
      id: 1,
      name: 'Юлія Джима',
      slug: 'dzhima-yuliia',
      link: 'BTUKR21909199001',
    },
    {
      id: 2,
      name: 'Дмитро Підручний',
      slug: 'pidruchnyi-dmytro',
      link: 'BTUKR10511199101',
    },
    {
      id: 3,
      name: 'Стурла Легрейд',
      slug: 'laegreid-sturla-holm',
      link: 'BTNOR12002199701',
    },
    {
      id: 4,
      name: 'Богдан Борковський',
      slug: 'borkovskyi-bohdan',
      link: 'BTUKR11804200401',
    },
    {
      id: 5,
      name: 'Себастьян Самуельссон',
      slug: 'samuelsson-sebastian',
      link: 'btswe12803199701',
    },
    {
      id: 6,
      name: 'Кантен Фійон-Майє',
      slug: 'fillon-maillet-quentin',
      link: 'BTFRA11608199201',
    },
    {
      id: 7,
      name: 'Олена Городна',
      slug: 'horodna-olena',
      link: 'BTUKR20607200401',
    },
    { id: 8, name: 'Яков Фак', slug: 'fak-jakov', link: 'BTCRO10108198701' },
    {
      id: 9,
      name: 'Дарина Чалик',
      slug: 'chalyk-daryna',
      link: 'BTUKR21908200101',
    },
    {
      id: 10,
      name: 'Уле-Айнар Бйорндален',
      slug: 'bjoerndalen-ole-einar',
      link: 'BTNOR12701197401',
    },
    {
      id: 11,
      name: 'Віталій Мандзин',
      slug: 'mandzyn-vitalii',
      link: 'BTUKR10504200301',
    },
    {
      id: 12,
      name: 'Христина Дмитренко',
      slug: 'dmytrenko-khrystyna',
      link: 'BTUKR23105199901',
    },
    {
      id: 13,
      name: 'Анастасія Меркушина',
      slug: 'merkushyna-anastasiya',
      link: 'BTUKR21401199501',
    },
    {
      id: 14,
      name: 'Анна Кривонос',
      slug: 'kryvonos-anna',
      link: 'BTUKR22509199701',
    },
    {
      id: 15,
      name: 'Антон Дудченко',
      slug: 'dudchenko-anton',
      link: 'BTUKR11712199601',
    },
  ];

  const socials = [
    {
      icon: faSquareFacebook,
      url: 'https://www.facebook.com/biathlon.com.ua/',
      color: 'rgb(177, 151, 252)',
    },
    {
      icon: faInstagram,
      url: 'https://www.instagram.com/uabiathlon/',
      color: 'rgb(20, 19, 18)',
    },
    {
      icon: faYoutube,
      url: 'https://www.youtube.com/channel/UC6FNT1jyB_QmmZktDWsN3Eg',
      color: 'rgb(235, 87, 11)',
    },
    {
      icon: faTwitter,
      url: 'https://twitter.com/biathloncomua',
      color: 'rgb(116, 192, 252)',
    },
    {
      icon: faTelegram,
      url: 'https://t.me/biathloncomua',
      color: 'rgb(116, 192, 252)',
    },
  ];

  const interviews = [
    {
      id: 1,
      date: '2026-03-08',
      name: 'Дмитро Підручний: Старався триматися з сильними суперниками',
    },
    {
      id: 2,
      date: '2026-03-08',
      name: 'Дарина Чалик: Відчувала, що можу покращити позиції',
    },
    {
      id: 3,
      date: '2026-03-07',
      name: 'Віталій Мандзин: Потрібно було постійно тримати високий темп',
    },
    {
      id: 4,
      date: '2026-03-07',
      name: 'Богдан Цимбал: Радий, що сьогодні зміг пробігти перший етап',
    },
    {
      id: 5,
      date: '2026-03-06',
      name: 'Дмитро Підручний: Всі з перших метрів тримають дуже високий темп',
    },
    {
      id: 6,
      date: '2026-03-05',
      name: 'Христина Дмитренко: Намагалась свій програш компенсувати чистою стрільбою',
    },
  ];

  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {socials.map((social, i) => (
          <li key={i}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={social.icon}
                style={{ color: social.color }}
              />
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.title}>ОЦІНКИ</div>
      <div>Оцінки в останній гонці</div>
      <button className={styles.btn}>Поставити / подивитись оцінки</button>

      <div className={styles.title}>ГОЛОСУВАННЯ</div>
      <div className={styles.question}>
        Які місця стануть найкращими для наших біатлоністів на ОІ?
      </div>
      {options.map((opt, index) => {
        const percent = ((opt.votes / totalVotes) * 100).toFixed(1);

        return (
          <div key={index} className={styles.pollOption}>
            <span>{opt.name}</span>

            <div className={styles.pollBar}>
              <div
                className={styles.pollFill}
                style={{ width: `${(opt.votes / totalVotes) * 100}%` }}
              />
            </div>

            <span>{opt.votes}</span>
          </div>
        );
      })}
      <button className={styles.btn}>Проголосувати</button>

      <div className={styles.title}>ПРОФАЙЛИ</div>
      <ul>
        {athletes.map((athlete) => (
          <li key={athlete.id}>
            <a
              href={`https://www.biathlonworld.com/athlete/${athlete.slug}/${athlete.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profile}
            >
              {athlete.name}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.title}>ІНТЕРВЮ</div>
      <ul>
        {interviews.map((interview) => (
          <li key={interview.id}>
            {interview.date}
            <p className={styles.interview}>{interview.name}</p>{' '}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RightSideBar;
