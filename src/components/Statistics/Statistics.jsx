import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = function ({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}{' '}
      {/* умовний рендеринг */ 'Upload stats'}
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
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;