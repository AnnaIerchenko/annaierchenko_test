import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from './SearchInput';
import { vi } from 'vitest';

describe('SearchInput', () => {
    it('рендерит поле ввода', () => {
        render(<SearchInput onSearch={() => {}} />);
        expect(screen.getByPlaceholderText('Введите username тут')).toBeInTheDocument();
    });

    it('отправляет username при Enter', async () => {
        const onSearch = vi.fn();
        render(<SearchInput onSearch={onSearch} />);
        await userEvent.type(
            screen.getByPlaceholderText('Введите username тут'),
            'torvalds{enter}',
        );
        expect(onSearch).toHaveBeenCalledWith('torvalds');
    });
});
