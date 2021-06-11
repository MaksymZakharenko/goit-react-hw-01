import styles from "./FriendListItem.module.css";
import PropTypes from 'prop-types';

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

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};