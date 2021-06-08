import React from 'react';
import styles from "./TransactionsItem.module.css"

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