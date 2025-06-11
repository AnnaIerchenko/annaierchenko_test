import styles from './NotFound.module.css';
import { FaUser } from 'react-icons/fa';

export const NotFound = () => {
    return (
        <div className={styles.container}>
            <FaUser size={48} />
            <p>User not found</p>
        </div>
    );
};
