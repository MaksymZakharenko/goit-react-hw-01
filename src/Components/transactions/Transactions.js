import React from "react";
import TransactionsItem from "./transactionsItem/TransactionsItem";
import styles from "./Transaction.module.css";

const Transactions = ({ transactions }) => {
  return (
    <table class={styles.transaction_history}>
      <thead className={styles.tableTitle}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <TransactionsItem transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
