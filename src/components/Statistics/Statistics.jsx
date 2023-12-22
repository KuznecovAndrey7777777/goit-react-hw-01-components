import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = function ({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className="title">Upload stats</h2>

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={styles.item}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}> {percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
