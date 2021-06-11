import React from "react";
import StatisticsItem from "./statisticsItem/StatisticsItem";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul className={styles.stat}>
        {stats.map((stat) => (
          <StatisticsItem stat={stat} key={stat.id} />
        ))}
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
