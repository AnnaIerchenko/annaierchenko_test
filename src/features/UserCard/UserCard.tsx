import { FaUser, FaUserFriends } from 'react-icons/fa';
import styles from './UserCard.module.css';
import type { User } from '../../shared/lib/types';

export const UserCard = ({ user }: { user?: User }) => {
    if (!user) return null;

    return (
        <div className={styles.card}>
            <img src={user.avatar_url} alt={user.login} className={styles.avatar} />
            <div className={styles.nameRow}>
                <h2>{user.name}</h2>
                <a
                    href={user.html_url}
                    className={styles.userLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {user.login}
                </a>
            </div>
            <p className={styles.stats}>
                <span data-testid="followers" className={styles.statBlock}>
                    <FaUserFriends className={styles.icon} />
                    {user.followers.toLocaleString()} followers
                </span>
                <span data-testid="following" className={styles.statBlock}>
                    <FaUser className={styles.icon} />
                    {user.following} following
                </span>
            </p>
        </div>
    );
};
