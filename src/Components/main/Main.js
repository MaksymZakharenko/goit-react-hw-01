import React from "react";
import data from "../../data";
import FriendList from "../friendList/FriendList";
import Profile from "../profile/Profile";
import Statistics from "../statistics/Statistics";
import Transactions from "../transactions/Transactions";
import styles from "./Main.module.css";

const { user, statistics, friends, transactions } = data;

const Main = () => {
  return (
    <main>
      <div className={styles.userBlock}>
        <div className={styles.profile}>
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <div className={styles.stat}>
            <Statistics stats={statistics} title="Upload Stats" />
          </div>
        </div>
        <FriendList friends={friends} />
        <Transactions items={transactions} />
      </div>
    </main>
  );
};

export default Main;
