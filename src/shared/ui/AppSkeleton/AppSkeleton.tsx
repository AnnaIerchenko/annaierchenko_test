import styles from './AppSkeleton.module.css';

export const AppSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header} />
            <div className={styles.content} />
        </div>
    );
};
