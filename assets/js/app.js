import './bootstrap.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import '../styles/app.css';
import Layout from './components/Layout';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

const appName = "Symfony ❤️ Inertia.js";

createInertiaApp({
    progress: {
        showSpinner: true,
    },
    title: (title) => (title ? `${title} | ${appName}` : appName),
    resolve: (name) => {
        const page = require(`./pages/${name}`).default;
        if (page.layout === undefined) {
            page.layout = Layout;
        }
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});