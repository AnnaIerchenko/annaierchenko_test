import styles from './RepoEmptyState.module.css';
import { FaTimesCircle } from 'react-icons/fa';

export const RepoEmptyState = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <FaTimesCircle size={48} />
                <p>Repository list is empty</p>
            </div>
        </div>
    );
};
