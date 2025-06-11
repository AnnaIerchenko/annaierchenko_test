import axios from 'axios';

const baseURL = import.meta.env.VITE_GITHUB_API;

export const githubApi = axios.create({ baseURL });

export const fetchRepos = async (user: string, page: number, perPage: number = 5) => {
    try {
        const res = await githubApi.get(`/users/${user}/repos`, {
            params: {
                per_page: perPage,
                page,
            },
        });
        return res.data || [];
    } catch (error) {
        console.error('Failed to fetch repos', error);
        return [];
    }
};
