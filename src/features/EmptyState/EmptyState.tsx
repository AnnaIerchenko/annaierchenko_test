import styles from './EmptyState.module.css';
import { FaSearch } from 'react-icons/fa';

export const EmptyState = () => {
    return (
        <div className={styles.container}>
            <FaSearch size={48} />
            <p>
                Start with searching
                <br />a GitHub user
            </p>
        </div>
    );
};
