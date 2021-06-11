import React from "react";
import TransactionsItem from "./transactionsItem/TransactionsItem";
import styles from "./Transaction.module.css";
import PropTypes from "prop-types";

const transactions = ({ items }) => {
  return (
    <table className={styles.transaction_history}>
      <thead className={styles.tableTitle}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <TransactionsItem transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export default transactions;

transactions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
