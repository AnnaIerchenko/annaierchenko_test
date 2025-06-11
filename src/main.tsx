import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/global.css';
import { App } from './app/App';

if (import.meta.env.DEV) {
    console.log('VITE_GITHUB_API:', import.meta.env.VITE_GITHUB_API);
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
