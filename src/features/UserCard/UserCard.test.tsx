import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';
import type { User } from '../../shared/lib/types';

describe('UserCard', () => {
    const mockUser: User = {
        login: 'torvalds',
        name: 'Linus Torvalds',
        avatar_url: 'https://avatars.githubusercontent.com/u/1024025?v=4',
        html_url: 'https://github.com/torvalds',
        followers: 1000,
        following: 0,
        public_repos: 0,
    };

    it('не рендерит ничего, если user не передан', () => {
        const { container } = render(<UserCard user={undefined} />);
        expect(container.firstChild).toBeNull();
    });

    it('отображает аватар, имя и логин пользователя', () => {
        render(<UserCard user={mockUser} />);
        expect(screen.getByAltText('torvalds')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Linus Torvalds/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /torvalds/i })).toHaveAttribute(
            'href',
            mockUser.html_url,
        );
    });

    it('отображает количество фолловеров и фолловингов', () => {
        render(<UserCard user={mockUser} />);

        const followersText = screen.getByTestId('followers');
        const followingText = screen.getByTestId('following');

        expect(followersText).toHaveTextContent('1 000 followers');
        expect(followingText).toHaveTextContent('0 following');
    });
});
