import React from 'react';
import styles from "./TransactionsItem.module.css"
import PropTypes from "prop-types";

const TransactionsItem = ({ transaction }) => {

  return (
    <tr>
      <td className={styles.table}>{transaction.type}</td>
      <td className={styles.table}>{transaction.amount}</td>
      <td className={styles.table}>{transaction.currency}</td>
    </tr>
  );
};

export default TransactionsItem;

TransactionsItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};