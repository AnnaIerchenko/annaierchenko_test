import { useEffect, useState } from 'react';

import styles from './App.module.css';
import { SearchInput } from '../features/SearchInput/SearchInput';
import { EmptyState } from '../features/EmptyState/EmptyState';
import { UserCard } from '../features/UserCard/UserCard';
import { RepoList } from '../features/RepoList/RepoList';
import { githubApi } from '../shared/lib/api';
import type { User } from '../shared/lib/types';
import { AppSkeleton } from '../shared/ui/AppSkeleton';
import { NotFound } from '../features/NotFound/NotFound';
import type { AxiosResponse } from 'axios';

export const App = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState<User | null>(null);
    const [loadingUser, setLoadingUser] = useState(false);

    useEffect(() => {
        if (!username) {
            setUserData(null);
            return;
        }
        setLoadingUser(true);
        githubApi
            .get(`/users/${username}`)
            .then((res: AxiosResponse) => setUserData(res.data))
            .catch(() => setUserData(null))
            .finally(() => setLoadingUser(false));
    }, [username]);

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <SearchInput onSearch={setUsername} />
            </header>

            <main className={styles.main}>
                {!username ? (
                    <EmptyState />
                ) : loadingUser ? (
                    <AppSkeleton />
                ) : !userData ? (
                    <div className={styles.emptyWrapper}>
                        <NotFound />
                    </div>
                ) : (
                    <div className={styles.container}>
                        <UserCard user={userData} />
                        <RepoList user={username} totalRepos={userData.public_repos} />
                    </div>
                )}
            </main>
        </div>
    );
};
