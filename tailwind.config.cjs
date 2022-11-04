/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#0F172A',
                    accent: '#1E293B',
                    darker: '#080C15',
                    muted: '#6C757D',
                },
                light: {
                    DEFAULT: '#FFFFFF',
                    accent: '#F8FAFC',
                    darker: '#E2E8F0',
                    muted: '#94A3B8',
                },
                primary: {
                    DEFAULT: '#6C4DE6',
                    hover: '#8971EB',
                },
            },
        },
    },
    plugins: [],
};
