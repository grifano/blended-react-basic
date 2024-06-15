import { cryptoFormatDate } from '../../Helpers/formatDate';
import style from './CryptoHistory.module.css';

const tableHeaders = ['№', 'price', 'amount', 'date'];

export const CryptoHistory = ({ transactions }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map(header => (
            <th key={header} className={style.th}>
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, price, amount, date }, index) => {
          return (
            <tr key={id} className={style.tr}>
              <td className={style.td}>{++index}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{cryptoFormatDate(date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
