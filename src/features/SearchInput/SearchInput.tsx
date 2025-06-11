import React, { useState } from 'react';
import styles from './SearchInput.module.css';
import { FaGithub, FaSearch } from 'react-icons/fa';
import { useDebouncedEffect } from '../../shared/hooks/useDebouncedEffect';

interface Props {
    onSearch: (username: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
    const [value, setValue] = useState('');
    const [hasTyped, setHasTyped] = useState(false);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && value.trim()) {
            onSearch(value.trim());
            setValue('');
            setHasTyped(false);
        }
    };

    useDebouncedEffect(
        () => {
            if (value.trim() && hasTyped) {
                onSearch(value.trim());
            }
        },
        [value],
        500,
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setHasTyped(true);
    };

    return (
        <div className={styles.wrapper}>
            <FaGithub className={styles.githubIcon} />
            <FaSearch className={styles.icon} />
            <input
                type="text"
                placeholder="Введите username тут"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                className={styles.input}
            />
        </div>
    );
};
