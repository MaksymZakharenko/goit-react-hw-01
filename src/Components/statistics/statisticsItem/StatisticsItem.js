import React from 'react';
import styles from "./StatisticsItem.module.css"
import PropTypes from "prop-types";

const StatisticsItem = ({ stat }) => {

  return (
    <li className={styles.item}>
      <span className="label"> {stat.label}</span>
      <span className="percentage"> {stat.percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};