import style from './Statistics.module.css';
import { IconContext } from 'react-icons';

export const StatisticsItem = ({ stat, icon }) => {
  return (
    <li className={style.item}>
      <IconContext.Provider value={{ size: 40 }}>{icon}</IconContext.Provider>

      <span className={style.counter}>{stat.total}</span>
      <p className={style.text}>{stat.title}</p>
    </li>
  );
};
