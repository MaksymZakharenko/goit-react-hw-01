import React from 'react';
import StatisticsItem from './statisticsItem/StatisticsItem';
import styles from "./Statistics.module.css"

const Statistics = ({ statistics }) => {
  return (
    <ul className={styles.stat}>
      {statistics.map((stat) => (
        <StatisticsItem stat={stat} key={stat.id} />
      ))}
    </ul>
  );
};


export default Statistics;


