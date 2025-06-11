import { useState } from 'react';
import styles from './RepoList.module.css';
import { RepoEmptyState } from '../RepoEmptyState/RepoEmptyState';
import { fetchRepos } from '../../shared/lib/api';
import type { Repo } from '../../shared/lib/types';
import { useDebouncedEffect } from '../../shared/hooks/useDebouncedEffect';

type RepoListProps = {
    user: string;
    totalRepos: number;
};

export const RepoList: React.FC<RepoListProps> = ({ user, totalRepos }: RepoListProps) => {
    const perPage = 5;
    const [repos, setRepos] = useState<Repo[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalRepos / perPage);

    useDebouncedEffect(
        () => {
            let isCancelled = false;
            fetchRepos(user, currentPage, perPage).then((data) => {
                if (!isCancelled) setRepos(data);
            });
            return () => {
                isCancelled = true;
            };
        },
        [user, currentPage],
        500,
    );

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };
    if (!Array.isArray(repos) || repos.length === 0) {
        return <RepoEmptyState />;
    }

    let pages: (number | string)[] = [];
    if (totalPages <= 3) {
        pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
        if (currentPage <= 3) {
            pages = [1, 2, 3, '...', totalPages];
        } else if (currentPage >= totalPages - 2) {
            pages = [
                1,
                '...',
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
        } else {
            pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }
    }
    const startItem = (currentPage - 1) * perPage + 1;
    const endItem = Math.min(currentPage * perPage, totalRepos);

    return (
        <div className={styles.list}>
            <h3>Repositories ({totalRepos})</h3>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            <strong>{repo.name}</strong>
                        </a>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>

            <div className={styles.paginationContainer}>
                <span className={styles.pageInfo}>
                    {`${startItem}–${endItem} of ${totalRepos} items`}
                </span>
                {/* Кнопка Previous */}
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={styles.pageButton}
                >
                    {'<'}
                </button>
                {/* Кнопки страниц (включая '...' как span) */}
                {pages.map((page, idx) =>
                    typeof page === 'number' ? (
                        <button
                            key={idx}
                            onClick={() => handlePageClick(page)}
                            className={`${styles.pageButton} ${page === currentPage ? styles.activePageButton : ''}`}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={idx} className={styles.ellipsis}>
                            {page}
                        </span>
                    ),
                )}
                {/* Кнопка Next */}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={styles.pageButton}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};
