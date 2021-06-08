import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.item}>
      <span
        className={
          friend.isOnline ? styles.status_online : styles.status_offline
        }
      />
      <img className="avatar" src={friend.avatar} alt="" width="120" />
      <p className="name">{friend.name}</p>
    </li>
  );
};

export default FriendListItem;
